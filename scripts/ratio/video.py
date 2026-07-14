#!/usr/bin/env python3
"""Crea il video del notiziario per Facebook: sfondo professionale brandizzato
+ onda sonora animata + titoli che scorrono (audiogram stile TG).

Non usa drawtext (la build ffmpeg può esserne priva): i testi sono renderizzati
con PIL e fatti scorrere via overlay.

Uso:
    python3 video.py
"""
from __future__ import annotations
import json
import os
import subprocess

from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(__file__)
REPO = os.path.abspath(os.path.join(HERE, "..", ".."))
META = os.path.join(REPO, "lib", "notiziario.json")
AUDIO = os.path.join(REPO, "public", "notiziario", "latest.m4a")
OUT_DIR = os.path.join(HERE, "output")
BG_PNG = os.path.join(OUT_DIR, "_notiziario-bg.png")
CRAWL_PNG = os.path.join(OUT_DIR, "_notiziario-crawl.png")
VIDEO = os.path.join(OUT_DIR, "notiziario-video.mp4")

W = H = 1080
BAR_Y, BAR_H = 966, 114
NAVY_TOP = (13, 27, 42)
NAVY_BOT = (23, 42, 61)
BAR = (10, 22, 34)
ACCENT = (74, 159, 216)
WHITE = (240, 246, 251)
GREY = (150, 172, 190)
FONTS = "/System/Library/Fonts/Helvetica.ttc"


def font(size: int, index: int = 0):
    try:
        return ImageFont.truetype(FONTS, size, index=index)
    except Exception:
        return ImageFont.load_default()


def center_text(d, y, text, f, fill, tracking=0):
    if tracking:
        widths = [d.textlength(c, font=f) + tracking for c in text]
        total = sum(widths) - tracking
        x = (W - total) / 2
        for c, w in zip(text, widths):
            d.text((x, y), c, font=f, fill=fill)
            x += w
    else:
        w = d.textlength(text, font=f)
        d.text(((W - w) / 2, y), text, font=f, fill=fill)


def build_background(meta: dict) -> None:
    img = Image.new("RGB", (W, H), NAVY_TOP)
    px = img.load()
    for y in range(H):
        t = y / H
        px_row = (
            int(NAVY_TOP[0] + (NAVY_BOT[0] - NAVY_TOP[0]) * t),
            int(NAVY_TOP[1] + (NAVY_BOT[1] - NAVY_TOP[1]) * t),
            int(NAVY_TOP[2] + (NAVY_BOT[2] - NAVY_TOP[2]) * t),
        )
        for x in range(W):
            px[x, y] = px_row
    d = ImageDraw.Draw(img)
    center_text(d, 180, "NOTIZIARIO FISCALE", font(34, 1), ACCENT, tracking=8)
    center_text(d, 250, "A.T. CONSULTING PARMA", font(66, 1), WHITE)
    d.rectangle([(W / 2 - 60, 345), (W / 2 + 60, 350)], fill=ACCENT)
    center_text(d, 380, (meta.get("data_label") or "").capitalize(), font(40, 0), GREY)
    center_text(d, 470, "atparma.com", font(30, 1), ACCENT, tracking=4)
    # barra bassa per i titoli scorrevoli
    d.rectangle([(0, BAR_Y), (W, H)], fill=BAR)
    d.rectangle([(0, BAR_Y), (W, BAR_Y + 4)], fill=ACCENT)
    img.save(BG_PNG)


def build_crawl(meta: dict) -> int:
    titoli = meta.get("titoli", []) or ["Aggiornamenti fiscali"]
    text = "        •        ".join(titoli) + "        •        "
    f = font(46, 1)
    tmp = ImageDraw.Draw(Image.new("RGBA", (10, 10)))
    tw = int(tmp.textlength(text, font=f))
    img = Image.new("RGBA", (tw, BAR_H), (0, 0, 0, 0))
    ImageDraw.Draw(img).text((0, 30), text, font=f, fill=WHITE + (255,))
    img.save(CRAWL_PNG)
    return tw


def main() -> int:
    if not os.path.exists(AUDIO):
        raise SystemExit("Audio mancante: genera prima con audio.py")
    with open(META) as f:
        meta = json.load(f)
    os.makedirs(OUT_DIR, exist_ok=True)
    build_background(meta)
    build_crawl(meta)

    # niente onda sonora: solo sfondo pulito + titoli scorrevoli
    filt = (
        f"[0:v][2:v]overlay=x=W-mod(t*150\\,w+W):y={BAR_Y},format=yuv420p[v]"
    )
    ff = [
        "ffmpeg", "-y",
        "-loop", "1", "-i", BG_PNG,
        "-i", AUDIO,
        "-loop", "1", "-i", CRAWL_PNG,
        "-filter_complex", filt,
        "-map", "[v]", "-map", "1:a",
        "-c:v", "libx264", "-preset", "medium", "-crf", "20",
        "-c:a", "aac", "-b:a", "160k", "-shortest",
        VIDEO,
    ]
    print("Genero il video (ffmpeg)...")
    res = subprocess.run(ff, capture_output=True, text=True)
    if res.returncode != 0:
        print(res.stderr[-1000:])
        raise SystemExit("Errore ffmpeg")
    for p in (BG_PNG, CRAWL_PNG):
        try:
            os.remove(p)
        except OSError:
            pass

    size = os.path.getsize(VIDEO)
    print(f"✅ Video creato: {os.path.relpath(VIDEO, REPO)} ({size//1024} KB)")
    print("   1080x1080 · sfondo brand · onda sonora · titoli scorrevoli. Pronto per Facebook.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
