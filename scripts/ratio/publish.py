#!/usr/bin/env python3
"""Fase L4a (publish) — pubblica una bozza approvata nella sezione news del sito.

Legge una bozza Markdown da output/bozze/, la converte in HTML e la inserisce
(upsert per slug) in lib/news.json, che alimenta /aggiornamenti-fiscali.
Poi basta commit + push perché vada online (entra in sitemap in automatico).

Uso:
    python3 publish.py output/bozze/2026-07-09-05-rottamazione-....md
    python3 publish.py output/bozze/*.md          # più bozze insieme

NB: pubblica solo ciò che gli passi — è il tuo gate di approvazione.
"""
from __future__ import annotations
import glob
import html as htmllib
import json
import os
import re
import sys

NEWS_JSON = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "..", "..", "lib", "news.json")
)


def parse_bozza(path: str) -> dict:
    with open(path) as f:
        raw = f.read()
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", raw, re.S)
    if not m:
        raise SystemExit(f"Frontmatter non trovato in {path}")
    fm_block, body = m.group(1), m.group(2)
    fm = {}
    for line in fm_block.splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            fm[k.strip()] = v.strip()
    # estrai il sommario dalla riga "> **Sommario:** ..." e rimuovila dal corpo
    sm = re.search(r"^\s*>\s*\*\*Sommario:\*\*\s*(.*)$", body, flags=re.M)
    sommario = sm.group(1).strip() if sm else ""
    body = re.sub(r"^\s*>\s*\*\*Sommario:\*\*.*$", "", body, flags=re.M)
    # rimuovi il commento token e il separatore finale
    body = re.sub(r"<!--.*?-->", "", body, flags=re.S)
    body = body.strip().rstrip("-").strip()
    return {"fm": fm, "sommario": sommario, "body_md": body}


def md_to_html(md: str) -> str:
    """Converte il sottoinsieme di Markdown prodotto da rewrite.py in HTML."""
    def inline(t: str) -> str:
        t = htmllib.escape(t, quote=False)
        t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
        t = re.sub(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)", r"<em>\1</em>", t)
        return t

    out: list[str] = []
    lines = md.split("\n")
    i = 0
    while i < len(lines):
        line = lines[i].rstrip()
        if not line.strip():
            i += 1
            continue
        h = re.match(r"^(#{2,4})\s+(.*)$", line)
        if h:
            lvl = len(h.group(1))
            out.append(f"<h{lvl}>{inline(h.group(2).strip())}</h{lvl}>")
            i += 1
            continue
        if re.match(r"^[-*]\s+", line):
            items = []
            while i < len(lines) and re.match(r"^[-*]\s+", lines[i].rstrip()):
                txt = re.sub(r"^[-*]\s+", "", lines[i].rstrip())
                items.append("<li>" + inline(txt) + "</li>")
                i += 1
            out.append("<ul>" + "".join(items) + "</ul>")
            continue
        if re.match(r"^\d+\.\s+", line):
            items = []
            while i < len(lines) and re.match(r"^\d+\.\s+", lines[i].rstrip()):
                txt = re.sub(r"^\d+\.\s+", "", lines[i].rstrip())
                items.append("<li>" + inline(txt) + "</li>")
                i += 1
            out.append("<ol>" + "".join(items) + "</ol>")
            continue
        # paragrafo (unisci righe consecutive non vuote)
        para = [line]
        i += 1
        while i < len(lines) and lines[i].strip() and not re.match(r"^(#{2,4}\s|[-*]\s|\d+\.\s)", lines[i].rstrip()):
            para.append(lines[i].rstrip())
            i += 1
        out.append(f"<p>{inline(' '.join(para))}</p>")
    return "\n".join(out)


VALID_CAT = {"privati", "partite-iva", "imprese", "generale"}


def to_news_item(parsed: dict) -> dict:
    fm = parsed["fm"]
    cat = fm.get("categoria", "generale").strip()
    if cat not in VALID_CAT:
        cat = "generale"
    return {
        "slug": fm.get("slug", "").strip(),
        "titolo": fm.get("titolo", "").strip(),
        "sommario": (parsed.get("sommario") or fm.get("sommario", "") or "").strip(),
        "data": fm.get("data", "").strip(),
        "categoria": cat,
        "fonteNormativa": (fm.get("fonte_normativa", "") or "").strip(),
        "corpoHtml": md_to_html(parsed["body_md"]),
    }


def load_news() -> list:
    if not os.path.exists(NEWS_JSON):
        return []
    with open(NEWS_JSON) as f:
        return json.load(f)


def main() -> int:
    args = sys.argv[1:]
    if not args:
        raise SystemExit("Uso: python3 publish.py <bozza.md> [altra.md ...]")
    paths = []
    for a in args:
        paths.extend(glob.glob(a))
    if not paths:
        raise SystemExit("Nessuna bozza trovata per gli argomenti indicati.")

    items = load_news()
    by_slug = {it["slug"]: idx for idx, it in enumerate(items)}
    pubblicati = []
    for p in paths:
        parsed = parse_bozza(p)
        item = to_news_item(parsed)
        if not item["slug"] or not item["titolo"]:
            print(f"  ⚠️ {os.path.basename(p)}: slug/titolo mancante, salto")
            continue
        if item["slug"] in by_slug:
            items[by_slug[item["slug"]]] = item  # upsert
            azione = "aggiornata"
        else:
            items.append(item)
            by_slug[item["slug"]] = len(items) - 1
            azione = "aggiunta"
        pubblicati.append((item["slug"], azione))
        print(f"  ✅ {azione}: {item['titolo']}  (/aggiornamenti-fiscali/{item['slug']})")

    items.sort(key=lambda x: x.get("data", ""), reverse=True)
    with open(NEWS_JSON, "w") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print(f"\n{len(pubblicati)} news scritte in lib/news.json (totale {len(items)}).")
    print("Ora: commit + push → vanno online ed entrano in sitemap.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
