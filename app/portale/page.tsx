import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PortaleSection } from "@/components/portale-section";

export const metadata: Metadata = {
  title: "Il portale clienti A.T. Consulting Parma — come funziona",
  description:
    "Spazio professionale online incluso in ogni servizio. Documenti, scadenzario, messaggi, archivio 10 anni. Registrazione gratuita, pagamento solo dopo la firma del mandato. Niente software da installare.",
  alternates: {
    canonical: "/portale",
  },
  openGraph: {
    title: "Il portale clienti A.T. Consulting Parma",
    description:
      "Documenti, scadenze, messaggi e archivio in un unico posto. Funziona da qualsiasi browser, registrazione in 2 minuti, pagamento solo dopo la firma del mandato.",
    type: "website",
    images: [{ url: "/images/parma-duomo-aerial.jpg", width: 1200, height: 630, alt: "Portale clienti A.T. Consulting Parma" }],
  },
};

const STEPS = [
  {
    n: "01",
    title: "Registrati gratis",
    body: "Bastano nome, cognome, email e una password. Niente carta di credito, niente impegni: la registrazione è gratuita e puoi farla anche solo per dare un&apos;occhiata.",
  },
  {
    n: "02",
    title: "Scegli il servizio",
    body: "Dalla dashboard selezioni il servizio che ti interessa: 730, apertura Partita IVA, contabilità, dichiarazione redditi. Se hai dubbi, prenoti una videocall gratuita con un dottore commercialista.",
  },
  {
    n: "03",
    title: "Firma il mandato digitalmente",
    body: "Quando sei pronto, firmi il mandato professionale dal portale con OTP via email. Niente carta, niente fax, niente file in studio. Solo a quel punto procedi col pagamento.",
  },
  {
    n: "04",
    title: "La pratica parte",
    body: "Entro 5 giorni lavorativi il tuo commercialista apre la pratica. Carichi i documenti dal portale, segui lo stato in tempo reale, ricevi notifiche per ogni aggiornamento.",
  },
] as const;

const FAQS = [
  {
    q: "Devo installare qualcosa?",
    a: "No. Il portale funziona da qualsiasi browser su computer, tablet e smartphone. Niente app, niente software, niente aggiornamenti da gestire.",
  },
  {
    q: "I miei dati sono al sicuro?",
    a: "Sì. Documenti cifrati in transito (HTTPS) e a riposo (storage cifrato), accesso protetto da autenticazione a due fattori opzionale, log di tutti gli accessi e delle operazioni sensibili. Conserviamo i documenti per 10 anni come previsto dalla legge.",
  },
  {
    q: "Devo pagare per registrarmi?",
    a: "No. La registrazione è gratuita e senza impegno. Il pagamento avviene solo dopo che hai firmato il mandato professionale per un servizio specifico, e solo per il servizio che hai scelto.",
  },
  {
    q: "Posso provare prima di acquistare?",
    a: "Sì. Dopo la registrazione puoi prenotare una videocall gratuita con un dottore commercialista per capire se il servizio fa al caso tuo. Nessun obbligo di acquisto.",
  },
  {
    q: "Chi mi seguirà davvero?",
    a: "Un dottore commercialista iscritto all&apos;Albo, non un consulente generico. Lo studio è di Parma e segue clienti in tutta Italia: il rapporto è personale, anche quando è online.",
  },
  {
    q: "Posso disdire quando voglio?",
    a: "Sì. Il mandato annuale prevede recesso con 60 giorni di preavviso via PEC. Niente penali nascoste, niente vincoli pluriennali obbligati.",
  },
  {
    q: "Cosa succede ai miei documenti se cambio commercialista?",
    a: "Sono e restano tuoi. Te li forniamo tutti in formato digitale al momento della disdetta, archivio completo incluso. Non blocchiamo nulla.",
  },
] as const;

export default function PortalePage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            Portale clienti
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Il tuo spazio professionale, sempre disponibile
          </h1>
          <p className="text-zinc-600 leading-relaxed text-lg max-w-2xl mx-auto mb-8">
            Documenti, scadenze, messaggi e archivio in un unico posto. Niente software da installare, niente file in studio, niente email perse. Registrazione gratuita, pagamento solo dopo la firma del mandato.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://clienti.atparma.com/register"
              className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium"
            >
              Registrati gratis
            </a>
            <a
              href="https://clienti.atparma.com"
              className="inline-block px-6 py-3 border border-zinc-200 text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium"
            >
              Sono già cliente, accedi
            </a>
          </div>
          <p className="text-xs text-zinc-500 mt-4">
            Bastano 2 minuti. Niente carta richiesta in fase di registrazione.
          </p>
        </section>

        {/* Sezione cosa è (componente riusabile, variante full) */}
        <PortaleSection variant="full" />

        {/* Come funziona */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3 text-center">
              Come funziona
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4 font-[family-name:var(--font-heading)]">
              Dalla registrazione al lavoro vero in 4 passi
            </h2>
            <p className="text-zinc-600 leading-relaxed text-center max-w-2xl mx-auto mb-16">
              Ogni passo è gratuito fino al momento in cui firmi il mandato per il servizio che hai scelto. Niente sorprese, niente costi anticipati.
            </p>
            <ol className="space-y-8">
              {STEPS.map((s) => (
                <li key={s.n} className="grid md:grid-cols-[80px_1fr] gap-6">
                  <div className="text-3xl font-bold text-[var(--color-accent)] font-[family-name:var(--font-heading)]">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-heading)]">{s.title}</h3>
                    <p
                      className="text-zinc-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: s.body }}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Cosa NON è */}
        <section className="py-24 bg-zinc-50">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3 text-center">
              Trasparenza
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12 font-[family-name:var(--font-heading)]">
              Cosa <em>non</em> è il nostro portale
            </h2>
            <div className="space-y-6 text-zinc-700 leading-relaxed">
              <p>
                <strong className="text-zinc-900">Non è una piattaforma anonima.</strong> Dietro non c&apos;è un help desk generico, ma un dottore commercialista iscritto all&apos;Albo, con responsabilità professionale piena. Il rapporto è personale anche quando è online: il professionista che firma il tuo mandato è quello che lavora sulla tua pratica e che puoi contattare.
              </p>
              <p>
                <strong className="text-zinc-900">Non è un software che fa il commercialista.</strong> Il portale è uno strumento di lavoro condiviso fra te e lo studio. La consulenza, le scelte fiscali, le dichiarazioni le fa un professionista vero. Il portale serve a renderti il rapporto comodo: documenti in ordine, scadenze sotto controllo, messaggi tracciati.
              </p>
              <p>
                <strong className="text-zinc-900">Non è un vincolo pluriennale obbligato.</strong> Il mandato professionale standard è annuale con rinnovo tacito e disdetta con 60 giorni di preavviso via PEC. Esiste un&apos;opzione triennale con prezzo bloccato per chi vuole stabilità, ma non è obbligatoria. Se decidi di cambiare studio, i tuoi documenti restano tuoi e te li forniamo tutti.
              </p>
              <p>
                <strong className="text-zinc-900">Non sostituisce l&apos;incontro umano quando serve.</strong> Per scelte importanti puoi sempre prenotare una videocall col commercialista, oppure venire in studio a Parma se preferisci. L&apos;online è una comodità, non un muro.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3 text-center">
              Domande frequenti
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12 font-[family-name:var(--font-heading)]">
              Quello che ci chiedete più spesso
            </h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-zinc-100 bg-white p-6 hover:border-zinc-200 transition-colors"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-zinc-900 font-[family-name:var(--font-heading)]">
                      {f.q}
                    </h3>
                    <svg
                      className="w-4 h-4 shrink-0 text-zinc-400 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p
                    className="text-sm text-zinc-700 leading-relaxed mt-4"
                    dangerouslySetInnerHTML={{ __html: f.a }}
                  />
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA finale */}
        <section className="py-24 bg-[var(--color-surface)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
              Pronto a provarlo?
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-8 max-w-xl mx-auto">
              La registrazione richiede 2 minuti. Puoi farla anche solo per dare un&apos;occhiata: il pagamento arriva solo dopo la firma del mandato per un servizio specifico, e solo se decidi di procedere.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://clienti.atparma.com/register"
                className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium"
              >
                Registrati gratis sul portale
              </a>
              <Link
                href="/servizi"
                className="inline-block px-6 py-3 border border-zinc-200 text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors text-sm font-medium"
              >
                Vedi prima i servizi
              </Link>
            </div>
            <p className="text-xs text-zinc-500 mt-6">
              Hai dubbi? Scrivi a{" "}
              <a href="mailto:segreteria@atparma.com" className="text-[var(--color-accent)] hover:underline">
                segreteria@atparma.com
              </a>{" "}
              oppure chiama lo 0521 247721. Risposta entro 1 giorno lavorativo.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
