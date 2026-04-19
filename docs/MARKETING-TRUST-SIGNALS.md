# Marketing Trust Signals — sito atparma.com

Ultimo aggiornamento: `2026-04-19`
Scopo: fonte unica per pagine sicurezza, trust badge, credenziali professionisti e micro-copy da usare nel sito marketing (`atparma-sito`) e opzionalmente sul portale (`clienti.atparma.com`).

Implementazione effettiva: sessione dedicata sul repo `atparma-sito`. Questo file è riferimento pronto-copia.

## 1. Team professionale di riferimento

Il memo sicurezza e le pagine prodotto devono citare i professionisti che firmano/avallano il contenuto. Questo è il primo trust signal (chi c'è dietro).

| Nome | Ambito | Ruolo | Albo/Ordine |
|---|---|---|---|
| **Pietro Franzosi** | Fiscale, contabile, dichiarativi | Commercialista | ODCEC Parma n. `XXXX` (da inserire) |
| **Aldo Ponzi** | Legal, contrattualistica, privacy | Avvocato | Ordine Avvocati Parma n. `XXXX` (da inserire) |
| **Alessandro Sicuri** | Gestione studio, relazioni cliente | Commercialista / titolare SRLS | ODCEC Parma n. `XXXX` (da inserire) |
| _(altri in arrivo)_ | — | — | — |

**Società:** A.T. Consulting Parma SRLS — P.IVA `XXX` (da inserire) — sede `XXX`.

Ogni prodotto/guida deve chiaramente indicare **chi l'ha scritta/revisionata**. Es.: "Guida Forfettario 2026 — a cura di Pietro Franzosi, dottore commercialista".

## 2. Memo sicurezza — pagina `/sicurezza` del sito

Contenuto markdown pronto per la pagina pubblica `atparma.com/sicurezza` (o equivalente `/privacy`/`/riservatezza`). Tutto verificabile legalmente.

```markdown
# Sicurezza e riservatezza dei tuoi dati

## Chi gestisce i tuoi dati

Il portale A.T. Consulting Parma è gestito da professionisti iscritti
all'Ordine dei Dottori Commercialisti e degli Esperti Contabili di
Parma (ODCEC) e all'Ordine degli Avvocati di Parma, con responsabilità
personali e deontologiche previste dai rispettivi codici professionali.

**Team:**
- Pietro Franzosi — commercialista ODCEC Parma (parte fiscale e contabile)
- Aldo Ponzi — avvocato Ordine Avvocati Parma (parte legale e privacy)
- Alessandro Sicuri — commercialista ODCEC Parma (gestione studio)

Per richieste relative ai tuoi dati personali: sicuri@atparma.com.

## Dove vivono i tuoi dati

Conserviamo dati anagrafici, fiscali e documentali esclusivamente
su infrastruttura con data center in Unione Europea:

- **Database PostgreSQL** (Neon, Francoforte, Germania) con cifratura AES-256 at-rest
- **Documenti PDF** (Cloudflare R2, data center EU) con cifratura AES-256 at-rest
- **Email transazionali** (Brevo, Francia) con DPA GDPR

**Nessun trasferimento sistematico** di dati verso Paesi extra-UE. Ogni
fornitore tecnologico che tratta dati per nostro conto è Responsabile
del trattamento ex art. 28 GDPR con contratto vigente.

## Protezione in transito

Tutte le comunicazioni tra te e il portale sono cifrate con **TLS 1.3**
(il lucchetto verde sul browser). I link di download dei documenti sono
pre-firmati e validi solo **15 minuti** — nessuno può accedere ai tuoi
file con un URL vecchio o rubato.

## Autenticazione

- **Password personali** hashate con bcrypt: nessuno, nemmeno lo studio,
  può leggerle in chiaro
- **Autenticazione a due fattori** (2FA) via codice email a ogni login
- **Audit log** di ogni operazione sensibile con data, ora, indirizzo IP

## Firma elettronica dei documenti

I mandati professionali e i preventivi vengono firmati tramite **Firma
Elettronica Avanzata (FEA) con OTP via email**, conforme a:

- Regolamento UE 910/2014 (eIDAS), art. 26
- Codice dell'Amministrazione Digitale, D.Lgs. 82/2005, art. 20 comma 1-bis

Ogni firma è tracciata con hash SHA-256 del documento, timestamp server,
indirizzo IP e user agent. Per ogni documento firmato c'è una pagina
pubblica di verifica autenticità.

## Isolamento multi-tenant

Il portale è progettato come multi-tenant: se in futuro assisteremo
altri studi sullo stesso sistema, ogni studio vede solo i dati dei
propri clienti. Ogni query al database filtra automaticamente per
identificativo studio, e ogni accesso a documenti verifica l'ownership
cliente-studio prima di fornire l'URL di download.

## Conservazione dei dati

Conserviamo i dati per i termini richiesti dalla normativa:

- **10 anni** per scritture contabili — art. 2220 Codice Civile
- **10 anni** per documentazione antiriciclaggio — art. 31 D.Lgs. 231/2007
- Periodi più lunghi solo se necessari per accertamento, esercizio o
  difesa di un diritto in sede giudiziaria

Trascorsi i termini, procediamo ad anonimizzazione o cancellazione
salvo ulteriori obblighi legali.

## I tuoi diritti (GDPR)

Puoi esercitare in qualsiasi momento i diritti previsti dagli artt.
15-22 GDPR scrivendo a sicuri@atparma.com:

- Accesso ai tuoi dati
- Rettifica di dati inesatti
- Cancellazione (nei limiti degli obblighi di conservazione)
- Limitazione del trattamento
- Portabilità dei dati
- Opposizione al trattamento

È inoltre riconosciuto il diritto di reclamo al **Garante per la
protezione dei dati personali** (www.garanteprivacy.it).

## Cosa NON facciamo (e perché)

Per trasparenza, chiariamo cosa il sistema **non è**:

- **Non è crittografia "end-to-end"** nel senso di Signal/WhatsApp:
  il server deve poter leggere i tuoi dati in chiaro per generare
  scadenze, calcolare IVA, parsare visure, produrre PDF. Questo vale
  per ogni software gestionale fiscale (FattureInCloud, TeamSystem,
  Zucchetti): end-to-end puro e gestionale fiscale sono tecnicamente
  incompatibili.

- **Non abbiamo certificazioni ISO 27001 o SOC 2**. Siamo uno studio
  professionale, non una banca. Applichiamo standard moderni di
  sicurezza (cifratura at-rest + in-transit, multi-factor, audit log,
  DPA con fornitori EU) coerenti con la categoria.

- **Non facciamo marketing/profilazione** dei tuoi dati. Li trattiamo
  solo per eseguire il mandato professionale e assolvere gli obblighi
  di legge (fiscali, antiriciclaggio).

## Aggiornamenti di questa informativa

Questo documento può essere aggiornato nel tempo per riflettere
evoluzioni del sistema o della normativa. Versione attuale:
`privacy-v1-2026-04-18-draft` (in revisione legale).
```

## 3. Componente `TrustBadges` — badge sicurezza nelle pagine prodotto

Componente riusabile per `atparma-sito`, da incollare nelle pagine prodotto o in fondo al fold. Versione compatta (strip) per le card prodotto, versione estesa (grid) per pagine dedicate.

```tsx
// app/components/TrustBadges.tsx

interface Item {
  icon: string;
  title: string;
  subtitle: string;
}

const ITEMS: Item[] = [
  { icon: "🇪🇺", title: "Dati in UE",         subtitle: "Neon + R2 Francoforte" },
  { icon: "🔒", title: "TLS 1.3 + AES-256",    subtitle: "Cifratura moderna" },
  { icon: "✍",  title: "Firma eIDAS",          subtitle: "Art. 26 Reg. UE 910/2014" },
  { icon: "📜", title: "GDPR compliant",       subtitle: "Conservazione 10 anni" },
  { icon: "💬", title: "Supporto umano",       subtitle: "Email in 24h lavorative" },
  { icon: "↩",  title: "Rimborso 14 giorni",  subtitle: "Soddisfatti o rimborsati" },
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-8">
      {ITEMS.map((it) => (
        <div key={it.title} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
          <span className="text-2xl" aria-hidden>{it.icon}</span>
          <div>
            <p className="font-semibold text-sm">{it.title}</p>
            <p className="text-xs text-muted-foreground">{it.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TrustStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
      <span>🇪🇺 Dati UE</span>
      <span>·</span>
      <span>🔒 Pagamento sicuro</span>
      <span>·</span>
      <span>💬 Supporto 24h</span>
      <span>·</span>
      <span>↩ 14gg rimborso</span>
      <span>·</span>
      <a href="/sicurezza" className="underline hover:text-foreground">
        Come proteggiamo i tuoi dati →
      </a>
    </div>
  );
}
```

## 4. Box "Credenziali prodotto" — pattern alta conversione

Blocco standard sopra il CTA acquisto nella pagina prodotto (es. `atparma.com/guide/forfettario-2026`).

```tsx
// app/components/ProductCredentials.tsx

interface Props {
  productName: string;
  price: number;
  pages: number;
  lastRevision: string; // ISO date
  author: string;
  authorTitle: string;
  authorOrderNumber: string;
  includesExcel?: boolean;
  previewUrl?: string;
  buyUrl: string;
}

export function ProductCredentials(props: Props) {
  return (
    <div className="rounded-lg border-2 bg-card p-6 space-y-4 max-w-2xl mx-auto">
      <header>
        <h2 className="text-2xl font-bold">{props.productName} — €{props.price}</h2>
      </header>

      <ul className="space-y-1 text-sm">
        <li>📄 {props.pages} pagine PDF{props.includesExcel && " + Excel calcolatore"}</li>
        <li>🔄 Aggiornamenti normativi gratuiti per 12 mesi</li>
        <li>📅 Ultima revisione: {new Date(props.lastRevision).toLocaleDateString("it-IT")}</li>
      </ul>

      <div className="border-t pt-3">
        <p className="text-sm">Scritto da <strong>{props.author}</strong></p>
        <p className="text-xs text-muted-foreground">
          {props.authorTitle} · ODCEC Parma n. {props.authorOrderNumber}
        </p>
        <p className="text-xs text-muted-foreground">
          A.T. Consulting Parma SRLS — P.IVA XXX
        </p>
      </div>

      <ul className="space-y-1 text-sm border-t pt-3">
        <li>✓ Soddisfatti o rimborsati entro 14 giorni</li>
        <li>✓ Supporto email in 24h lavorative</li>
        <li>✓ Pagamento sicuro Stripe/PayPal</li>
      </ul>

      <div className="flex gap-3 pt-2">
        {props.previewUrl && (
          <a
            href={props.previewUrl}
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            📄 Anteprima gratis (3 pagine)
          </a>
        )}
        <a
          href={props.buyUrl}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Acquista ora €{props.price}
        </a>
      </div>

      <div className="pt-3 border-t">
        <TrustStrip />
      </div>
    </div>
  );
}
```

Uso tipico:

```tsx
<ProductCredentials
  productName="Guida Forfettario 2026"
  price={27}
  pages={52}
  lastRevision="2026-04-15"
  author="Pietro Franzosi"
  authorTitle="Dottore commercialista"
  authorOrderNumber="XXXX"
  includesExcel={true}
  previewUrl="/guide/forfettario-2026/anteprima"
  buyUrl="/acquista/forfettario-2026"
/>
```

## 5. Cosa manca per usare questi signal onestamente

| Claim | Stato | Serve |
|---|---|---|
| "Dati in UE" | ✅ Vero | niente |
| "TLS + AES-256" | ✅ Vero | niente |
| "Firma eIDAS" | ✅ Vero | niente |
| "GDPR compliant" | ✅ Sostanzialmente vero | Wave 3 chiude il cerchio con tracciamento Consent |
| "Supporto 24h lavorative" | ⚠️ Commerciale | Alessandro/Sara/Susanna devono impegnarsi a rispondere |
| "14gg rimborso" | ⚠️ Commerciale | Policy refund Stripe da configurare |
| "Aggiornamenti 12 mesi" | ⚠️ Commerciale | Pietro Franzosi deve impegnarsi a mantenerla |
| "Iscritti ODCEC" | ✅ Vero | recuperare numeri albo Pietro/Aldo/Alessandro |
| Testimonianze | ⚠️ Da raccogliere | 3-5 clienti consenzienti |

## 6. Next steps (BACKLOG `atparma-sito`, quando ci arriveremo)

1. **M.1** Implementare `TrustBadges` + `TrustStrip` come componenti React nel repo `atparma-sito` — ~2h
2. **M.2** Pagina `/sicurezza` con contenuto §2 di questo documento — ~2h
3. **M.3** Componente `ProductCredentials` riusato in ogni landing prodotto — ~1h
4. **M.4** Raccogliere numeri ordine Pietro Franzosi + Aldo Ponzi + Alessandro Sicuri — mezz'ora offline
5. **M.5** Sezione testimonianze con 3-5 clienti reali (richiede autorizzazione scritta) — P2
6. **M.6** Link footer globale a `/sicurezza` + footer portale — 10 min

## 7. Avvertenza legale

Prima di andare online con la pagina `/sicurezza`, **far revisionare ad Aldo Ponzi** il testo (è avvocato del team, materia sua). In particolare:

- Sezione "Cosa NON facciamo" — rischio minore ma meglio controllare le formulazioni
- Claim "commercialista abilitato" — verificare le formule corrette per ODCEC
- Promesse commerciali ("14gg rimborso", "supporto 24h") — devono essere coerenti con quello che scrivete nelle condizioni generali di vendita

Nessun claim di questo documento promette certificazioni che non abbiamo (ISO/SOC/bank-grade/end-to-end) — quindi il rischio di rivendicazione ingannevole è basso, ma rivedere sempre.

## 8. Riferimenti incrociati

- `PERIMETRO-COMPLIANCE.md` — gap compliance interno (Wave 3/4 chiudono i consensi tracciati)
- `legal-notes.md` — dettaglio tecnico FEA eIDAS e marca temporale
- `src/lib/privacy-informativa.ts` — testo art. 13 GDPR ufficiale del portale
- `BACKLOG.md` Go-Live Checklist — gate pre-invito clienti
