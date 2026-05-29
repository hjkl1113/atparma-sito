"""
Genera il visual neutro topical per il tema sovraindebitamento.

Concept (deciso con utente): "Grafici e pianificazione" — notebook aperto
con grafico lineare in discesa (debiti che scendono nel tempo), stile
minimal editoriale sobrio, palette beige/nero, NO palazzi storici.

Output:
  public/ads/topical/sovraindebitamento-source.png  (2048×2048 sorgente)
  public/ads/topical/sovraindebitamento-1x1.jpg     (1080×1080 FB feed)
  public/ads/topical/sovraindebitamento-4x5.jpg     (1080×1350 FB feed alto)
  public/ads/topical/sovraindebitamento-9x16.jpg    (1080×1920 Stories)
"""
from __future__ import annotations
import math
import random
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "public/ads/topical"
OUT.mkdir(parents=True, exist_ok=True)

BASKERVILLE = "/System/Library/Fonts/Supplemental/Baskerville.ttc"
BASKERVILLE_BOLD_IDX = 2
BASKERVILLE_ITALIC_IDX = 1
HELVETICA = "/System/Library/Fonts/Helvetica.ttc"

# Palette coerente coi mockup esistenti
DESK_BEIGE = (228, 218, 198)      # superficie scrivania, caldo
DESK_SHADOW = (210, 198, 174)     # ombra desk
PAPER = (252, 248, 240)           # carta notebook (off-white)
PAPER_SHADOW = (220, 212, 198)    # ombra del foglio
INK = (35, 30, 25)                # nero inchiostro
INK_LIGHT = (90, 82, 72)          # grigio per testi secondari
GRID = (220, 212, 198)            # griglia del notebook
GOLD = (197, 168, 110)            # accent (segna highlight finale)
PEN_BLACK = (28, 25, 22)

W = H = 2048

def font(path: str, size: int, index: int = 0) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size, index=index)

# -----------------------------------------------------------------------------
# Background — superficie scrivania con leggera texture/gradient
def make_desk(im: Image.Image):
    draw = ImageDraw.Draw(im)
    # gradient orizzontale soft (luce naturale dalla sx)
    for x in range(W):
        t = x / W
        r = int(DESK_BEIGE[0] - 14 * t)
        g = int(DESK_BEIGE[1] - 14 * t)
        b = int(DESK_BEIGE[2] - 14 * t)
        draw.line([(x, 0), (x, H)], fill=(r, g, b))

    # noise leggero per dare grana di carta/legno
    random.seed(42)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    for _ in range(2400):
        x = random.randint(0, W - 1)
        y = random.randint(0, H - 1)
        alpha = random.randint(3, 8)
        od.point((x, y), fill=(0, 0, 0, alpha))
    blurred = overlay.filter(ImageFilter.GaussianBlur(0.5))
    im.paste(blurred, (0, 0), blurred)

# -----------------------------------------------------------------------------
# Notebook (foglio) — rettangolo bianco con leggera ombra e rotazione lieve
def draw_notebook(im: Image.Image, x: int, y: int, w: int, h: int):
    # ombra
    shadow = Image.new("RGBA", (w + 80, h + 80), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle([(20, 30), (w + 40, h + 50)], radius=6,
                         fill=(0, 0, 0, 55))
    shadow = shadow.filter(ImageFilter.GaussianBlur(18))
    im.paste(shadow, (x - 20, y - 20), shadow)

    # foglio carta
    paper = Image.new("RGBA", (w, h), PAPER + (255,))
    pd = ImageDraw.Draw(paper)
    # bordo molto sottile
    pd.rectangle([(0, 0), (w - 1, h - 1)], outline=(220, 210, 195), width=2)

    # righe orizzontali sottili (notebook ruled)
    line_gap = 56
    line_color = (215, 205, 190)
    for ly in range(120, h - 60, line_gap):
        pd.line([(48, ly), (w - 48, ly)], fill=line_color, width=1)

    # margine verticale rosso pallido (come quaderno classico)
    pd.line([(120, 40), (120, h - 40)], fill=(220, 180, 175), width=2)

    # leggera rotazione (pochissimi gradi per realismo)
    paper = paper.rotate(-2.2, resample=Image.BICUBIC, expand=True)
    im.paste(paper, (x - 24, y - 18), paper)

# -----------------------------------------------------------------------------
# Chart — grafico lineare in discesa, stile hand-drawn
def draw_chart(im: Image.Image, x0: int, y0: int, w: int, h: int):
    """Disegna grafico in coordinate (x0,y0) topleft, area (w,h)."""
    overlay = Image.new("RGBA", (w + 200, h + 200), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    chart_x0 = 100
    chart_y0 = 60
    chart_w = w - 100
    chart_h = h - 160

    # Asse Y (verticale a sinistra)
    draw.line([(chart_x0, chart_y0), (chart_x0, chart_y0 + chart_h)],
              fill=INK_LIGHT, width=3)
    # Asse X (orizzontale in basso)
    draw.line([(chart_x0, chart_y0 + chart_h),
               (chart_x0 + chart_w, chart_y0 + chart_h)],
              fill=INK_LIGHT, width=3)

    # Etichette mesi sull'asse X
    months = ["GEN", "FEB", "MAR", "APR", "MAG", "GIU"]
    n = len(months)
    helv_small = font(HELVETICA, 36)
    for i, m in enumerate(months):
        cx = chart_x0 + (chart_w / (n - 1)) * i
        # tick
        draw.line([(cx, chart_y0 + chart_h),
                   (cx, chart_y0 + chart_h + 12)],
                  fill=INK_LIGHT, width=2)
        # label
        bbox = draw.textbbox((0, 0), m, font=helv_small)
        tw = bbox[2] - bbox[0]
        draw.text((cx - tw / 2, chart_y0 + chart_h + 28),
                  m, font=helv_small, fill=INK_LIGHT)

    # Etichette Y (importo, decrescente — senza simbolo € per evitare
    # glyph missing in Helvetica system collection)
    y_labels = ["30k", "20k", "10k", "0"]
    for i, lbl in enumerate(y_labels):
        cy = chart_y0 + (chart_h / (len(y_labels) - 1)) * i
        # tick
        draw.line([(chart_x0 - 12, cy), (chart_x0, cy)],
                  fill=INK_LIGHT, width=2)
        # gridline molto leggera
        if i > 0:
            for gx in range(chart_x0 + 4, chart_x0 + chart_w, 14):
                draw.point((gx, cy), fill=GRID)
        # label a sinistra
        bbox = draw.textbbox((0, 0), lbl, font=helv_small)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        draw.text((chart_x0 - 24 - tw, cy - th / 2),
                  lbl, font=helv_small, fill=INK_LIGHT)

    # Curva debito in discesa — punti con leggera variazione naturale
    # Da 30k iniziale a quasi 0 finale, smooth descrescente
    random.seed(7)
    points = []
    for i in range(n):
        x = chart_x0 + (chart_w / (n - 1)) * i
        # base curve: decay esponenziale soft
        t = i / (n - 1)
        y_norm = math.exp(-2.2 * t)  # da 1 a ~0.11
        # piccola variazione "umana"
        y_norm += random.uniform(-0.04, 0.04)
        y_norm = max(0.04, min(1.0, y_norm))
        y = chart_y0 + chart_h * (1 - y_norm) if False else chart_y0 + chart_h - chart_h * y_norm
        points.append((x, y))

    # Linea spessa hand-drawn (stroke principale)
    for i in range(len(points) - 1):
        draw.line([points[i], points[i + 1]], fill=INK, width=8)

    # Pallini ai punti
    for i, p in enumerate(points):
        r = 12 if i not in (0, n - 1) else 14
        draw.ellipse([(p[0] - r, p[1] - r), (p[0] + r, p[1] + r)],
                     fill=PAPER, outline=INK, width=4)

    # Ultimo punto con accent oro (highlight)
    last = points[-1]
    draw.ellipse([(last[0] - 16, last[1] - 16),
                  (last[0] + 16, last[1] + 16)],
                 fill=GOLD, outline=INK, width=3)

    # Nessuna annotazione testuale: il visual deve restare silenzioso,
    # il copy del post FB veicola il messaggio.

    # Compose overlay sulla scrivania (con piccola rotazione)
    overlay = overlay.rotate(-2.2, resample=Image.BICUBIC, expand=False)
    im.paste(overlay, (x0, y0), overlay)

# -----------------------------------------------------------------------------
# Pen — penna nera diagonale
def draw_pen(im: Image.Image, cx: int, cy: int):
    overlay = Image.new("RGBA", (600, 200), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    # corpo penna (rectangle allungato)
    od.rounded_rectangle([(0, 85), (520, 115)], radius=10,
                         fill=PEN_BLACK)
    # cap leggermente più scuro
    od.rounded_rectangle([(0, 80), (110, 120)], radius=12,
                         fill=(15, 13, 12))
    # punta argento
    od.polygon([(520, 90), (560, 100), (520, 110)],
               fill=(140, 138, 135))
    # leggera ombra
    shadow = overlay.copy()
    shadow = shadow.filter(ImageFilter.GaussianBlur(10))
    enhancer = Image.new("RGBA", shadow.size, (0, 0, 0, 0))
    # paste shadow first, slightly offset
    im.paste(shadow, (cx - 280, cy - 80), shadow)
    overlay = overlay.rotate(-22, resample=Image.BICUBIC, expand=True)
    im.paste(overlay, (cx - 300, cy - 110), overlay)

# -----------------------------------------------------------------------------
# Calculator silhouette in basso-destra, sfocata
def draw_calculator(im: Image.Image, cx: int, cy: int):
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    # corpo
    w = 380
    h = 480
    d.rounded_rectangle([(cx, cy), (cx + w, cy + h)], radius=18,
                        fill=(50, 45, 40, 240))
    # display
    d.rounded_rectangle([(cx + 24, cy + 24), (cx + w - 24, cy + 96)],
                        radius=6, fill=(225, 230, 220, 255))
    # tasti grid
    rows, cols = 5, 4
    px = 24
    py = 120
    bw = (w - 2 * px - (cols - 1) * 14) // cols
    bh = (h - py - 24 - (rows - 1) * 14) // rows
    for r in range(rows):
        for c in range(cols):
            x = cx + px + c * (bw + 14)
            y = cy + py + r * (bh + 14)
            d.rounded_rectangle([(x, y), (x + bw, y + bh)], radius=8,
                                fill=(95, 88, 78, 255))
    # rotate slightly
    layer = layer.rotate(-12, resample=Image.BICUBIC, expand=False)
    # blur per soft-focus background
    layer = layer.filter(ImageFilter.GaussianBlur(6))
    im.paste(layer, (0, 0), layer)

# -----------------------------------------------------------------------------
# Main compose
def build_source() -> Image.Image:
    im = Image.new("RGB", (W, H), DESK_BEIGE)
    make_desk(im)

    # Calculator sfocata in basso-destra (decorativo)
    draw_calculator(im, cx=1450, cy=1500)

    # Notebook centrale, leggermente decentrato a sinistra
    nb_x, nb_y, nb_w, nb_h = 200, 280, 1500, 1500
    draw_notebook(im, nb_x, nb_y, nb_w, nb_h)

    # Chart dentro al notebook
    draw_chart(im, x0=nb_x + 80, y0=nb_y + 100, w=1300, h=1200)

    # Pen diagonale in basso, fuori dal notebook
    draw_pen(im, cx=1300, cy=1850)

    # Leggerissima vignette per concentrare lo sguardo
    vig = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    vd = ImageDraw.Draw(vig)
    for r in range(120, 0, -1):
        alpha = int(0.55 * (120 - r))
        vd.ellipse([(r * 8, r * 8), (W - r * 8, H - r * 8)],
                   outline=(0, 0, 0, alpha), width=1)
    vig = vig.filter(ImageFilter.GaussianBlur(80))
    im = Image.alpha_composite(im.convert("RGBA"), vig).convert("RGB")

    return im

# -----------------------------------------------------------------------------
# Crop multi-formato
def crop_format(src: Image.Image, target_size: tuple[int, int], v_anchor: float = 0.5) -> Image.Image:
    tw, th = target_size
    target_ratio = tw / th
    w, h = src.size
    src_ratio = w / h

    if src_ratio > target_ratio:
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        cropped = src.crop((left, 0, left + new_w, h))
    else:
        new_h = int(w / target_ratio)
        top = int((h - new_h) * v_anchor)
        cropped = src.crop((0, top, w, top + new_h))

    return cropped.resize(target_size, Image.LANCZOS)

# -----------------------------------------------------------------------------
if __name__ == "__main__":
    print("Generating source image (2048×2048)…")
    source = build_source()
    src_path = OUT / "sovraindebitamento-source.png"
    source.save(src_path, "PNG", optimize=True)
    print(f"  ✓ {src_path.name}")

    print("Cropping multi-format…")
    for name, size, anchor in [
        ("sovraindebitamento-1x1.jpg", (1080, 1080), 0.5),
        ("sovraindebitamento-4x5.jpg", (1080, 1350), 0.5),
        ("sovraindebitamento-9x16.jpg", (1080, 1920), 0.5),
    ]:
        out = crop_format(source, size, v_anchor=anchor)
        out.save(OUT / name, "JPEG", quality=93, optimize=True)
        print(f"  ✓ {name}  ({size[0]}×{size[1]})")

    print(f"\nDone. Output in {OUT}")
