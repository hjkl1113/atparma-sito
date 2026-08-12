#!/usr/bin/env python3
"""Genera il notiziario audio del giorno dalle news pubblicate.

Costruisce un copione parlato dalle news più recenti in lib/news.json, lo
sintetizza in voce (macOS `say`, gratis; sostituibile con un TTS a pagamento),
salva l'audio in public/notiziario/latest.m4a e i metadati in lib/notiziario.json.
Poi basta commit + push perché il lettore sul sito riproduca il notiziario nuovo.

Uso:
    python3 audio.py                 # genera dal giorno più recente in news.json
    python3 audio.py --voice Alice   # scegli la voce macOS
"""
from __future__ import annotations
import argparse
import json
import os
import re
import subprocess

HERE = os.path.dirname(__file__)
REPO = os.path.abspath(os.path.join(HERE, "..", ".."))
NEWS_JSON = os.path.join(REPO, "lib", "news.json")
META_JSON = os.path.join(REPO, "lib", "notiziario.json")
AUDIO_DIR = os.path.join(REPO, "public", "notiziario")
AUDIO_M4A = os.path.join(AUDIO_DIR, "latest.m4a")

MESI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
        "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
GIORNI = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"]


def data_parlata(iso: str) -> str:
    import datetime
    y, m, d = (int(x) for x in iso.split("-"))
    try:
        gi = datetime.date(y, m, d).weekday()
        return f"{GIORNI[gi]} {d} {MESI[m-1]}"
    except Exception:
        return f"{d} {MESI[m-1]}"


def prima_frase(html: str) -> str:
    testo = re.sub(r"<[^>]+>", " ", html)
    testo = re.sub(r"\s+", " ", testo).strip()
    frase = re.split(r"(?<=[.!?])\s", testo)[0]
    return frase[:220]


def build_script(news: list) -> tuple[str, str, list]:
    if not news:
        return "", "", []
    data_iso = news[0]["data"]
    oggi = [n for n in news if n["data"] == data_iso]
    intro = (f"Aggiornamenti fiscali di A.T. Consulting Parma. "
             f"Ecco le principali novità di {data_parlata(data_iso)}.")
    ordinali = ["Primo", "Secondo", "Terzo", "Quarto", "Quinto", "Sesto"]
    corpo = []
    for i, n in enumerate(oggi):
        lead = ordinali[i] if i < len(ordinali) else "Inoltre"
        # doppio punto = pausa più marcata tra una notizia e l'altra
        corpo.append(f"{lead}. {n['titolo']}. {n.get('sommario','')}")
    outro = ("Trovi tutti gli approfondimenti sul nostro sito, "
             "nella sezione Aggiornamenti fiscali. A presto, da A.T. Consulting Parma.")
    script = "  ".join([intro] + corpo + [outro])
    return data_iso, script, oggi


def synth(script: str, neural_voice: str, neural_rate: str, say_voice: str, say_rate: int) -> str:
    """Sintetizza la voce. Preferisce edge-tts (neurale, gratis, molto naturale);
    se non disponibile/offline ripiega sulla voce macOS `say`. Output: AUDIO_M4A."""
    # 1) edge-tts (Microsoft neural, gratis, senza API key)
    try:
        import asyncio
        import edge_tts
        mp3 = os.path.join(AUDIO_DIR, "_tmp.mp3")

        async def _gen():
            await edge_tts.Communicate(script, neural_voice, rate=neural_rate).save(mp3)

        asyncio.run(_gen())
        subprocess.run(
            ["ffmpeg", "-y", "-i", mp3, "-c:a", "aac", "-b:a", "160k", AUDIO_M4A],
            check=True, capture_output=True,
        )
        os.remove(mp3)
        return f"edge-tts / {neural_voice}"
    except Exception as e:
        print(f"   (edge-tts non disponibile: {e} — uso la voce del Mac)")

    # 2) ripiego: voce macOS `say`
    txt = os.path.join(AUDIO_DIR, "_script.txt")
    with open(txt, "w") as f:
        f.write(script)
    aiff = os.path.join(AUDIO_DIR, "_tmp.aiff")
    subprocess.run(["say", "-v", say_voice, "-r", str(say_rate), "-f", txt, "-o", aiff], check=True)
    subprocess.run(["afconvert", aiff, AUDIO_M4A, "-d", "aac", "-f", "m4af"], check=True)
    os.remove(aiff); os.remove(txt)
    return f"macOS say / {say_voice}"


def main() -> int:
    ap = argparse.ArgumentParser(description="Genera il notiziario audio del giorno")
    ap.add_argument("--neural-voice", default="it-IT-IsabellaNeural", help="voce edge-tts")
    ap.add_argument("--neural-rate", default="-15%", help="velocità voce neurale (es. -15%): più lenta e naturale, preferenza utente")
    ap.add_argument("--voice", default="Alice", help="voce macOS di ripiego")
    ap.add_argument("--rate", type=int, default=155, help="velocità voce macOS (wpm)")
    args = ap.parse_args()

    with open(NEWS_JSON) as f:
        news = json.load(f)
    news.sort(key=lambda x: x.get("data", ""), reverse=True)
    data_iso, script, oggi = build_script(news)
    if not script:
        print("Nessuna news in lib/news.json."); return 1

    os.makedirs(AUDIO_DIR, exist_ok=True)
    engine = synth(script, args.neural_voice, args.neural_rate, args.voice, args.rate)
    print(f"   voce: {engine}")

    # durata (secondi) via afinfo
    dur = 0
    try:
        out = subprocess.run(["afinfo", AUDIO_M4A], capture_output=True, text=True).stdout
        m = re.search(r"estimated duration:\s*([\d.]+)", out)
        if m:
            dur = round(float(m.group(1)))
    except Exception:
        pass

    meta = {
        "data": data_iso,
        "data_label": data_parlata(data_iso),
        "file": "/notiziario/latest.m4a",
        "durata_sec": dur,
        "n_news": len(oggi),
        "titoli": [n["titolo"] for n in oggi],
    }
    with open(META_JSON, "w") as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print(f"✅ Notiziario {data_iso} — {len(oggi)} news, ~{dur}s")
    print(f"   audio: {os.path.relpath(AUDIO_M4A, REPO)}")
    print(f"   meta:  {os.path.relpath(META_JSON, REPO)}")
    print("   Ora: commit + push (audio + lib/notiziario.json) -> live sul sito.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
