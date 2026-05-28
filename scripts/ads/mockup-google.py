"""
Genera mockup ads Google Ads (Performance Max + Display) nei 3 formati richiesti:
  - 1.91:1  1200x628   (Display landscape, headline ads)
  - 1:1     1200x1200  (Square, mobile feeds)
  - 4:5     1200x1500  (Portrait, mobile prominente)

Riusa le foto e i claim di mockup-facebook.py mantenendo coerenza brand.
Output: public/ads/google/<id>-<aspect>.jpg
"""
from __future__ import annotations
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "public/images/studio"
OUT = ROOT / "public/ads/google"
OUT.mkdir(parents=True, exist_ok=True)

BASKERVILLE = "/System/Library/Fonts/Supplemental/Baskerville.ttc"
BASKERVILLE_ITALIC_IDX = 1
BASKERVILLE_BOLD_IDX = 2
HELVETICA = "/System/Library/Fonts/Helvetica.ttc"

GOLD = (197, 168, 110)
WHITE = (255, 255, 255)
INK = (24, 22, 18)

# Aspect ratio specs per Google Ads
FORMATS = {
    "1.91x1": {"size": (1200, 628),  "headline_scale": 0.75, "safe_top": 38, "safe_bottom": 56, "left": 50, "layout": "landscape"},
    "1x1":    {"size": (1200, 1200), "headline_scale": 1.10, "safe_top": 56, "safe_bottom": 88, "left": 60, "layout": "portrait"},
    "4x5":    {"size": (1200, 1500), "headline_scale": 1.22, "safe_top": 66, "safe_bottom": 100, "left": 66, "layout": "portrait"},
}

def font(path: str, size: int, index: int = 0) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size, index=index)

def aspect_crop(im: Image.Image, target_size: tuple[int, int], v_anchor: float = 0.5) -> Image.Image:
    tw, th = target_size
    target_ratio = tw / th
    w, h = im.size
    src_ratio = w / h
    if src_ratio > target_ratio:
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        im = im.crop((left, 0, left + new_w, h))
    else:
        new_h = int(w / target_ratio)
        top = int((h - new_h) * v_anchor)
        im = im.crop((0, top, w, top + new_h))
    return im.resize(target_size, Image.LANCZOS)

def darken_bottom(im: Image.Image, height_ratio: float = 0.55, strength: int = 200) -> Image.Image:
    overlay = Image.new("RGBA", im.size, (0, 0, 0, 0))
    h = im.size[1]
    start = int(h * (1 - height_ratio))
    for y in range(start, h):
        t = (y - start) / max(1, (h - start))
        alpha = int(strength * (t ** 1.6))
        ImageDraw.Draw(overlay).line([(0, y), (im.size[0], y)], fill=(0, 0, 0, alpha))
    return Image.alpha_composite(im.convert("RGBA"), overlay).convert("RGB")

def darken_top(im: Image.Image, height_px: int = 200, strength: int = 130) -> Image.Image:
    overlay = Image.new("RGBA", im.size, (0, 0, 0, 0))
    for y in range(height_px):
        t = 1 - (y / height_px)
        alpha = int(strength * (t ** 1.4))
        ImageDraw.Draw(overlay).line([(0, y), (im.size[0], y)], fill=(0, 0, 0, alpha))
    return Image.alpha_composite(im.convert("RGBA"), overlay).convert("RGB")

def darken_left(im: Image.Image, width_px: int, strength: int = 220) -> Image.Image:
    """Gradient scuro laterale sinistro per layout landscape."""
    overlay = Image.new("RGBA", im.size, (0, 0, 0, 0))
    for x in range(width_px):
        t = 1 - (x / width_px)
        alpha = int(strength * (t ** 1.4))
        ImageDraw.Draw(overlay).line([(x, 0), (x, im.size[1])], fill=(0, 0, 0, alpha))
    return Image.alpha_composite(im.convert("RGBA"), overlay).convert("RGB")

def render(src_name: str, out_id: str, aspect: str, headline_lines, sub: str, cta: str, price: str | None = None, v_anchor: float = 0.5):
    spec = FORMATS[aspect]
    W, H = spec["size"]
    scale = spec["headline_scale"]
    LEFT = spec["left"]
    SAFE_TOP = spec["safe_top"]
    SAFE_BOTTOM = spec["safe_bottom"]
    layout = spec["layout"]

    img = Image.open(SRC / src_name).convert("RGB")
    img = aspect_crop(img, (W, H), v_anchor=v_anchor)

    if layout == "landscape":
        # Per 1.91:1 → testo a sinistra su gradient laterale + leggero bottom
        img = darken_left(img, width_px=int(W * 0.55), strength=230)
        img = darken_bottom(img, height_ratio=0.35, strength=120)
    else:
        height_ratio = {"1x1": 0.62, "4x5": 0.55}.get(aspect, 0.55)
        img = darken_bottom(img, height_ratio=height_ratio, strength=215)
        img = darken_top(img, height_px=int(160 * scale), strength=140)

    draw = ImageDraw.Draw(img, "RGBA")

    # Brand wordmark
    wm_size = int(22 * scale)
    wm_f = font(HELVETICA, wm_size)
    draw.text((LEFT, SAFE_TOP), "A.T. CONSULTING · PARMA", font=wm_f, fill=WHITE)
    wm_w = int(286 * scale)
    draw.line([(LEFT, SAFE_TOP + int(38 * scale)), (LEFT + wm_w, SAFE_TOP + int(38 * scale))],
              fill=(255, 255, 255, 180), width=1)

    # Layout-specific text positioning
    if layout == "landscape":
        # Landscape: testo verticalmente centrato, mass a sinistra
        h_size = int(72 * scale)
        p_size = int(80 * scale)
        sub_size = int(22 * scale)
        cta_size = int(20 * scale)
        line_h = int(78 * scale)
    else:
        h_size = int(96 * scale)
        p_size = int(110 * scale)
        sub_size = int(30 * scale)
        cta_size = int(26 * scale)
        line_h = int(100 * scale)

    h_font = font(BASKERVILLE, h_size, index=BASKERVILLE_BOLD_IDX)
    italic_font = font(BASKERVILLE, h_size, index=BASKERVILLE_ITALIC_IDX)

    # CTA chip
    chip_pad_x, chip_pad_y = int(24 * scale), int(12 * scale)
    cta_f = font(HELVETICA, cta_size)
    bbox = draw.textbbox((0, 0), cta, font=cta_f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    cw = tw + chip_pad_x * 2
    ch = th + chip_pad_y * 2

    if layout == "landscape":
        # Per landscape: testo dal centro verticale verso il basso
        cta_y = H - SAFE_BOTTOM - ch
        sub_h = int(40 * scale)
        price_h = int(80 * scale) if price else 0
        total_h_lines = len(headline_lines) * line_h
        text_block_h = total_h_lines + price_h + sub_h
        # centro verticale del testo rispetto allo spazio disponibile (sotto wordmark, sopra cta)
        avail_top = SAFE_TOP + int(60 * scale)
        avail_bottom = cta_y - int(20 * scale)
        avail = avail_bottom - avail_top
        headline_start = avail_top + max(0, (avail - text_block_h) // 2)
    else:
        cta_y = H - SAFE_BOTTOM - ch
        block_bottom = cta_y - int(20 * scale)
        sub_h = int(60 * scale)
        price_h = int(100 * scale) if price else 0
        total_h_lines = len(headline_lines) * line_h
        headline_start = block_bottom - sub_h - total_h_lines - price_h

    y = headline_start
    for text, is_italic in headline_lines:
        f = italic_font if is_italic else h_font
        draw.text((LEFT - 2, y), text, font=f, fill=WHITE)
        y += line_h

    if price:
        pf = font(BASKERVILLE, p_size, index=BASKERVILLE_BOLD_IDX)
        draw.text((LEFT - 2, y + int(4 * scale)), price, font=pf, fill=GOLD)
        y += int(80 * scale) if layout == "landscape" else int(100 * scale)

    sub_f = font(HELVETICA, sub_size)
    draw.text((LEFT, y + int(8 * scale)), sub, font=sub_f, fill=(245, 240, 232))

    # CTA chip render
    chip = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))
    cd = ImageDraw.Draw(chip)
    cd.rounded_rectangle([(0, 0), (cw, ch)], radius=ch // 2, fill=WHITE)
    cd.text((chip_pad_x, chip_pad_y - int(4 * scale)), cta, font=cta_f, fill=INK)
    img.paste(chip, (LEFT, cta_y), chip)

    out = OUT / f"{out_id}-{aspect}.jpg"
    img.save(out, "JPEG", quality=92, optimize=True)
    print(f"  ✓ {out.name}  ({W}×{H})")

# -----------------------------------------------------------------------------
VARIANTS = [
    {
        "src":  "sede-facciata-rose.jpg",
        "id":   "01-brand",
        "headline": [("Commercialisti", False), ("a Parma.", True)],
        "sub":  "Dal 2005, al fianco di professionisti e imprese.",
        "cta":  "atparma.com  »",
        "price": None,
        "v_anchor": 0.5,
    },
    {
        "src":  "sede-cortile-vaso.jpg",
        "id":   "02-730",
        "headline": [("Dichiarazione 730", False)],
        "sub":  "Online o in studio. Prenoti in 5 minuti.",
        "cta":  "Prenota  »  atparma.com",
        "price": "€50",
        "v_anchor": 0.5,
    },
    {
        "src":  "sede-archi-cortile.jpg",
        "src_overrides": {"1.91x1": "sede-rose-rampicanti.jpg"},
        "v_anchor_overrides": {"1.91x1": 0.5},
        "id":   "03-piva-forf",
        "headline": [("Apri la tua", False), ("Partita IVA.", True)],
        "sub":  "Forfettario + contabilità annuale. Tutto incluso.",
        "cta":  "Pacchetto da €549  »",
        "price": None,
        "v_anchor": 0.12,
    },
    {
        "src":  "sede-rose-rampicanti.jpg",
        "id":   "04-consulenza",
        "headline": [("Prima consulenza", False), ("gratuita.", True)],
        "sub":  "Professionisti · Artigiani · Commercianti",
        "cta":  "Prenota call  »  atparma.com",
        "price": None,
        "v_anchor": 0.5,
    },
]

for aspect in FORMATS.keys():
    print(f"\n— Format {aspect} —")
    for v in VARIANTS:
        src = v.get("src_overrides", {}).get(aspect, v["src"])
        v_anchor = v.get("v_anchor_overrides", {}).get(aspect, v["v_anchor"])
        render(
            src_name=src,
            out_id=v["id"],
            aspect=aspect,
            headline_lines=v["headline"],
            sub=v["sub"],
            cta=v["cta"],
            price=v["price"],
            v_anchor=v_anchor,
        )

print(f"\n{len(VARIANTS) * len(FORMATS)} mockup Google generati in {OUT}")
