#!/usr/bin/env python3
"""Fase L3 (notify) — manda la mail di approvazione con le bozze del giorno.

Legge le bozze DA_APPROVARE da output/bozze/, compone una mail HTML con, per
ogni news, i bottoni "Approva" e "Modifica" (mailto con marcatori che collect.py
sa rileggere), e la invia a se stessi (STUDIO_MAIL_USER) via SMTP Aruba.

Uso:
    python3 notify.py                # DRY-RUN: scrive l'HTML in output/, non invia
    python3 notify.py --send         # invia davvero la mail a STUDIO_MAIL_USER
    python3 notify.py --to altro@x.it --send

Marcatori nel subject delle risposte (li rilegge collect.py):
    [OK] <slug>          -> pubblica
    [MODIFICA] <slug>    -> rigenera con le note nel corpo
"""
from __future__ import annotations
import argparse
import glob
import os
import re
import smtplib
import ssl
import urllib.parse
from email.message import EmailMessage

import lib_ratio as R

BOZZE_DIR = os.path.join(os.path.dirname(__file__), "output", "bozze")
OUT_DIR = os.path.join(os.path.dirname(__file__), "output")

ACCENT = "#4A9FD8"
ACCENT_DARK = "#3580B0"


def parse_bozza(path: str) -> dict | None:
    with open(path) as f:
        raw = f.read()
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", raw, re.S)
    if not m:
        return None
    fm = {}
    for line in m.group(1).splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            fm[k.strip()] = v.strip()
    body = m.group(2)
    sm = re.search(r"^\s*>\s*\*\*Sommario:\*\*\s*(.*)$", body, flags=re.M)
    fm["_sommario"] = sm.group(1).strip() if sm else ""
    return fm


def load_bozze(paths: list[str]) -> list[dict]:
    out = []
    for p in sorted(paths):
        fm = parse_bozza(p)
        if not fm or not fm.get("slug") or not fm.get("titolo"):
            continue
        if fm.get("stato", "").upper() not in ("", "DA_APPROVARE"):
            continue
        fm["_path"] = p
        out.append(fm)
    return out


CAT_LABEL = {"privati": "Privati", "partite-iva": "Partite IVA",
             "imprese": "Imprese", "generale": "Fisco"}


def mailto(to: str, subject: str, body: str) -> str:
    q = urllib.parse.urlencode({"subject": subject, "body": body}, quote_via=urllib.parse.quote)
    return f"mailto:{to}?{q}"


def build_html(bozze: list[dict], to: str, data_label: str) -> str:
    cards = []
    for i, b in enumerate(bozze, 1):
        slug = b["slug"]
        cat = CAT_LABEL.get(b.get("categoria", "generale"), "Fisco")
        fonte = b.get("fonte_normativa", "")
        ok = mailto(to, f"[OK] {slug}", f"OK - pubblica: {slug}")
        mod = mailto(to, f"[MODIFICA] {slug}",
                     f"MODIFICA {slug}:\n(scrivi qui cosa cambiare)")
        fonte_html = (
            f'<p style="margin:0 0 14px;font-size:12px;color:#8698a6;">'
            f'<b style="color:#5a6b7a;">Norme citate:</b> {fonte}</p>' if fonte else ""
        )
        cards.append(f"""
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e4ebf1;border-radius:12px;margin-bottom:16px;">
          <tr><td style="padding:18px;">
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:{ACCENT_DARK};margin-bottom:8px;">
              #{i} · {cat}
            </div>
            <div style="font-size:17px;font-weight:700;color:#1a2733;line-height:1.3;margin-bottom:6px;">{b['titolo']}</div>
            <div style="font-size:14px;color:#5a6b7a;margin-bottom:10px;">{b['_sommario']}</div>
            {fonte_html}
            <a href="{ok}" style="display:inline-block;background:{ACCENT};color:#fff;text-decoration:none;font-size:14px;font-weight:600;padding:9px 16px;border-radius:8px;margin-right:8px;">✅ Approva e pubblica</a>
            <a href="{mod}" style="display:inline-block;background:#fff;color:#1a2733;text-decoration:none;font-size:14px;font-weight:600;padding:9px 16px;border-radius:8px;border:1px solid #cdd8e1;">✏️ Modifica</a>
          </td></tr>
        </table>""")

    return f"""<!doctype html><html><body style="margin:0;background:#e7edf2;font-family:-apple-system,Segoe UI,Roboto,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:24px 12px;">
      <table width="620" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;">
        <tr><td style="padding:24px 24px 8px;">
          <div style="font-weight:700;font-size:15px;color:#1a2733;margin-bottom:16px;">A.T. Consulting Parma <span style="font-weight:500;color:#8698a6;">· Aggiornamenti fiscali</span></div>
          <p style="font-size:15px;color:#5a6b7a;margin:0 0 4px;">Dal <b style="color:#1a2733;">Notiziario Ratio</b> ho preparato <b style="color:#1a2733;">{len(bozze)} news</b> pronte per il sito ({data_label}).</p>
          <p style="font-size:12.5px;color:#8698a6;margin:0 0 20px;">Approva quelle da pubblicare o chiedi una modifica. Nulla va online senza il tuo OK.</p>
          {''.join(cards)}
          <p style="font-size:12px;color:#8698a6;border-top:1px solid #e4ebf1;padding-top:16px;margin-top:8px;">
            Premi Approva o Modifica: parte una risposta già pronta, tu premi Invia. Il motore la rilegge e pubblica su /aggiornamenti-fiscali.
          </p>
        </td></tr>
      </table>
    </td></tr></table></body></html>"""


def main() -> int:
    ap = argparse.ArgumentParser(description="Manda la mail di approvazione news (L3)")
    ap.add_argument("--send", action="store_true", help="invia davvero (default: dry-run)")
    ap.add_argument("--to", default=None, help="destinatario (default: STUDIO_MAIL_USER)")
    ap.add_argument("--bozze", default=None, help="glob delle bozze (default: tutte DA_APPROVARE)")
    args = ap.parse_args()

    env = R.load_env()
    to = args.to or env.get("STUDIO_MAIL_USER")
    if not to:
        raise SystemExit("Destinatario mancante: STUDIO_MAIL_USER non trovato.")

    paths = glob.glob(args.bozze) if args.bozze else glob.glob(os.path.join(BOZZE_DIR, "*.md"))
    bozze = load_bozze(paths)
    if not bozze:
        print("Nessuna bozza DA_APPROVARE trovata in output/bozze/.")
        return 1

    from datetime import date  # solo per etichetta; data reale presa dalla bozza se c'è
    data_label = bozze[0].get("data", "")
    html = build_html(bozze, to, data_label or "oggi")

    preview = os.path.join(OUT_DIR, "anteprima-mail-approvazione.html")
    with open(preview, "w") as f:
        f.write(html)
    print(f"Bozze incluse: {len(bozze)}")
    for i, b in enumerate(bozze, 1):
        print(f"  #{i} {b['slug']}")
    print(f"Anteprima HTML: {os.path.relpath(preview)}")

    if not args.send:
        print("\nDRY-RUN (non inviata). Aggiungi --send per inviarla davvero.")
        return 0

    user = env.get("STUDIO_MAIL_USER"); pw = env.get("STUDIO_MAIL_PASS")
    host = env.get("SMTP_HOST", "smtp.aruba.it"); port = int(env.get("SMTP_PORT", "465"))
    if not user or not pw:
        raise SystemExit("Credenziali SMTP mancanti (STUDIO_MAIL_USER/PASS).")

    msg = EmailMessage()
    msg["From"] = f"Aggiornamenti A.T. Parma <{user}>"
    msg["To"] = to
    msg["Subject"] = f"Bozze aggiornamenti fiscali — {data_label or 'oggi'} ({len(bozze)} pronte)"
    msg.set_content("Apri la mail in HTML per vedere le bozze e i bottoni Approva/Modifica.")
    msg.add_alternative(html, subtype="html")

    ctx = ssl.create_default_context()
    with smtplib.SMTP_SSL(host, port, context=ctx, timeout=30) as s:
        s.login(user, pw)
        s.send_message(msg)
    print(f"\n✅ Mail inviata a {to}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
