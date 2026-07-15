#!/usr/bin/env python3
"""Libreria condivisa per il motore di lettura newsletter Ratio.

Legge la casella sicuri@atparma.com via IMAP (sola lettura) e fornisce:
- caricamento credenziali (env vars / file .env con fallback)
- connessione IMAP
- classificazione delle email Ratio (quotidiana / notiziario / aggiornamento / circolare / rumore)
- parsing dell'Informazione Quotidiana (indice argomenti + link PDF)

NB: legge SEMPRE in readonly. Non modifica, non cancella, non sposta nulla.
"""
from __future__ import annotations
import email
import html as htmllib
import imaplib
import os
import re
import subprocess
import urllib.request
from dataclasses import dataclass, field
from email.header import decode_header, make_header

# Percorsi .env consultati in ordine (l'ultimo vince sui precedenti,
# os.environ vince su tutto). Il fallback ~/formatemp-verifiche/.env
# contiene gia' STUDIO_MAIL_USER / STUDIO_MAIL_PASS / IMAP_HOST / IMAP_PORT.
ENV_PATHS = [
    os.path.expanduser("~/formatemp-verifiche/.env"),
    os.path.join(os.path.dirname(__file__), ".env"),
]

# Mittenti ufficiali Ratio / Centro Studi Castelli
RATIO_SENDERS = ["sistemaratio.it", "gruppocastelli.com", "ratio.it"]


def load_env() -> dict:
    """Carica le credenziali: file .env (in ordine) sovrascritti da os.environ."""
    env: dict[str, str] = {}
    for path in ENV_PATHS:
        if not os.path.exists(path):
            continue
        with open(path) as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip().strip('"').strip("'")
    for k in ("IMAP_HOST", "IMAP_PORT", "STUDIO_MAIL_USER", "STUDIO_MAIL_PASS"):
        if os.environ.get(k):
            env[k] = os.environ[k]
    return env


def connect(env: dict) -> imaplib.IMAP4_SSL:
    """Apre una connessione IMAP SSL in sola lettura sull'INBOX."""
    host = env.get("IMAP_HOST", "imap.atparma.com")
    port = int(env.get("IMAP_PORT", "993"))
    user = env.get("STUDIO_MAIL_USER")
    passw = env.get("STUDIO_MAIL_PASS")
    if not user or not passw:
        raise SystemExit(
            "Credenziali mancanti. Servono STUDIO_MAIL_USER e STUDIO_MAIL_PASS "
            "in una delle .env consultate (%s) o come variabili d'ambiente."
            % ", ".join(ENV_PATHS)
        )
    M = imaplib.IMAP4_SSL(host, port)
    M.login(user, passw)
    M.select("INBOX", readonly=True)
    return M


def _dh(s: str | None) -> str:
    """Decodifica header MIME (subject/from) in stringa leggibile."""
    try:
        return str(make_header(decode_header(s or "")))
    except Exception:
        return s or ""


def _decode_tracklink(href: str) -> str:
    """I link Ratio passano da track.ratio.it con l'URL reale in base64 nel param l=.
    Se presente lo decodifico, altrimenti restituisco l'href originale."""
    import base64
    import urllib.parse as up
    try:
        qs = up.parse_qs(up.urlparse(href).query)
        raw = qs.get("l", [None])[0]
        if raw:
            pad = "=" * (-len(raw) % 4)
            dec = base64.b64decode(raw + pad).decode("utf-8", errors="replace")
            if dec.startswith("http"):
                return dec
    except Exception:
        pass
    return href


def html_to_lines(html: str) -> list[str]:
    """Converte HTML in righe di testo, preservando i confini di blocco."""
    html = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", html, flags=re.S | re.I)
    txt = re.sub(r"(?i)</(p|td|tr|div|table|h[1-6]|li)>", "\n", html)
    txt = re.sub(r"(?i)<br\s*/?>", "\n", txt)
    txt = re.sub(r"<[^>]+>", "", txt)
    txt = htmllib.unescape(txt)
    return [re.sub(r"\s+", " ", l).strip() for l in txt.split("\n") if l.strip()]


def get_html(msg) -> str | None:
    """Estrae la parte text/html dal messaggio."""
    for part in msg.walk():
        if part.get_content_type() == "text/html":
            payload = part.get_payload(decode=True)
            if payload:
                return payload.decode(part.get_content_charset() or "utf-8", errors="replace")
    return None


def classify(subject: str, sender: str) -> str:
    """Classifica una email Ratio in una categoria operativa."""
    s = subject.lower()
    # Promozioni / eventi: rumore da filtrare
    if any(k in s for k in ("webinar", "videofisco", "ebook", "in diretta", "guarda gratuitamente",
                            "scarica gratuitamente", "app", "weekend", "offerta", "sconto",
                            "iscriviti", "disponibile on")):
        return "rumore"
    if "informazione quotidiana" in s:
        return "quotidiana"
    if "notiziario" in s:
        return "notiziario"
    if "aggiornamento mensile" in s or ("aggiornamento" in s and "mensile" in s):
        return "aggiornamento"
    if "circolare" in s or "speciale" in s:
        return "circolare"
    # Circolari tematiche senza la parola "circolare" ma da mittente ratio "editoriale"
    if "sistemaratio.it" in sender.lower():
        return "circolare"
    return "altro"


@dataclass
class RatioEmail:
    msg_id: str
    date: str
    sender: str
    subject: str
    categoria: str


def list_emails(M: imaplib.IMAP4_SSL, limit: int | None = None) -> list[RatioEmail]:
    """Elenca le email dai mittenti Ratio, ordinate per msg_id crescente."""
    ids: set[bytes] = set()
    for s in RATIO_SENDERS:
        typ, data = M.search(None, "FROM", '"%s"' % s)
        if typ == "OK" and data[0]:
            ids.update(data[0].split())
    ordered = sorted(ids, key=lambda x: int(x))
    if limit:
        ordered = ordered[-limit:]
    out: list[RatioEmail] = []
    for i in ordered:
        typ, d = M.fetch(i, "(BODY.PEEK[HEADER.FIELDS (FROM SUBJECT DATE)])")
        if typ != "OK":
            continue
        hdr = email.message_from_bytes(d[0][1])
        subj = _dh(hdr.get("Subject"))
        sender = _dh(hdr.get("From"))
        out.append(RatioEmail(
            msg_id=i.decode(),
            date=_dh(hdr.get("Date")),
            sender=sender,
            subject=subj,
            categoria=classify(subj, sender),
        ))
    return out


@dataclass
class Quotidiana:
    msg_id: str
    numero: str | None
    data: str | None            # come compare nel subject (gg/mm/aaaa)
    subject: str
    date_header: str
    argomenti: list[str] = field(default_factory=list)
    pdf_link: str | None = None
    is_settimanale: bool = False


def parse_quotidiana(M: imaplib.IMAP4_SSL, msg_id: str) -> Quotidiana:
    """Estrae numero, data, indice argomenti e link PDF da una Informazione Quotidiana."""
    typ, d = M.fetch(msg_id.encode(), "(BODY.PEEK[])")
    if typ != "OK":
        raise SystemExit(f"Impossibile leggere il messaggio {msg_id}")
    msg = email.message_from_bytes(d[0][1])
    subject = _dh(msg.get("Subject"))
    date_header = _dh(msg.get("Date"))

    numero = None
    m = re.search(r"quotidiana\s+(\d+)", subject, re.I)
    if m:
        numero = m.group(1)
    data = None
    m = re.search(r"del\s+(\d{1,2}[./]\d{1,2}[./]\d{4})", subject, re.I)
    if m:
        data = m.group(1).replace(".", "/")

    q = Quotidiana(
        msg_id=msg_id, numero=numero, data=data,
        subject=subject, date_header=date_header,
        is_settimanale="sintesi operativa" in subject.lower(),
    )

    html = get_html(msg)
    if not html:
        return q

    lines = html_to_lines(html)
    # Link PDF: l'ancora ("Clicca qui") precede il testo "scaricare la versione PDF",
    # che sta FUORI dal tag <a>. Catturo l'href dell'ancora seguita da quel testo.
    m = re.search(
        r'<a[^>]+href="([^"]+)"[^>]*>[^<]*</a>[^<]*(?:per\s+)?scaricare\s+la\s+versione\s+pdf',
        html, re.S | re.I,
    )
    if m:
        q.pdf_link = _decode_tracklink(m.group(1))

    # Indice argomenti: righe che iniziano con "- " tra "argomenti trattati" e il footer
    start = next((i for i, l in enumerate(lines) if "argomenti trattati" in l.lower()), None)
    end = next((i for i, l in enumerate(lines) if "Centro Studi Castelli" in l), len(lines))
    scan = lines[(start + 1 if start is not None else 0):end]
    for l in scan:
        if l.startswith("-"):
            item = l.lstrip("-").strip()
            if len(item) >= 4:
                q.argomenti.append(item)
    return q


# ---------------------------------------------------------------------------
# Estrazione del testo INTEGRALE degli articoli dal PDF della quotidiana.
# Serve alla riscrittura (L2): senza il testo reale l'AI allucina i contenuti
# e i riferimenti normativi. Il PDF Ratio si scarica senza login dal pdf_link.
# Il testo verbatim resta SOLO in locale (output/ è gitignorato): copyright-safe.
# ---------------------------------------------------------------------------

_NOISE_RE = re.compile(
    r"(ISSN\s|Riproduzione vietata|^\s*Pagina\s+\d+\s*$|Centro Studi Castelli)",
    re.I,
)

# Marcatori del masthead/footer dell'ultima pagina: da lì in poi non è più
# contenuto redazionale (crediti, indirizzo, privacy). Taglia la sezione finale.
_FOOTER_RE = re.compile(
    r"(SITO WEB:|E-MAIL:|DIRETTORE RESP|VICE DIRETTORE|COORD\.\s|COMITATO DI ESPERTI|"
    r"SERVIZIO ABBONAMENTI|DIFFUSIONE:|Informativa privacy|Via Bonfiglio|"
    r"P\.IVA e Reg|Capitale sociale|titolare del trattamento)",
    re.I,
)


def download_pdf(url: str, dest: str) -> str:
    """Scarica il PDF completo della quotidiana (senza login). Ritorna il path."""
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    with open(dest, "wb") as f:
        f.write(data)
    return dest


def pdf_to_text(pdf_path: str) -> str:
    """Estrae il testo dal PDF con `pdftotext -layout` (preserva la struttura)."""
    txt_path = pdf_path + ".txt"
    subprocess.run(
        ["pdftotext", "-layout", pdf_path, txt_path],
        check=True, capture_output=True,
    )
    with open(txt_path, encoding="utf-8", errors="replace") as f:
        return f.read()


def _norm_title(s: str) -> str:
    """Normalizza per il matching titolo↔intestazione: apostrofi, spazi, minuscolo."""
    s = (s or "").replace("’", "'").replace("‘", "'").replace("`", "'")
    return re.sub(r"\s+", " ", s).strip().lower()


def split_articles(full_text: str, argomenti: list[str]) -> dict[str, str]:
    """Divide il testo del PDF in sezioni {titolo_argomento: testo_articolo}.

    Nel corpo ogni articolo inizia con una riga 'titolo .... Fonte gg.mm.aaaa p. N'.
    Usa i titoli dell'indice (argomenti) come punti di taglio; rimuove intestazioni
    di categoria (Imposte e tasse, Diritto del lavoro, ...) e righe di rumore.
    Ritorna solo gli argomenti effettivamente localizzati nel testo.
    """
    lines = full_text.splitlines()
    # Il corpo inizia dopo la prima "Pagina 1" (fine dell'indice di pagina 1).
    body_start = 0
    for i, l in enumerate(lines):
        if re.match(r"\s*Pagina\s+1\s*$", l):
            body_start = i + 1
            break
    index_region = lines[:body_start]
    body = lines[body_start:]

    norm_titles = [_norm_title(a) for a in argomenti]
    title_set = set(norm_titles)

    # Categorie = righe brevi dell'indice che non sono argomenti né rumore né testata.
    categorie = set()
    for l in index_region:
        nl = _norm_title(l)
        if (nl and nl not in title_set and not _NOISE_RE.search(l)
                and "informazione quotidiana" not in nl and len(nl.split()) <= 5):
            categorie.add(nl)

    # Riga d'inizio di ogni argomento nel corpo. Gestisce due casi:
    #  (a) intestazione su una riga:   riga inizia col titolo intero;
    #  (b) intestazione andata a capo:  la parte a sinistra della fonte (split su
    #      2+ spazi) è un PREFISSO del titolo (il resto prosegue sulla riga dopo).
    positions: list[tuple[int, int]] = []
    used: set[int] = set()
    for ai, nt in enumerate(norm_titles):
        for li, l in enumerate(body):
            if li in used:
                continue
            line_norm = _norm_title(l)
            left_norm = _norm_title(re.split(r"\s{2,}", l.strip())[0])
            if line_norm.startswith(nt) or (
                len(left_norm.split()) >= 4 and nt.startswith(left_norm)
            ):
                positions.append((li, ai))
                used.add(li)
                break
    positions.sort()

    sections: dict[str, str] = {}
    for k, (li, ai) in enumerate(positions):
        end = positions[k + 1][0] if k + 1 < len(positions) else len(body)
        cleaned = []
        for cl in body[li:end]:
            if _FOOTER_RE.search(cl):
                break  # da qui è masthead/footer: fine del contenuto redazionale
            if _NOISE_RE.search(cl) or _norm_title(cl) in categorie or not cl.strip():
                continue
            cleaned.append(cl.strip())
        sections[argomenti[ai]] = "\n".join(cleaned).strip()
    return sections


def fetch_article_texts(pdf_link: str | None, argomenti: list[str],
                        workdir: str, numero: str | None = None) -> dict[str, str]:
    """Scarica il PDF della quotidiana ed estrae il testo reale per ogni argomento.

    Ritorna {titolo: testo}. Dizionario vuoto se manca il pdf_link o l'estrazione
    fallisce: in tal caso il chiamante NON deve riscrivere (si allucinerebbe).
    Parametri primitivi così è riusabile sia da daily.py (ha l'oggetto Quotidiana)
    sia da rewrite.py (ha solo il digest JSON).
    """
    if not pdf_link:
        return {}
    try:
        os.makedirs(workdir, exist_ok=True)
        pdf_path = os.path.join(workdir, f"quotidiana-{numero or 'x'}.pdf")
        download_pdf(pdf_link, pdf_path)
        return split_articles(pdf_to_text(pdf_path), argomenti)
    except Exception:
        return {}
