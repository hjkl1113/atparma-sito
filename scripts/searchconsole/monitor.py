#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Monitoraggio Search Console di www.atparma.com.

Due modi:
  --modo settimanale   report completo, parte sempre (lunedi' mattina)
  --modo giornaliero   silenzioso: scrive SOLO se qualcosa si e' mosso

Il traffico del sito e' basso (poche unita' di clic al giorno), quindi il modo
giornaliero non manda i numeri di ieri: confronta il giorno con la media dei
sette precedenti e parla solo se lo scarto e' fuori soglia. Serve ad accorgersi
di un guasto, non a raccontare il rumore quotidiano.

Nota: le AZIONI MANUALI non sono esposte da alcuna API pubblica. Vanno guardate
a mano in Search Console > Sicurezza e azioni manuali.

Uso:
    python3 monitor.py --modo settimanale --prova
    python3 monitor.py --modo giornaliero --send
"""
from __future__ import annotations

import argparse
import os
import smtplib
import ssl
import sys
from datetime import date, timedelta
from email.message import EmailMessage

QUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, QUI)
sys.path.insert(0, os.path.join(os.path.dirname(QUI), "ratio"))

import sc_api  # noqa: E402
import lib_ratio as R  # noqa: E402

CROLLO = 0.5      # scarto sotto la media a 7 giorni oltre il quale si avvisa
MIN_CLIC = 5      # sotto questa media giornaliera il crollo non e' significativo


def pct(x: float) -> str:
    return f"{x:+.0f}%" if abs(x) >= 1 else "invariato"


def variazione(nuovo: float, vecchio: float) -> float:
    if not vecchio:
        return 0.0
    return (nuovo - vecchio) / vecchio * 100


def blocco_totali(a: dict, b: dict) -> str:
    return (
        f"  clic          {a['clic']:>6}   ({pct(variazione(a['clic'], b['clic']))} "
        f"sulla settimana prima: {b['clic']})\n"
        f"  impressioni   {a['impressioni']:>6}   "
        f"({pct(variazione(a['impressioni'], b['impressioni']))}: {b['impressioni']})\n"
        f"  CTR            {a['ctr']:>5.1f}%   (prima {b['ctr']:.1f}%)\n"
        f"  posizione      {a['posizione']:>5.1f}    (prima {b['posizione']:.1f})\n"
    )


def nome_pagina(url: str) -> str:
    return url.replace("https://www.atparma.com", "") or "/"


def settimanale(token: str, sito: str, fine: date) -> tuple[str, str]:
    inizio = fine - timedelta(days=6)
    fine_p = inizio - timedelta(days=1)
    inizio_p = fine_p - timedelta(days=6)

    tot = sc_api.totali(sc_api.query(token, sito, inizio, fine))
    tot_p = sc_api.totali(sc_api.query(token, sito, inizio_p, fine_p))

    pag = sc_api.query(token, sito, inizio, fine, ["page"], 500)
    pag_p = {r["keys"][0]: r for r in
             sc_api.query(token, sito, inizio_p, fine_p, ["page"], 500)}

    righe = []
    for r in sorted(pag, key=lambda x: -x.get("clicks", 0))[:12]:
        url = r["keys"][0]
        prima = pag_p.get(url, {}).get("clicks", 0)
        delta = r["clicks"] - prima
        segno = f"{delta:+d}" if delta else "="
        righe.append(f"  {r['clicks']:>4} clic {segno:>5}  {r['impressions']:>6} impr  "
                     f"CTR {r['ctr']*100:>4.1f}%  pos {r['position']:>4.1f}  "
                     f"{nome_pagina(url)}")

    # Pagine che hanno perso di piu', per accorgersi di cali che i totali nascondono
    cali = []
    for url, prima in pag_p.items():
        ora = next((r["clicks"] for r in pag if r["keys"][0] == url), 0)
        if prima.get("clicks", 0) - ora >= 3:
            cali.append((prima["clicks"] - ora, url, prima["clicks"], ora))
    cali.sort(reverse=True)

    corpo = [
        f"Settimana dal {inizio.strftime('%d/%m')} al {fine.strftime('%d/%m/%Y')}",
        "(Search Console pubblica con qualche giorno di ritardo: questi sono i",
        " dati piu' recenti disponibili.)",
        "",
        blocco_totali(tot, tot_p),
        "PAGINE PIU' VISTE",
        "\n".join(righe) if righe else "  nessun clic nel periodo",
    ]
    if cali:
        corpo += ["", "PAGINE IN CALO (almeno 3 clic persi)"]
        corpo += [f"  {nome_pagina(u)}: da {p} a {o} clic"
                  for _, u, p, o in cali[:6]]
    corpo += ["", "Le azioni manuali e gli errori di indicizzazione non sono",
              "esposti dall'API: vanno guardati in Search Console."]

    ogg = (f"Search Console: {tot['clic']} clic questa settimana "
           f"({pct(variazione(tot['clic'], tot_p['clic']))})")
    return ogg, "\n".join(corpo)


def giornaliero(token: str, sito: str, fine: date) -> tuple[str, str] | None:
    """Restituisce un avviso solo se c'e' qualcosa da dire."""
    oggi_r = sc_api.totali(sc_api.query(token, sito, fine, fine))
    base_i, base_f = fine - timedelta(days=7), fine - timedelta(days=1)
    base = sc_api.totali(sc_api.query(token, sito, base_i, base_f))
    media = base["clic"] / 7 if base["clic"] else 0

    allarmi = []
    if media >= MIN_CLIC and oggi_r["clic"] < media * (1 - CROLLO):
        allarmi.append(
            f"I clic del {fine.strftime('%d/%m')} sono {oggi_r['clic']}, "
            f"contro una media di {media:.1f} nei sette giorni precedenti.")
    if base["impressioni"] and oggi_r["impressioni"] == 0:
        allarmi.append(
            f"Zero impressioni il {fine.strftime('%d/%m')}: il sito non e' "
            f"comparso in alcuna ricerca. Va verificato subito.")

    if not allarmi:
        return None
    corpo = ["\n".join(allarmi), "",
             f"  clic quel giorno   {oggi_r['clic']}",
             f"  impressioni        {oggi_r['impressioni']}",
             f"  media 7 giorni     {media:.1f} clic",
             "",
             "Puo' essere un calo di stagione o un guasto. Da guardare:",
             "  - Search Console > Indicizzazione > Pagine",
             "  - Search Console > Sicurezza e azioni manuali",
             "  - che il sito risponda: https://www.atparma.com/"]
    return "Search Console: calo anomalo di traffico", "\n".join(corpo)


def manda(oggetto: str, corpo: str, env: dict) -> None:
    to = env.get("STUDIO_MAIL_USER")
    pw = env.get("STUDIO_MAIL_PASS")
    if not to or not pw:
        raise SystemExit("Credenziali mancanti: STUDIO_MAIL_USER / STUDIO_MAIL_PASS.")
    msg = EmailMessage()
    msg["Subject"] = oggetto
    msg["From"] = to
    msg["To"] = to
    msg.set_content(corpo)
    ctx = ssl.create_default_context()
    with smtplib.SMTP_SSL(env.get("SMTP_HOST", "smtps.aruba.it"),
                          int(env.get("SMTP_PORT", "465")),
                          context=ctx, timeout=30) as s:
        s.login(to, pw)
        s.send_message(msg)


def main() -> int:
    ap = argparse.ArgumentParser(description="Monitoraggio Search Console")
    ap.add_argument("--modo", choices=("settimanale", "giornaliero"),
                    default="settimanale")
    ap.add_argument("--send", action="store_true", help="invia davvero")
    ap.add_argument("--oggi", help="gg/mm/aaaa, per provare una data diversa")
    args = ap.parse_args()

    env = R.load_env()
    key = os.path.expanduser(env.get("SC_KEY_FILE", ""))
    sito = env.get("SC_SITE", "https://www.atparma.com/")
    if not key or not os.path.exists(key):
        raise SystemExit(
            "SC_KEY_FILE non impostato o file assente.\n"
            "Vedi scripts/searchconsole/CONFIGURAZIONE.md")

    oggi = date.today()
    if args.oggi:
        g, m, a = args.oggi.split("/")
        oggi = date(int(a), int(m), int(g))
    fine = sc_api.ultimo_giorno_utile(oggi)

    token = sc_api.access_token(key)
    esito = (settimanale(token, sito, fine) if args.modo == "settimanale"
             else giornaliero(token, sito, fine))

    if esito is None:
        print(f"[{oggi}] nulla da segnalare.")
        return 0
    oggetto, corpo = esito
    print(f"--- {oggetto}\n{corpo}\n")
    if args.send:
        manda(oggetto, corpo, env)
        print("inviato.")
    else:
        print("(prova: non inviato)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
