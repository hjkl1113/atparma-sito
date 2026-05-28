"""
Genera asset profilo + copertina per pagine Facebook / Instagram / Google Business.

Output:
  public/ads/profile-cover/
    profile-1080.jpg          → foto profilo FB + IG + Google (visualizzata in cerchio)
    profile-1080-light.jpg    → variante chiara su sfondo crema (richiama palazzo)
    cover-facebook-1640.jpg   → copertina Facebook 1640×624 (safe zone centrale 640×312)
    cover-google-1920.jpg     → copertina Google Business 1920×1080 (16:9)
"""
from __future__ import annotations
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "public/images/studio"
OUT = ROOT / "public/ads/profile-cover"
OUT.mkdir(parents=True, exist_ok=True)

BASKERVILLE = "/System/Library/Fonts/Supplemental/Baskerville.ttc"
BASKERVILLE_BOLD_IDX = 2
BASKERVILLE_ITALIC_IDX = 1
HELVETICA = "/System/Library/Fonts/Helvetica.ttc"

INK = (24, 22, 18)
CREMA = (243, 235, 220)
GOLD = (197, 168, 110)
WHITE = (255, 255, 255)

def font(path: str, size: int, index: int = 0) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size, index=index)

# -----------------------------------------------------------------------------
# PROFILE — 1080×1080 (visualizzata in cerchio: il soggetto deve stare al centro
# dentro un raggio del 45% per non essere tagliato dai bordi).
# -----------------------------------------------------------------------------

def profile_dark(out_name: str):
    """Logo profilo scuro stile icon.svg: monogramma AT bianco su INK."""
    W = H = 1080
    img = Image.new("RGB", (W, H), INK)
    draw = ImageDraw.Draw(img)

    # Monogramma "AT" gigante centrato
    mono = "AT"
    mf = font(BASKERVILLE, 540, index=BASKERVILLE_BOLD_IDX)
    bb = draw.textbbox((0, 0), mono, font=mf)
    tw = bb[2] - bb[0]
    # Calibrazione: leggermente sopra il centro per lasciare spazio a wordmark sotto
    draw.text(((W - tw) / 2 - bb[0], 230), mono, font=mf, fill=WHITE)

    # Linea hairline oro
    draw.line([(360, 770), (720, 770)], fill=GOLD, width=2)

    # Wordmark sotto
    wm = "A.T. CONSULTING"
    wf = font(HELVETICA, 38)
    bb = draw.textbbox((0, 0), wm, font=wf)
    tw = bb[2] - bb[0]
    draw.text(((W - tw) / 2 - bb[0], 800), wm, font=wf, fill=WHITE)

    # Sub
    sub = "P A R M A"
    sf = font(HELVETICA, 26)
    bb = draw.textbbox((0, 0), sub, font=sf)
    tw = bb[2] - bb[0]
    draw.text(((W - tw) / 2 - bb[0], 870), sub, font=sf, fill=GOLD)

    out = OUT / out_name
    img.save(out, "JPEG", quality=94, optimize=True)
    print(f"  ✓ {out.name}  ({W}×{H})")


def profile_light(out_name: str):
    """Variante chiara su crema (richiama il colore del palazzo)."""
    W = H = 1080
    img = Image.new("RGB", (W, H), CREMA)
    draw = ImageDraw.Draw(img)

    mono = "AT"
    mf = font(BASKERVILLE, 540, index=BASKERVILLE_BOLD_IDX)
    bb = draw.textbbox((0, 0), mono, font=mf)
    tw = bb[2] - bb[0]
    draw.text(((W - tw) / 2 - bb[0], 230), mono, font=mf, fill=INK)

    draw.line([(360, 770), (720, 770)], fill=GOLD, width=2)

    wm = "A.T. CONSULTING"
    wf = font(HELVETICA, 38)
    bb = draw.textbbox((0, 0), wm, font=wf)
    tw = bb[2] - bb[0]
    draw.text(((W - tw) / 2 - bb[0], 800), wm, font=wf, fill=INK)

    sub = "P A R M A"
    sf = font(HELVETICA, 26)
    bb = draw.textbbox((0, 0), sub, font=sf)
    tw = bb[2] - bb[0]
    draw.text(((W - tw) / 2 - bb[0], 870), sub, font=sf, fill=(140, 105, 55))

    out = OUT / out_name
    img.save(out, "JPEG", quality=94, optimize=True)
    print(f"  ✓ {out.name}  ({W}×{H})")


# -----------------------------------------------------------------------------
# COVER FACEBOOK — 1640×624 (safe zone centrale 640×312: testo dentro 500-1140px x)
# Crop landscape della facciata + wordmark a sinistra
# -----------------------------------------------------------------------------

def cover_landscape(out_name: str, target_size: tuple[int, int]):
    W, H = target_size
    target_ratio = W / H

    # Per landscape molto largo usiamo sede-facciata-rose ma cropped landscape:
    # la foto è portrait 4284×5712. Per W/H target prendiamo full width e una
    # fascia centrale verticale.
    img = Image.open(SRC / "sede-facciata-rose.jpg").convert("RGB")
    w, h = img.size  # 4284 x 5712
    src_ratio = w / h
    if src_ratio < target_ratio:
        # serve allargare → crop verticale (taglia in alto/basso)
        new_h = int(w / target_ratio)
        top = (h - new_h) // 2
        img = img.crop((0, top, w, top + new_h))
    else:
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        img = img.crop((left, 0, left + new_w, h))
    img = img.resize((W, H), Image.LANCZOS)

    # Gradient scuro a sinistra per leggibilità wordmark
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    grad_w = int(W * 0.55)
    for x in range(grad_w):
        t = 1 - (x / grad_w)
        alpha = int(230 * (t ** 1.4))
        ImageDraw.Draw(overlay).line([(x, 0), (x, H)], fill=(0, 0, 0, alpha))
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")

    draw = ImageDraw.Draw(img, "RGBA")

    # Scala in base all'altezza target
    scale = H / 624

    # Posizionamento: testo nella safe zone (FB safe zone ≈ x 500–1140 di 1640).
    # Per essere sicuri anche su altre piattaforme, ancoriamo a sinistra ma
    # dentro la safe zone (offset ≈ 80px scaled).
    left_x = int(80 * scale)

    # Brand small caps
    wm_f = font(HELVETICA, int(24 * scale))
    draw.text((left_x, int(80 * scale)), "A.T. CONSULTING · PARMA", font=wm_f, fill=WHITE)
    draw.line([(left_x, int(120 * scale)), (left_x + int(310 * scale), int(120 * scale))],
              fill=(255, 255, 255, 180), width=1)

    # Headline grande
    h_f = font(BASKERVILLE, int(96 * scale), index=BASKERVILLE_BOLD_IDX)
    h_it = font(BASKERVILLE, int(96 * scale), index=BASKERVILLE_ITALIC_IDX)
    draw.text((left_x - 2, int(180 * scale)), "Commercialisti", font=h_f, fill=WHITE)
    draw.text((left_x - 2, int(290 * scale)), "a Parma.", font=h_it, fill=WHITE)

    # Sub tagline
    sub_f = font(HELVETICA, int(28 * scale))
    draw.text((left_x, int(420 * scale)), "Dal 2005 — Borgo Riccio da Parma 5", font=sub_f, fill=(245, 240, 232))

    # Sito small
    site_f = font(HELVETICA, int(22 * scale))
    draw.text((left_x, int(470 * scale)), "atparma.com", font=site_f, fill=GOLD)

    out = OUT / out_name
    img.save(out, "JPEG", quality=92, optimize=True)
    print(f"  ✓ {out.name}  ({W}×{H})")


# -----------------------------------------------------------------------------
print("— Profile —")
profile_dark("profile-1080-dark.jpg")
profile_light("profile-1080-light.jpg")

print("\n— Cover —")
cover_landscape("cover-facebook-1640x624.jpg", (1640, 624))
cover_landscape("cover-google-1920x1080.jpg", (1920, 1080))

print(f"\nAsset profilo + copertina generati in {OUT}")
