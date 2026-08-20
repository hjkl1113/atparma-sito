#!/usr/bin/env python3
"""Circolari speciali Ratio -> approfondimenti ORIGINALI per /approfondimenti.

Prende una circolare speciale (dalla mail o da un PDF gia' scaricato), la spezza
nei suoi blocchi tematici (un articolo di legge = un blocco) e riscrive ogni
blocco con Fable 5 in una sezione originale per il sito. NIENTE viene pubblicato:
la bozza va in output/bozze-circolari/ e passa dal solito gate di approvazione.

Uso:
    python3 circolare.py --uid 328 --list          # elenca i blocchi trovati
    python3 circolare.py --uid 328 --pick 1,2,12   # riscrive i blocchi scelti
    python3 circolare.py --pdf output/speciale38_2026.pdf --pick all

Vincoli (gli stessi di rewrite.py, qui piu' stringenti perche' la fonte e'
un documento editoriale marcato "riproduzione vietata"):
- MAI testo verbatim: ogni frase e' riscritta da zero.
- MAI citare Ratio / Centro Studi Castelli come fonte: si citano le norme.
- SOLO fatti presenti nel testo fonte: nessuna norma "ricordata" a memoria.
- Modello: RATIO_REWRITE_MODEL (claude-fable-5).
"""
from __future__ import annotations
import argparse
import email
import json
import os
import re
import sys
import urllib.error
import urllib.request

import lib_ratio as R

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "output")
BOZZE_DIR = os.path.join(OUTPUT_DIR, "bozze-circolari")
API_URL = "https://api.anthropic.com/v1/messages"

SYSTEM_PROMPT = (
    "Sei un dottore commercialista che scrive per il sito dello studio "
    "A.T. Consulting Parma. Trasformi il testo tecnico di un provvedimento "
    "normativo in una spiegazione ORIGINALE, chiara e utile per imprenditori, "
    "professionisti e privati non specialisti.\n"
    "REGOLE FERREE, non derogabili:\n"
    "(1) Il TESTO FONTE e' materiale editoriale protetto: e' VIETATO riprodurne "
    "frasi o periodi. Riformula tutto da zero, con parole tue e struttura tua. "
    "Nessuna sequenza di piu' di 6 parole puo' coincidere con la fonte.\n"
    "(2) Usa SOLO fatti, date, percentuali, importi e riferimenti normativi "
    "presenti nel TESTO FONTE. Non aggiungere nulla che non ci sia. Se un dato "
    "non c'e', non esiste.\n"
    "(3) I riferimenti normativi si citano fedelmente (es. 'art. 12 D.Lgs. "
    "148/2026', 'art. 19 D.P.R. 633/1972'). MAI citare come fonte 'Ratio', "
    "'Centro Studi Castelli' o altre testate: la fonte e' la norma.\n"
    "(4) Spiega sempre COSA CAMBIA rispetto a prima, CHI riguarda e DA QUANDO.\n"
    "(5) Tono professionale ma accessibile: informazione, non consulenza "
    "personalizzata, nessuna promessa di risultato.\n"
    "(6) Se il blocco e' troppo specialistico per il pubblico di un sito di "
    "studio (es. fiscalita' internazionale di gruppi multinazionali), segnalalo "
    "con 'adatto_al_sito': false, ma scrivi comunque la sezione."
)

USER_TEMPLATE = """Riscrivi in una sezione ORIGINALE per il sito dello studio il blocco normativo qui sotto.

Provvedimento di riferimento: {provvedimento}
Titolo del blocco: "{titolo_blocco}"

--- TESTO FONTE (materiale protetto: uso interno, NON citarlo e NON copiarlo) ---
{testo_fonte}
--- FINE TESTO FONTE ---

Produci SOLO un oggetto JSON con questi campi (nessun testo fuori dal JSON):
{{
  "adatto_al_sito": true/false,
  "titolo": "titolo della sezione, concreto e comprensibile a un non addetto (max ~70 caratteri)",
  "id": "slug-ancora-minuscolo-con-trattini",
  "corpo_html": "la spiegazione in HTML semplice: solo <p>, <ul>/<li>, <strong>, eventuale <h3>. 150-320 parole. Spiega cosa cambia, per chi, con quali effetti pratici. SOLO in base al testo fonte.",
  "chi_riguarda": ["uno o piu' tra: privati, partite-iva, imprese, enti-non-profit"],
  "decorrenza": "quando si applica, in parole (stringa vuota se il testo fonte non lo dice)",
  "riferimento": "l'articolo del provvedimento, es. 'Art. 12 D.Lgs. 148/2026'"
}}"""

SINTESI_TEMPLATE = """Hai riscritto le sezioni di un approfondimento sul provvedimento: {provvedimento}.

Titoli delle sezioni prodotte:
{elenco}

Descrizione sintetica del provvedimento (dalla fonte, non copiarla):
{descrizione}

Produci SOLO un oggetto JSON:
{{
  "titolo": "titolo della pagina, chiaro e cercabile su Google (max ~70 caratteri)",
  "slug": "slug-url-minuscolo-con-trattini",
  "sommario": "1-2 frasi che dicono cosa contiene il provvedimento e chi tocca (max ~180 caratteri)",
  "intro_html": "2-3 paragrafi <p> di apertura: cos'e' il provvedimento, quando entra in vigore, perche' conta. SOLO fatti presenti qui sopra.",
  "destinatari": ["uno o piu' tra: privati, partite-iva, imprese, enti-non-profit"]
}}"""


# --------------------------------------------------------------------------
# Estrazione blocchi dal PDF della circolare
# --------------------------------------------------------------------------

RUMORE = re.compile(
    r"RIPRODUZIONE VIETATA|Centro Studi Castelli|Circolare Speciale|Via (Francesco )?Bonfiglio"
    r"|ISSN|^\s*Pagina \d+|servizioclienti@|Scarica la Circolare|C\.F\. e P\.I\."
    r"|^\s*\d{1,3}/\d{4}\s*$"
    # intestazioni di pagina: "Decreto Omnibus            38/2026" e la data sotto
    r"|\s{6,}\d{1,3}/\d{4}\s*$"
    r"|^\s*\d{1,2}\s?(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|"
    r"settembre|ottobre|novembre|dicembre)\s?\d{4}\s*$",
    re.I,
)
# riga-intestazione di un blocco. Due formati ricorrenti nelle circolari Ratio:
#   "Detrazione Iva                              Art. 12"           (straordinarie su un decreto)
#   "Linee guida sul rischio fiscale    Provv. Ag. Entrate 6.07.2026, n. 200904"  (aggiornamento mensile)
RIFERIMENTO = (
    r"Artt?\.|Provv\.|Provvedimento|Circolare|Circ\.|Risoluzione|Ris\.|Interpello|"
    r"Principio di diritto|Consulenza giuridica|Messaggio|Comunicato|Decreto|D\.L\.|"
    r"D\.Lgs\.|D\.M\.|D\.P\.R\.|L\.\s*\d|Legge|Sentenza|Ordinanza|Notizia|Nota"
)
HEAD = re.compile(
    rf"^\s*(?P<tit>\S.*?)\s{{2,}}(?P<art>(?:{RIFERIMENTO})[^\t]*?)\s*$"
)
# heading compatto: "Titolo del tema Provv. Ag. Entrate 30.07.2026, n. 223895"
HEAD_COMPATTO = re.compile(
    r"^(?P<tit>[A-ZÀ-Ù][^•\n]{15,}?)\s+"
    r"(?P<art>(?:Provv\.|Circ\.|Ris\.|Circolare|Risoluzione|Provvedimento|Comunicato|"
    r"Notizia|Messaggio|D\.L\.|D\.M\.|D\.Lgs\.)[^•\n]*\d{4}[^•\n]*)$"
)
# riferimento da solo sulla riga (titolo andato a capo sopra/sotto)
SOLO_RIF = re.compile(rf"^\s*(?P<art>(?:{RIFERIMENTO})\s*[\d,\.\s\-a-z/]*)\s*$", re.I)
TITOLO_PARTE = re.compile(r"^\s*(Titolo [IVXL]+|Capo [IVXL]+|Sezione [IVXL]+)\s*-\s*(?P<nome>.+?)\s*$")


def pulisci(testo: str) -> str:
    righe = [l for l in testo.split("\n") if not RUMORE.search(l)]
    # intestazioni e pie' di pagina: righe identiche ripetute su piu' pagine
    from collections import Counter
    frequenze = Counter(l.strip() for l in righe if len(l.strip()) > 10)
    ripetute = {t for t, n in frequenze.items() if n >= 3}
    righe = [l for l in righe if l.strip() not in ripetute]
    out = "\n".join(righe)
    return re.sub(r"\n{3,}", "\n\n", out)


# glifi decorativi dei PDF Ratio (bullet/frecce mappati nell'area privata Unicode)
GLIFI_PRIVATI = re.compile(r"[\uE000-\uF8FF]")


def ricomponi_sillabe(testo: str) -> str:
    """Nel testo giustificato le parole spezzate a fine riga vanno ricucite."""
    testo = GLIFI_PRIVATI.sub(" ", testo)
    testo = re.sub(r"(\w)[-‐‑]\s+(\w)", r"\1\2", testo)
    return re.sub(r"\s{2,}", " ", testo).strip()


def estrai_blocchi(testo: str) -> list[dict]:
    """Spezza il testo della circolare in blocchi {parte, titolo, art, corpo}."""
    righe = pulisci(testo).split("\n")
    blocchi: list[dict] = []
    parte = ""
    corrente: dict | None = None
    salta_prossima = False
    for i, riga in enumerate(righe):
        if salta_prossima:
            salta_prossima = False
            continue
        # una riga puntata e' sempre corpo: i riferimenti che contiene sono
        # citazioni interne, non l'intestazione di un nuovo blocco
        e_corpo = riga.lstrip().startswith(("•", "◦", "-", "–"))
        mp = TITOLO_PARTE.match(riga)
        if mp:
            parte = mp.group("nome").strip().title()
            continue
        # intestazione con il riferimento isolato su una riga propria: il titolo
        # sta nelle righe adiacenti (capita quando il titolo va a capo).
        msolo = None if e_corpo else SOLO_RIF.match(riga)
        if msolo:
            prima = righe[i - 1].strip() if i else ""
            dopo = righe[i + 1].strip() if i + 1 < len(righe) else ""
            # la riga sopra e' un titolo solo se non e' corpo puntato, non e'
            # una frase conclusa e comincia in maiuscolo
            if (not prima or prima.startswith(("•", "◦", "-", "–"))
                    or prima.endswith((".", ";", ":")) or not prima[:1].isupper()
                    or len(prima) < 9 or SOLO_RIF.match(prima)):
                prima = ""
            # la riga sotto puo' essere la coda del titolo andato a capo
            if (not dopo or dopo.startswith(("•", "◦", "-", "–")) or len(dopo) > 120
                    or dopo.endswith((".", ";")) or SOLO_RIF.match(dopo)):
                dopo = ""
            titolo = " ".join(x for x in (prima, dopo) if x).strip()
            if titolo:
                if corrente:
                    if corrente["corpo"] and corrente["corpo"][-1].strip() == righe[i - 1].strip():
                        corrente["corpo"].pop()
                    blocchi.append(corrente)
                corrente = {
                    "parte": parte,
                    "titolo": re.sub(r"\s{2,}", " ", titolo),
                    "art": msolo.group("art").strip(),
                    "corpo": [],
                }
                salta_prossima = True
                continue

        mh = None if e_corpo else (HEAD.match(riga) or HEAD_COMPATTO.match(riga))
        if mh and len(mh.group("tit")) > 8:
            if corrente:
                blocchi.append(corrente)
            corrente = {
                "parte": parte,
                "titolo": re.sub(r"\s{2,}", " ", mh.group("tit")).strip(),
                "art": re.sub(r"\s{2,}", " ", mh.group("art")).strip(),
                "corpo": [],
            }
            continue
        if corrente is not None:
            corrente["corpo"].append(riga)
    if corrente:
        blocchi.append(corrente)
    for b in blocchi:
        b["corpo"] = re.sub(r"\n{3,}", "\n\n", "\n".join(b["corpo"])).strip()
    # scarta i blocchi senza sostanza
    return [b for b in blocchi if len(b["corpo"]) > 200]


# --------------------------------------------------------------------------
# Layout a due colonne (rassegne "Interpelli": etichetta a sinistra, testo a destra)
# --------------------------------------------------------------------------

# "Interpello Ag. Entrate 31.07.2026, n. 153" / "Princ. dir. ..." / "Consul. giur. ..."
RIF_COLONNA = re.compile(r"n\.\s*\d+\s*$")
FONTE_COLONNA = re.compile(
    r"(Interpello|Princ\.\s*dir\.|Principio di diritto|Consul\.\s*giur\.|Consulenza giuridica|Risp\.)",
    re.I,
)


def colonna_di_stacco(righe: list[str]) -> int | None:
    """Colonna in cui inizia il testo, se la pagina e' impaginata su due colonne.

    Le righe di una stessa colonna non partono tutte dallo stesso carattere
    (rientri, allineamenti), quindi si cerca il *cluster* di posizioni piu'
    popoloso e si taglia al suo estremo sinistro.
    """
    conteggi: dict[int, int] = {}
    for riga in righe:
        gruppi = list(re.finditer(r"\S(?:.*?\S)?(?=\s{3,}|$)", riga))
        if len(gruppi) >= 2:
            x = gruppi[1].start()
            conteggi[x] = conteggi.get(x, 0) + 1
    if not conteggi:
        return None
    utili = sum(1 for r in righe if r.strip())
    migliore, quante = None, 0
    for centro in conteggi:
        vicini = [x for x in conteggi if abs(x - centro) <= 5]
        tot = sum(conteggi[x] for x in vicini)
        if tot > quante:
            migliore, quante = min(vicini), tot
    if migliore is None or not utili:
        return None
    return migliore if quante / utili > 0.20 and migliore > 10 else None


def estrai_blocchi_colonne(testo: str) -> list[dict]:
    """Blocchi di una rassegna impaginata su due colonne.

    Colonna sinistra = etichetta del caso + estremi del documento di prassi;
    colonna destra = la massima. Un blocco si chiude quando ha gia' incontrato
    gli estremi ("..., n. 153") e il gruppo di righe successivo ne apre altri.
    """
    righe = pulisci(testo).split("\n")
    x = colonna_di_stacco(righe)
    if x is None:
        return []

    gruppi: list[list[str]] = [[]]
    for riga in righe:
        if not riga.strip():
            if gruppi[-1]:
                gruppi.append([])
            continue
        gruppi[-1].append(riga)
    gruppi = [g for g in gruppi if g]

    blocchi: list[dict] = []
    etichetta: list[str] = []
    corpo: list[str] = []
    rif = ""

    def chiudi():
        nonlocal etichetta, corpo, rif
        testo_corpo = " ".join(corpo).strip()
        titolo = " ".join(etichetta).strip().title()
        testo_corpo = ricomponi_sillabe(testo_corpo)
        if titolo and len(testo_corpo) > 120 and RIF_COLONNA.search(rif or ""):
            blocchi.append({"parte": "", "titolo": re.sub(r"\s{2,}", " ", titolo),
                            "art": rif or "Interpello", "corpo": testo_corpo})
        etichetta, corpo, rif = [], [], ""

    for gruppo in gruppi:
        if rif:  # il blocco precedente e' completo: questo gruppo ne apre uno nuovo
            chiudi()
        for riga in gruppo:
            sinistra = riga[: max(0, x - 1)].strip()
            destra = riga[x - 1:].strip() if len(riga) > x - 1 else ""
            if sinistra:
                if FONTE_COLONNA.search(sinistra) or RIF_COLONNA.search(sinistra):
                    rif = (rif + " " + sinistra).strip()
                else:
                    etichetta.append(sinistra)
            if destra:
                corpo.append(re.sub(r"^[•◦]\s*", "", destra))
    chiudi()
    return blocchi


# --------------------------------------------------------------------------
# Chiamata al modello
# --------------------------------------------------------------------------

def call_model(env: dict, prompt: str, max_tokens: int = 4000) -> tuple[dict, dict]:
    api_key = env.get("ANTHROPIC_API_KEY") or os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        raise SystemExit("ANTHROPIC_API_KEY mancante (scripts/ratio/.env).")
    model = env.get("RATIO_REWRITE_MODEL") or "claude-fable-5"
    payload = {
        "model": model,
        "max_tokens": max_tokens,
        "system": SYSTEM_PROMPT,
        "messages": [{"role": "user", "content": prompt}],
    }
    req = urllib.request.Request(
        API_URL,
        data=json.dumps(payload).encode("utf-8"),
        method="POST",
        headers={
            "content-type": "application/json",
            "x-api-key": api_key,
            "anthropic-version": "2023-06-01",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=180) as resp:
            body = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        raise SystemExit(f"Errore API ({e.code}): {e.read().decode('utf-8','replace')[:400]}")
    if body.get("stop_reason") == "refusal":
        raise SystemExit("Richiesta rifiutata dai classificatori di sicurezza.")
    text = "".join(b.get("text", "") for b in body.get("content", []) if b.get("type") == "text")
    m = re.search(r"\{.*\}", text, re.S)
    if not m:
        raise SystemExit(f"Risposta non-JSON dal modello:\n{text[:400]}")
    return json.loads(m.group(0)), body.get("usage", {})


# --------------------------------------------------------------------------
# Controllo anti-verbatim (rete di sicurezza sul copyright)
# --------------------------------------------------------------------------

# Token che compongono le citazioni di legge: devono restare identici alla fonte
# (un riferimento normativo riscritto sarebbe un errore, non originalita').
TOKEN_NORMATIVI = {
    "art", "artt", "c", "cc", "comma", "commi", "d", "dl", "dlgs", "dpr", "lgs",
    "l", "n", "p", "r", "bis", "ter", "quater", "quinquies", "sexies", "septies",
    "lett", "tuir", "ue", "cod", "civ", "del", "al", "e",
}


# Locuzioni che appartengono al testo di legge o al lessico tecnico obbligato:
# coincidono per forza con la fonte, che a sua volta le riprende dalla norma.
FORMULE_TECNICHE = [
    "periodo d imposta in corso al",
    "periodo d imposta successivo a quello in corso al",
    "data di entrata in vigore",
    "termine di presentazione della dichiarazione",
    "dichiarazione annuale relativa",
    "dichiarazione di successione",
    "coniuge non legalmente ed effettivamente separato",
    "valore di mercato del bene o del servizio",
    "redditi di lavoro dipendente",
    "imposta sostitutiva",
    "uffici del registro",
    "analisi dei rischi",
    "tabelle aci",
    "assegni alimentari",
    "uso promiscuo",
    "al piu tardi con la dichiarazione relativa",
    "anno successivo a quello di ricezione della fattura",
    "giorno successivo alla scadenza del termine",
    "dichiarazione relativa all anno in cui il diritto",
    "periodo d imposta successivo a quello",
    "d imposta successivo a quello in corso al",
    "periodi d imposta dal 2026 in avanti",
    "veicoli ordinati entro il",
    "datori di lavoro fino al",
    "legalmente ed effettivamente separato i figli i genitori",
]


def _senza_accenti(t: str) -> str:
    for a, b in (("à", "a"), ("è", "e"), ("é", "e"), ("ì", "i"), ("ò", "o"), ("ù", "u")):
        t = t.replace(a, b)
    return t


def _formula_nota(ngramma: str) -> bool:
    """True se, tolte le locuzioni tecniche, non resta quasi nulla di originale."""
    resto = _senza_accenti(ngramma)
    for f in FORMULE_TECNICHE:
        resto = resto.replace(f, " ")
    return len(resto.split()) <= 3


def _solo_citazione(ngramma: str) -> bool:
    """True se la sequenza e' sostanzialmente un riferimento normativo o una data."""
    tok = ngramma.split()
    tecnici = sum(1 for t in tok if t.isdigit() or t in TOKEN_NORMATIVI)
    return tecnici / len(tok) >= 0.5


def ngrammi(testo: str, n: int = 8) -> set[str]:
    parole = re.findall(r"[a-zàèéìòù0-9]+", testo.lower())
    return {" ".join(parole[i:i + n]) for i in range(max(0, len(parole) - n + 1))}


def verifica_originalita(fonte: str, riscritto: str, n: int = 8) -> list[str]:
    """Sequenze di n parole comuni a fonte e riscrittura, escluse le citazioni
    normative (che devono coincidere) e le date."""
    testo = re.sub(r"<[^>]+>", " ", riscritto)
    comuni = ngrammi(fonte, n) & ngrammi(testo, n)
    return sorted(
        g for g in comuni if not _solo_citazione(g) and not _formula_nota(g)
    )


# --------------------------------------------------------------------------

def carica_da_mail(uid: str) -> tuple[str, str, str]:
    """Ritorna (descrizione, path_pdf, data_iso) della circolare con quell'uid."""
    env = R.load_env()
    M = R.connect(env)
    typ, d = M.fetch(uid.encode(), "(RFC822)")
    msg = email.message_from_bytes(d[0][1])
    subject = R._dh(msg["Subject"])
    html = R.get_html(msg) or ""
    M.logout()

    pdf_url = None
    for h in re.findall(r'href="([^"]+)"', html):
        u = R._decode_tracklink(h)
        if u.lower().endswith(".pdf"):
            pdf_url = u
            break
    if not pdf_url:
        raise SystemExit(f"Nessun PDF nella mail {uid} ({subject}).")

    righe = R.html_to_lines(html)
    descrizione = ""
    for i, ln in enumerate(righe):
        if "gentile abbonato" in ln.lower():
            descrizione = " ".join(righe[i:i + 4])[:900]
            break
    descrizione = descrizione or subject

    from email.utils import parsedate_to_datetime
    data_iso = parsedate_to_datetime(msg["Date"]).date().isoformat()

    nome = pdf_url.rsplit("/", 1)[-1]
    path = R.download_pdf(pdf_url, os.path.join(OUTPUT_DIR, nome))
    return descrizione, path, data_iso


def main() -> int:
    ap = argparse.ArgumentParser(description="Circolare speciale Ratio -> approfondimento (Fable 5)")
    src = ap.add_mutually_exclusive_group(required=True)
    src.add_argument("--uid", help="uid IMAP della mail con la circolare")
    src.add_argument("--pdf", help="path di un PDF gia' scaricato")
    ap.add_argument("--list", action="store_true", help="elenca i blocchi e esci")
    ap.add_argument("--pick", help="numeri dei blocchi (1-based) separati da virgola, oppure 'all'")
    ap.add_argument("--data", help="data ISO da usare (default: data della mail / oggi)")
    ap.add_argument("--descrizione", default="", help="descrizione del provvedimento (se si parte dal PDF)")
    args = ap.parse_args()

    env = R.load_env()

    if args.uid:
        descrizione, pdf_path, data_iso = carica_da_mail(args.uid)
    else:
        pdf_path = args.pdf
        descrizione = args.descrizione
        data_iso = args.data or ""
    data_iso = args.data or data_iso
    if not data_iso:
        raise SystemExit("Manca la data: usa --data AAAA-MM-GG.")

    testo = R.pdf_to_text(pdf_path)
    blocchi = estrai_blocchi(testo)
    a_colonne = estrai_blocchi_colonne(testo)
    if len(a_colonne) > len(blocchi):
        blocchi = a_colonne
    if not blocchi:
        raise SystemExit(f"Nessun blocco riconosciuto in {pdf_path}.")

    provvedimento = ""
    m = re.search(r"D\.Lgs\.\s*[\d.]+\s*\d{4}\s*n\.\s*\d+", testo)
    if m:
        provvedimento = re.sub(r"\s+", " ", m.group(0))

    if args.list or not args.pick:
        print(f"{len(blocchi)} blocchi in {os.path.basename(pdf_path)}"
              + (f" — {provvedimento}" if provvedimento else ""))
        for i, b in enumerate(blocchi, 1):
            parte = f"[{b['parte'][:28]}] " if b["parte"] else ""
            print(f"  {i:2}. {parte}{b['titolo'][:60]} ({b['art']}) — {len(b['corpo'])} car.")
        if args.list:
            return 0
        print("\nScegli i blocchi con --pick 1,2,12 (oppure --pick all).")
        return 0

    if args.pick.strip().lower() == "all":
        scelti = list(range(1, len(blocchi) + 1))
    else:
        scelti = [int(x) for x in args.pick.split(",") if x.strip()]

    os.makedirs(BOZZE_DIR, exist_ok=True)
    sezioni: list[dict] = []
    tot_in = tot_out = 0
    warning: list[str] = []

    for n in scelti:
        b = blocchi[n - 1]
        print(f"[circolare] riscrivo #{n}: {b['titolo'][:60]}", flush=True)
        prompt = USER_TEMPLATE.format(
            provvedimento=provvedimento or "provvedimento in oggetto",
            titolo_blocco=f"{b['titolo']} ({b['art']})",
            testo_fonte=b["corpo"],
        )
        out, usage = call_model(env, prompt)
        tot_in += usage.get("input_tokens", 0)
        tot_out += usage.get("output_tokens", 0)

        comuni = verifica_originalita(b["corpo"], out.get("corpo_html", ""))
        if comuni:
            warning.append(f"#{n} {b['titolo'][:40]}: {len(comuni)} sequenze in comune -> {comuni[:2]}")

        sezioni.append({
            "id": out.get("id") or f"sez-{n}",
            "titolo": out.get("titolo", b["titolo"]),
            "corpoHtml": out.get("corpo_html", ""),
            "chiRiguarda": out.get("chi_riguarda", []),
            "decorrenza": out.get("decorrenza", "") or None,
            "riferimento": out.get("riferimento") or f"{b['art']}",
            "_blocco": n,
            "_adatto": out.get("adatto_al_sito", True),
        })

    elenco = "\n".join(f"- {s['titolo']}" for s in sezioni)
    sintesi, usage = call_model(
        env,
        SINTESI_TEMPLATE.format(
            provvedimento=provvedimento or os.path.basename(pdf_path),
            elenco=elenco,
            descrizione=descrizione or "(non disponibile)",
        ),
        max_tokens=2500,
    )
    tot_in += usage.get("input_tokens", 0)
    tot_out += usage.get("output_tokens", 0)

    bozza = {
        "slug": sintesi.get("slug", ""),
        "titolo": sintesi.get("titolo", ""),
        "sommario": sintesi.get("sommario", ""),
        "data": data_iso,
        "tipo": "circolare-speciale",
        "riferimento": provvedimento or None,
        "inVigoreDal": None,
        "destinatari": sintesi.get("destinatari", []),
        "intro": sintesi.get("intro_html", ""),
        "sezioni": sezioni,
        "fonteNormativa": provvedimento or None,
        "newsCollegate": [],
        "_stato": "DA_APPROVARE",
        "_pdf": os.path.basename(pdf_path),
        "_token": {"in": tot_in, "out": tot_out},
        "_warning_verbatim": warning,
    }
    dest = os.path.join(BOZZE_DIR, f"{data_iso}-{bozza['slug'] or 'circolare'}.json")
    with open(dest, "w") as f:
        json.dump(bozza, f, indent=1, ensure_ascii=False)

    print(f"\n✅ Bozza: {dest}")
    print(f"   sezioni: {len(sezioni)} · token in={tot_in} out={tot_out}")
    if warning:
        print("\n⚠️  Controllo anti-verbatim: sequenze in comune con la fonte")
        for w in warning:
            print("   -", w)
    else:
        print("   ✔ nessuna sequenza di 8+ parole in comune con la fonte")
    print("\nRivedi la bozza, poi: python3 publish_circolare.py " + dest)
    return 0


if __name__ == "__main__":
    sys.exit(main())
