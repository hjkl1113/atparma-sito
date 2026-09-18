#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Accesso in sola lettura alla Search Console API.

Usa un service account: niente login interattivo, niente token da rinnovare a
mano. Il JWT viene firmato con `cryptography`, gia' presente nel sistema, e
scambiato con un access token valido un'ora. Nessuna dipendenza esterna.

Il file della chiave NON sta nel repo: si indica con SC_KEY_FILE nel .env.
"""
from __future__ import annotations

import base64
import json
import os
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import date, timedelta

TOKEN_URL = "https://oauth2.googleapis.com/token"
SCOPE = "https://www.googleapis.com/auth/webmasters.readonly"
API = "https://searchconsole.googleapis.com/webmasters/v3"


def _b64(dati: bytes) -> str:
    return base64.urlsafe_b64encode(dati).decode().rstrip("=")


def access_token(key_file: str) -> str:
    """Firma un JWT col service account e lo scambia per un access token."""
    from cryptography.hazmat.primitives import hashes, serialization
    from cryptography.hazmat.primitives.asymmetric import padding

    with open(key_file, encoding="utf8") as f:
        chiave = json.load(f)

    adesso = int(time.time())
    testata = {"alg": "RS256", "typ": "JWT"}
    corpo = {
        "iss": chiave["client_email"],
        "scope": SCOPE,
        "aud": TOKEN_URL,
        "iat": adesso,
        "exp": adesso + 3600,
    }
    da_firmare = (_b64(json.dumps(testata).encode())
                  + "." + _b64(json.dumps(corpo).encode())).encode()
    privata = serialization.load_pem_private_key(
        chiave["private_key"].encode(), password=None)
    firma = privata.sign(da_firmare, padding.PKCS1v15(), hashes.SHA256())
    asserzione = da_firmare.decode() + "." + _b64(firma)

    dati = urllib.parse.urlencode({
        "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
        "assertion": asserzione,
    }).encode()
    req = urllib.request.Request(TOKEN_URL, data=dati,
                                 headers={"Content-Type":
                                          "application/x-www-form-urlencoded"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return json.load(r)["access_token"]
    except urllib.error.HTTPError as e:
        raise SystemExit(f"Token rifiutato da Google ({e.code}): "
                         f"{e.read().decode()[:400]}")


def query(token: str, sito: str, inizio: date, fine: date,
          dimensioni=None, righe: int = 100) -> list:
    """Interroga searchAnalytics. `sito` e' l'URL esatto della proprieta'."""
    corpo = {
        "startDate": inizio.isoformat(),
        "endDate": fine.isoformat(),
        "rowLimit": righe,
    }
    if dimensioni:
        corpo["dimensions"] = dimensioni
    url = f"{API}/sites/{urllib.parse.quote(sito, safe='')}/searchAnalytics/query"
    req = urllib.request.Request(
        url, data=json.dumps(corpo).encode(),
        headers={"Authorization": f"Bearer {token}",
                 "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.load(r).get("rows", [])
    except urllib.error.HTTPError as e:
        testo = e.read().decode()[:400]
        if e.code == 403:
            raise SystemExit(
                "403: il service account non e' autorizzato sulla proprieta'.\n"
                "Search Console > Impostazioni > Utenti e autorizzazioni: "
                "aggiungi l'indirizzo del service account.\n" + testo)
        raise SystemExit(f"Errore API ({e.code}): {testo}")


def totali(righe: list) -> dict:
    """Somma clic e impressioni; CTR e posizione vanno pesati, non sommati."""
    clic = sum(r.get("clicks", 0) for r in righe)
    imp = sum(r.get("impressions", 0) for r in righe)
    if imp:
        pos = sum(r.get("position", 0) * r.get("impressions", 0)
                  for r in righe) / imp
    else:
        pos = 0.0
    return {"clic": clic, "impressioni": imp,
            "ctr": (clic / imp * 100) if imp else 0.0, "posizione": pos}


def ultimo_giorno_utile(oggi: date | None = None) -> date:
    """Search Console pubblica con 2-3 giorni di ritardo: si guarda indietro."""
    return (oggi or date.today()) - timedelta(days=3)
