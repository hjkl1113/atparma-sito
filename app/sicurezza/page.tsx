import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TrustBadges } from "@/components/trust-badges";

export const metadata: Metadata = {
  title: "Sicurezza e riservatezza dei dati — A.T. Consulting Parma",
  description:
    "Come proteggiamo i tuoi dati personali e fiscali: infrastruttura UE, cifratura AES-256, TLS 1.3, firma eIDAS, conservazione GDPR. A.T. Consulting Parma.",
  alternates: { canonical: "/sicurezza" },
  openGraph: {
    title: "Come proteggiamo i tuoi dati — A.T. Consulting Parma",
    description:
      "Infrastruttura UE, cifratura moderna, firma eIDAS, conservazione conforme a GDPR e normativa fiscale.",
    url: "https://www.atparma.com/sicurezza",
    type: "website",
  },
};

export default function SicurezzaPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-32 pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            Sicurezza e riservatezza
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)]">
            Come proteggiamo i tuoi dati
          </h1>
          <p className="text-zinc-600 leading-relaxed mb-12 text-lg">
            Gestiamo dati personali, fiscali e contabili. La tua fiducia si
            basa su due pilastri: i professionisti che firmano il lavoro e
            l&apos;infrastruttura tecnica che conserva i documenti. Questa
            pagina descrive entrambi, senza marketing e senza promesse
            impossibili.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-heading)]">
              Chi gestisce i tuoi dati
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Il servizio e il portale A.T. Consulting Parma sono gestiti da
              dottori commercialisti e revisori legali iscritti agli Albi di
              Parma e Brescia (sezione A), con responsabilità personali e
              deontologiche previste dal Codice professionale e dal Codice
              Deontologico dei dottori commercialisti.
            </p>
            <ul className="space-y-2 text-zinc-700">
              <li>
                <strong>Pietro Franzosi</strong> — dottore commercialista, Albo
                di Parma (sez A). Responsabile della parte fiscale, contabile
                e dichiarativa.
              </li>
              <li>
                <strong>Aldo Ponzi</strong> — dottore commercialista, Albo di
                Brescia (sez A). Socio di A.T. Consulting Parma.
              </li>
            </ul>
            <p className="text-zinc-600 text-sm mt-4">
              Per richieste relative ai tuoi dati personali:{" "}
              <a
                href="mailto:segreteria@atparma.com"
                className="text-[var(--color-accent)] hover:underline"
              >
                segreteria@atparma.com
              </a>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-heading)]">
              Dove vivono i tuoi dati
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Dati anagrafici, fiscali e documentali vengono conservati
              esclusivamente su infrastruttura con data center in Unione
              Europea:
            </p>
            <ul className="space-y-2 text-zinc-700">
              <li>
                <strong>Database PostgreSQL</strong> (Neon — Francoforte,
                Germania) con cifratura AES-256 a riposo
              </li>
              <li>
                <strong>Documenti PDF</strong> (Cloudflare R2 — data center
                UE) con cifratura AES-256 a riposo
              </li>
              <li>
                <strong>Email transazionali</strong> (Brevo — Francia) con
                accordo DPA GDPR
              </li>
            </ul>
            <p className="text-zinc-700 leading-relaxed mt-4">
              Nessun trasferimento sistematico di dati verso Paesi extra-UE.
              Ogni fornitore tecnologico che tratta dati per nostro conto è
              Responsabile del trattamento ex art. 28 GDPR con contratto
              vigente.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-heading)]">
              Protezione in transito
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              Tutte le comunicazioni tra te e il portale sono cifrate con
              <strong> TLS 1.3</strong> (il lucchetto verde sul browser). I
              link di download dei documenti sono pre-firmati e validi solo
              per <strong>15 minuti</strong>: nessuno può accedere ai tuoi
              file con un URL vecchio o rubato.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-heading)]">
              Autenticazione
            </h2>
            <ul className="space-y-2 text-zinc-700">
              <li>
                <strong>Password personali</strong> hashate con bcrypt:
                nessuno, nemmeno lo studio, può leggerle in chiaro.
              </li>
              <li>
                <strong>Autenticazione a due fattori</strong> (2FA) via codice
                email a ogni login.
              </li>
              <li>
                <strong>Audit log</strong> di ogni operazione sensibile con
                data, ora e indirizzo IP.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-heading)]">
              Firma elettronica dei documenti
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              I mandati professionali e i preventivi vengono firmati tramite
              <strong> Firma Elettronica Avanzata (FEA) con OTP via email</strong>,
              conforme a:
            </p>
            <ul className="space-y-2 text-zinc-700">
              <li>Regolamento UE 910/2014 (eIDAS), art. 26</li>
              <li>
                Codice dell&apos;Amministrazione Digitale, D.Lgs. 82/2005, art.
                20 comma 1-bis
              </li>
            </ul>
            <p className="text-zinc-700 leading-relaxed mt-4">
              Ogni firma è tracciata con hash SHA-256 del documento, timestamp
              server, indirizzo IP e user agent. Per ogni documento firmato
              esiste una pagina di verifica autenticità.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-heading)]">
              Conservazione dei dati
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Conserviamo i dati per i termini richiesti dalla normativa:
            </p>
            <ul className="space-y-2 text-zinc-700">
              <li>
                <strong>10 anni</strong> per scritture contabili — art. 2220
                Codice Civile
              </li>
              <li>
                <strong>10 anni</strong> per documentazione antiriciclaggio —
                art. 31 D.Lgs. 231/2007
              </li>
              <li>
                Periodi più lunghi solo se necessari per accertamento,
                esercizio o difesa di un diritto in sede giudiziaria
              </li>
            </ul>
            <p className="text-zinc-700 leading-relaxed mt-4">
              Trascorsi i termini procediamo ad anonimizzazione o
              cancellazione, salvo ulteriori obblighi legali.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-heading)]">
              I tuoi diritti (GDPR)
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Puoi esercitare in qualsiasi momento i diritti previsti dagli
              artt. 15-22 GDPR scrivendo a{" "}
              <a
                href="mailto:segreteria@atparma.com"
                className="text-[var(--color-accent)] hover:underline"
              >
                segreteria@atparma.com
              </a>
              :
            </p>
            <ul className="space-y-1 text-zinc-700">
              <li>Accesso ai tuoi dati</li>
              <li>Rettifica di dati inesatti</li>
              <li>Cancellazione (nei limiti degli obblighi di conservazione)</li>
              <li>Limitazione del trattamento</li>
              <li>Portabilità dei dati</li>
              <li>Opposizione al trattamento</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed mt-4">
              È inoltre riconosciuto il diritto di reclamo al{" "}
              <strong>Garante per la protezione dei dati personali</strong> (
              <a
                href="https://www.garanteprivacy.it"
                className="text-[var(--color-accent)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                garanteprivacy.it
              </a>
              ).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-heading)]">
              Cosa NON facciamo (e perché)
            </h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Per trasparenza chiariamo cosa il sistema <strong>non è</strong>:
            </p>
            <ul className="space-y-3 text-zinc-700">
              <li>
                <strong>Non è crittografia end-to-end</strong> nel senso di
                Signal o WhatsApp: il server deve poter leggere i tuoi dati in
                chiaro per generare scadenze, calcolare IVA, parsare visure,
                produrre PDF. Questo vale per ogni software gestionale
                fiscale (FattureInCloud, TeamSystem, Zucchetti): end-to-end
                puro e gestionale fiscale sono tecnicamente incompatibili.
              </li>
              <li>
                <strong>Non abbiamo certificazioni ISO 27001 o SOC 2</strong>.
                Siamo uno studio professionale, non una banca. Applichiamo
                standard moderni di sicurezza (cifratura a riposo e in
                transito, autenticazione multi-fattore, audit log, accordi
                DPA con fornitori UE) coerenti con la categoria.
              </li>
              <li>
                <strong>Non facciamo marketing o profilazione</strong> dei
                tuoi dati. Li trattiamo solo per eseguire il mandato
                professionale e assolvere gli obblighi di legge (fiscali,
                antiriciclaggio).
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-heading)]">
              In sintesi
            </h2>
            <TrustBadges />
          </section>

          <section className="mb-12 bg-[var(--color-surface)] rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-3 font-[family-name:var(--font-heading)]">
              Hai domande sulla gestione dei tuoi dati?
            </h2>
            <p className="text-zinc-600 text-sm mb-6 leading-relaxed">
              Scrivici: rispondiamo entro 24 ore lavorative con riferimento
              al professionista di turno.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:segreteria@atparma.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-semibold"
              >
                segreteria@atparma.com
              </a>
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-300 text-zinc-700 rounded-lg hover:bg-white transition-colors text-sm font-medium"
              >
                Leggi la Privacy Policy
              </Link>
            </div>
          </section>

          <p className="text-xs text-zinc-400">
            Ultimo aggiornamento: aprile 2026. Questo documento può essere
            aggiornato nel tempo per riflettere evoluzioni del sistema o
            della normativa.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
