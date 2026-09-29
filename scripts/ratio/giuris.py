#!/usr/bin/env python3
"""Collettore giurisprudenziale — crisi d'impresa, fideiussioni, riscossione.

Stesso flusso delle news quotidiane, ma la fonte non è la newsletter Ratio:
sono i feed pubblici elencati in `fonti-giuris.json`.

1. Legge i feed configurati e tiene solo le voci pertinenti ai tre filoni.
2. Scarta quello che è già stato visto o già pubblicato sul sito.
3. Fa scegliere a Claude i pezzi editorialmente più forti.
4. Scarica la pagina di ciascuno e ne estrae il testo: senza testo reale non si
   riscrive (stessa regola anti-allucinazione del flusso quotidiano).
5. Riscrive in versione originale e manda la mail di approvazione: tu rispondi
   con i numeri, esattamente come per le news del mattino.

NON pubblica nulla da solo: la pubblicazione resta in publish.py, dopo la tua risposta.

Uso:
    python3 giuris.py --dry          # prepara le bozze, non invia la mail
    python3 giuris.py                # prepara e invia la mail di approvazione
    python3 giuris.py --n 2          # quanti pezzi al massimo (default: da config)
    python3 giuris.py --solo crisi   # un filone: crisi | fideiussioni | riscossione
"""
from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import html
import json
import os
import re
import subprocess
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime

import lib_ratio as R
import rewrite

HERE = os.path.dirname(os.path.abspath(__file__))
CONFIG = os.path.join(HERE, "fonti-giuris.json")
BOZZE_DIR = os.path.join(HERE, "output", "bozze")
VISTI = os.path.join(HERE, "output", "giuris-visti.json")
LOG = os.path.join(HERE, "output", "giuris.log")
NEWS_JSON = os.path.abspath(os.path.join(HERE, "..", "..", "lib", "news.json"))
API_URL = "https://api.anthropic.com/v1/messages"
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36")


def log(msg: str) -> None:
    print(msg)
    try:
        os.makedirs(os.path.dirname(LOG), exist_ok=True)
        with open(LOG, "a") as f:
            f.write(f"{dt.datetime.now():%Y-%m-%d %H:%M} {msg}\n")
    except OSError:
        pass


# ----------------------------------------------------------------- feed e parsing

def fetch(url: str, timeout: int = 25) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        raw = resp.read()
    for enc in ("utf-8", "latin-1"):
        try:
            return raw.decode(enc)
        except UnicodeDecodeError:
            continue
    return raw.decode("utf-8", "replace")


def _txt(el, *nomi: str) -> str:
    for n in nomi:
        t = el.find(n)
        if t is not None and (t.text or "").strip():
            return html.unescape(t.text.strip())
    return ""


def parse_feed(xml_text: str) -> list[dict]:
    """Legge RSS 2.0 e Atom senza dipendenze esterne."""
    try:
        root = ET.fromstring(xml_text)
    except ET.ParseError:
        return []
    ATOM = "{http://www.w3.org/2005/Atom}"
    voci = []
    for item in root.iter():
        if item.tag.split("}")[-1] not in ("item", "entry"):
            continue
        titolo = _txt(item, "title", ATOM + "title")
        link = _txt(item, "link", "guid")
        if not link:
            a = item.find(ATOM + "link")
            if a is not None:
                link = a.get("href", "")
        testo = _txt(item, "description", "summary", ATOM + "summary", ATOM + "content")
        data = _txt(item, "pubDate", "published", ATOM + "published", ATOM + "updated")
        if titolo and link:
            voci.append({
                "titolo": html.unescape(titolo),
                "link": link.strip(),
                "estratto": re.sub(r"<[^>]+>", " ", testo).strip(),
                "data_raw": data,
            })
    return voci


def eta_giorni(data_raw: str) -> float | None:
    if not data_raw:
        return None
    try:
        d = parsedate_to_datetime(data_raw)
    except (TypeError, ValueError):
        try:
            d = dt.datetime.fromisoformat(data_raw.replace("Z", "+00:00"))
        except ValueError:
            return None
    if d.tzinfo is None:
        d = d.replace(tzinfo=dt.timezone.utc)
    return (dt.datetime.now(dt.timezone.utc) - d).total_seconds() / 86400


def testo_pagina(url: str) -> str:
    """Scarica la pagina e ne estrae il testo, per avere una fonte reale da riscrivere."""
    try:
        h = fetch(url, timeout=30)
    except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, OSError) as e:
        log(f"      pagina non scaricabile ({e})")
        return ""
    h = re.sub(r"(?is)<(script|style|nav|footer|header|aside)[^>]*>.*?</\1>", " ", h)
    h = re.sub(r"(?is)<br\s*/?>|</p>|</div>|</li>", "\n", h)
    testo = re.sub(r"<[^>]+>", " ", h)
    testo = html.unescape(testo)
    testo = re.sub(r"[ \t\xa0]+", " ", testo)
    testo = re.sub(r"\n\s*\n+", "\n\n", testo)
    return testo.strip()


# --------------------------------------------------------------------- filtri

def norm(s: str) -> str:
    s = s.lower()
    for a, b in (("à", "a"), ("è", "e"), ("é", "e"), ("ì", "i"), ("ò", "o"), ("ù", "u"), ("’", "'")):
        s = s.replace(a, b)
    return s


def pertinenza(voce: dict, chiavi: dict, filoni_fonte: list[str]) -> tuple[int, str | None]:
    """Quante parole chiave colpiscono e a quale filone appartiene la voce."""
    testo = norm(voce["titolo"] + " " + voce.get("estratto", ""))
    migliore, punti_migliori = None, 0
    for filone in filoni_fonte:
        colpi = sum(1 for k in chiavi.get(filone, []) if norm(k) in testo)
        if colpi > punti_migliori:
            migliore, punti_migliori = filone, colpi
    return punti_migliori, migliore


def gia_pubblicata(titolo: str, news: list) -> bool:
    t = norm(titolo)
    parole = {p for p in re.findall(r"[a-z]{5,}", t)}
    for n in news:
        altre = {p for p in re.findall(r"[a-z]{5,}", norm(n.get("titolo", "")))}
        if parole and altre and len(parole & altre) / len(parole) > 0.6:
            return True
    return False


def carica_visti() -> set:
    if not os.path.exists(VISTI):
        return set()
    try:
        with open(VISTI) as f:
            return set(json.load(f))
    except (OSError, json.JSONDecodeError):
        return set()


def salva_visti(visti: set) -> None:
    os.makedirs(os.path.dirname(VISTI), exist_ok=True)
    with open(VISTI, "w") as f:
        json.dump(sorted(visti), f, indent=1)


def impronta(voce: dict) -> str:
    return hashlib.sha256(voce["link"].encode()).hexdigest()[:16]


# ------------------------------------------------------------------- selezione

FILONE_LABEL = {
    "crisi": "crisi d'impresa e sovraindebitamento",
    "fideiussioni": "fideiussioni e garanzie bancarie",
    "riscossione": "riscossione, cartelle e contenzioso tributario",
}


def scegli(env: dict, candidati: list[dict], n: int) -> tuple[list[int], list[int]]:
    """Chiede a Claude quali pezzi valgono.

    Ritorna due liste di indici 1-based: quelli da trattare come news breve e
    quelli che, per portata, meritano invece un approfondimento lungo.
    """
    api_key = env.get("ANTHROPIC_API_KEY")
    model = env.get("RATIO_REWRITE_MODEL") or "claude-sonnet-5"
    elenco = "\n".join(
        f"{i+1}. [{FILONE_LABEL.get(c['filone'], c['filone'])}] {c['titolo']}"
        for i, c in enumerate(candidati)
    )
    user = (
        "Sei l'editor del sito di uno studio commercialista. Il pubblico sono privati "
        "indebitati, piccole imprese in difficoltà, soci che hanno firmato garanzie "
        "bancarie e contribuenti alle prese con cartelle e riscossione.\n"
        "Dalle segnalazioni qui sotto scegli quelle che meritano un pezzo sul sito: "
        "conta la ricaduta pratica per queste persone, non l'interesse accademico. "
        "Premia le pronunce che cambiano qualcosa per chi ha debiti, garanzie o cartelle; "
        "scarta convegni, corsi, comunicati promozionali e materiale di vigilanza "
        "bancaria o europea che non tocca il pubblico.\n"
        f"Scegli AL MASSIMO {n} segnalazioni, anche MENO se poche meritano: meglio una "
        "forte che tre deboli. Non forzare il numero.\n\n"
        "Indica poi, fra quelle scelte, quali hanno una portata tale da meritare un "
        "APPROFONDIMENTO LUNGO invece di una news breve. Meritano l'approfondimento le "
        "pronunce delle Sezioni Unite o della Cassazione che cambiano un orientamento, le "
        "novità normative che modificano i presupposti di una procedura e i chiarimenti "
        "ufficiali di portata generale. Non lo meritano le singole decisioni di merito che "
        "confermano un indirizzo già noto.\n\n"
        f"Segnalazioni:\n{elenco}\n\n"
        'Rispondi SOLO con un JSON: {"scelte": [numeri], "approfondimento": [numeri]}, '
        'dove "approfondimento" è un sottoinsieme di "scelte" e può essere vuoto.'
    )
    payload = {
        "model": model,
        "max_tokens": 1500,
        "messages": [{"role": "user", "content": user}],
    }
    req = urllib.request.Request(
        API_URL, data=json.dumps(payload).encode(), method="POST",
        headers={"content-type": "application/json", "x-api-key": api_key,
                 "anthropic-version": "2023-06-01"},
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            body = json.loads(resp.read().decode())
    except (urllib.error.HTTPError, urllib.error.URLError) as e:
        log(f"[giuris] selezione AI fallita ({e}): prendo i primi {n} per punteggio")
        return list(range(1, min(n, len(candidati)) + 1)), []
    text = "".join(b.get("text", "") for b in body.get("content", []) if b.get("type") == "text")
    m = re.search(r"\{.*\}", text, re.S)
    if not m:
        return list(range(1, min(n, len(candidati)) + 1)), []
    try:
        dati = json.loads(m.group(0))
    except json.JSONDecodeError:
        return list(range(1, min(n, len(candidati)) + 1)), []

    def numeri(chiave: str) -> list[int]:
        return [int(x) for x in dati.get(chiave, [])
                if isinstance(x, (int, float)) and 1 <= int(x) <= len(candidati)]

    scelte = numeri("scelte")
    return scelte, [x for x in numeri("approfondimento") if x in scelte]


# ------------------------------------------------------------------------ main

def main() -> int:
    ap = argparse.ArgumentParser(description="Collettore giurisprudenziale")
    ap.add_argument("--dry", action="store_true", help="prepara le bozze ma non invia la mail")
    ap.add_argument("--n", type=int, help="quanti pezzi al massimo (default: da config)")
    ap.add_argument("--solo", choices=["crisi", "fideiussioni", "riscossione"],
                    help="limita a un filone")
    ap.add_argument("--ignora-visti", action="store_true",
                    help="non escludere le voci già viste (utile per le prove)")
    args = ap.parse_args()

    with open(CONFIG) as f:
        cfg = json.load(f)
    env = R.load_env()
    if not env.get("ANTHROPIC_API_KEY"):
        log("ERRORE: ANTHROPIC_API_KEY mancante in .env")
        return 1

    n_max = args.n or cfg.get("max_pezzi_per_esecuzione", 3)
    giorni_max = cfg.get("giorni_massimi", 21)
    chiavi = cfg.get("parole_chiave", {})
    escludi = [norm(x) for x in cfg.get("escludi_se_contiene", [])]
    visti = set() if args.ignora_visti else carica_visti()

    try:
        with open(NEWS_JSON) as f:
            news_pubblicate = json.load(f)
    except (OSError, json.JSONDecodeError):
        news_pubblicate = []

    candidati: list[dict] = []
    for fonte in cfg["fonti"]:
        filoni = fonte["filoni"]
        if args.solo and args.solo not in filoni:
            continue
        try:
            voci = parse_feed(fetch(fonte["url"]))
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, OSError) as e:
            log(f"[giuris] {fonte['nome']}: feed non raggiungibile ({e})")
            continue
        tenute = 0
        for v in voci:
            if impronta(v) in visti:
                continue
            eta = eta_giorni(v.get("data_raw", ""))
            if eta is not None and eta > giorni_max:
                continue
            testo_norm = norm(v["titolo"] + " " + v.get("estratto", ""))
            if any(x in testo_norm for x in escludi):
                continue
            punti, filone = pertinenza(v, chiavi, filoni)
            if not punti or (args.solo and filone != args.solo):
                continue
            if gia_pubblicata(v["titolo"], news_pubblicate):
                continue
            v.update({"fonte": fonte["nome"], "filone": filone,
                      "punti": punti * 10 + fonte.get("peso", 1)})
            candidati.append(v)
            tenute += 1
        log(f"[giuris] {fonte['nome']}: {len(voci)} voci, {tenute} pertinenti")

    if not candidati:
        log("[giuris] nessuna segnalazione nuova e pertinente. Nulla da fare.")
        return 0

    candidati.sort(key=lambda c: -c["punti"])
    candidati = candidati[: cfg.get("candidati_da_valutare", 12)]
    log(f"[giuris] {len(candidati)} candidati al vaglio editoriale")

    scelte, da_approfondire = scegli(env, candidati, n_max)
    if not scelte:
        log("[giuris] l'editor non ha ritenuto nulla degno. Nessuna bozza.")
        salva_visti(visti | {impronta(c) for c in candidati})
        return 0
    log(f"[giuris] scelte: {scelte}"
        + (f" — da trattare come APPROFONDIMENTO: {da_approfondire}" if da_approfondire else ""))

    oggi = dt.date.today().isoformat()
    generate = 0
    for pos, idx in enumerate(scelte, 1):
        c = candidati[idx - 1]
        log(f"[giuris] #{pos} {c['titolo'][:70]}")
        testo = testo_pagina(c["link"])
        if len(testo) < 600:
            log("      testo insufficiente: salto (senza fonte reale non si riscrive)")
            continue
        try:
            out, usage = rewrite.call_claude(env, c["titolo"], "crisi-debiti", testo[:18000])
        except SystemExit as e:
            log(f"      errore riscrittura: {e}")
            continue
        out.setdefault("categoria", "crisi-debiti")
        merita = idx in da_approfondire
        if merita:
            out["titolo"] = "[DA APPROFONDIRE] " + out.get("titolo", "")
            log("      segnalata come da trattare con un approfondimento lungo")
        path = rewrite.write_bozza(oggi, 90 + pos, c["titolo"], out, usage)
        # traccia la provenienza e l'indicazione editoriale: restano nel file di
        # lavoro, non finiscono sul sito
        with open(path, "a") as f:
            f.write(f"\n<!-- fonte segnalazione: {c['fonte']} — {c['link']} -->\n")
            if merita:
                f.write("<!-- PORTATA: merita un approfondimento lungo in "
                        "/approfondimenti, non una news breve. Togliere il prefisso "
                        "[DA APPROFONDIRE] dal titolo prima di pubblicare come news. -->\n")
        generate += 1
        visti.add(impronta(c))

    salva_visti(visti | {impronta(c) for c in candidati})

    if not generate:
        log("[giuris] nessuna bozza generata.")
        return 1

    glob_oggi = os.path.join(BOZZE_DIR, f"{oggi}-9*.md")
    cmd = [sys.executable, os.path.join(HERE, "notify.py"), "--bozze", glob_oggi]
    if not args.dry:
        cmd.append("--send")
    log(f"[giuris] {'DRY' if args.dry else 'invio'} mail con {generate} bozze")
    res = subprocess.run(cmd, capture_output=True, text=True, cwd=HERE)
    log(res.stdout.strip())
    if res.returncode != 0:
        log("ERRORE notify: " + res.stderr.strip())
        return 1
    log("[giuris] fatto.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
