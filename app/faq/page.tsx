import type { Metadata } from "next";
import Link from "next/link";
import { MobileMenu } from "@/app/mobile-menu";

export const metadata: Metadata = {
  title: "FAQ — Domande frequenti | A.T. Consulting Parma",
  description:
    "Risposte alle domande piu frequenti su Partita IVA, 730, consulenza fiscale, scadenze e servizi di A.T. Consulting Parma. Commercialista online.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    category: "Generale",
    items: [
      {
        q: "Dove avete sede?",
        a: "La nostra sede e in Borgo Riccio da Parma 5, 43121 Parma. Operiamo su tutto il territorio nazionale, sia in presenza che da remoto tramite il nostro portale clienti digitale.",
      },
      {
        q: "Come posso contattarvi?",
        a: "Puoi chiamarci al numero 0521 247721, scriverci a segreteria@atparma.com o compilare il form sulla pagina Contatti. Rispondiamo entro 24 ore lavorative.",
      },
      {
        q: "Lavorate solo a Parma?",
        a: "No. Abbiamo sede a Parma ma serviamo clienti in tutta Italia grazie al portale clienti online e alle videoconsulenze.",
      },
    ],
  },
  {
    category: "Partita IVA",
    items: [
      {
        q: "Quanto costa aprire una Partita IVA?",
        a: "L'apertura della Partita IVA presso l'Agenzia delle Entrate e gratuita. Il nostro servizio di apertura, configurazione e consulenza sul codice ATECO e sul regime fiscale parte da 149 euro. Puoi acquistarlo online dalla sezione Servizi.",
      },
      {
        q: "Posso aprire la Partita IVA online?",
        a: "Si. Con noi puoi aprire la Partita IVA interamente online, senza muoverti dallo studio o da casa. Ti guidiamo nella scelta del regime fiscale e del codice ATECO piu adatto.",
      },
      {
        q: "Quale regime fiscale conviene per iniziare?",
        a: "Il regime forfettario e spesso la scelta migliore per chi inizia, con un'imposta sostitutiva del 5% per i primi 5 anni. Non e adatto a tutti pero: dipende dall'attivita, dai costi e dalle prospettive di crescita. Ti aiutiamo a scegliere in base alla tua situazione.",
      },
    ],
  },
  {
    category: "Dichiarazione 730",
    items: [
      {
        q: "Chi puo presentare il 730?",
        a: "Il 730 e destinato a lavoratori dipendenti, pensionati e titolari di alcuni redditi assimilati. I titolari di Partita IVA devono invece presentare il modello Redditi PF.",
      },
      {
        q: "Quanto costa la dichiarazione 730?",
        a: "Il nostro servizio 730 online parte da 79 euro e include la verifica di tutte le detrazioni applicabili, la compilazione e l'invio telematico all'Agenzia delle Entrate.",
      },
      {
        q: "Quali sono le scadenze?",
        a: "Il 730 precompilato e disponibile dal 30 aprile. La scadenza per la presentazione e il 30 settembre. Ti consigliamo di non aspettare l'ultimo momento per evitare ritardi nei rimborsi.",
      },
      {
        q: "Conviene il precompilato o il commercialista?",
        a: "Il precompilato e comodo ma spesso incompleto: spese mediche, bonus edilizi, detrazioni familiari complesse possono non essere rilevate automaticamente. Un commercialista verifica ogni voce e individua detrazioni che spesso ripagano il costo del servizio.",
      },
    ],
  },
  {
    category: "Crisi di impresa",
    items: [
      {
        q: "Cosa fare se la mia impresa e in difficolta?",
        a: "Agire tempestivamente e fondamentale. Il nuovo Codice della Crisi (D.Lgs. 14/2019) offre strumenti efficaci come la composizione negoziata e i piani di risanamento. Prenota una consulenza per valutare la tua situazione in modo riservato.",
      },
      {
        q: "Che cos'e la composizione negoziata della crisi?",
        a: "E una procedura stragiudiziale introdotta dal Codice della Crisi che permette all'impresa in difficolta di negoziare con i creditori con l'assistenza di un esperto indipendente, mantenendo la continuita aziendale.",
      },
    ],
  },
  {
    category: "Pagamenti e Servizi",
    items: [
      {
        q: "Come posso pagare i servizi online?",
        a: "Accettiamo pagamenti con carta di credito (tramite Stripe) e PayPal. Puoi acquistare i servizi direttamente dal sito nella sezione dedicata.",
      },
      {
        q: "Rilasciate fattura?",
        a: "Si, per ogni servizio acquistato rilasciamo regolare fattura elettronica.",
      },
      {
        q: "Posso avere un preventivo personalizzato?",
        a: "Certo. Per servizi non inclusi nel catalogo online (consulenze complesse, operazioni straordinarie, crisi di impresa) puoi richiedere un preventivo gratuito dalla pagina Contatti.",
      },
    ],
  },
];

export default function FAQPage() {
  // Genera JSON-LD FAQ schema per SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
            A.T. Consulting
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <Link href="/servizi" className="hover:text-zinc-900 transition-colors">Servizi</Link>
            <Link href="/calcolatori/forfettario" className="hover:text-zinc-900 transition-colors">Calcolatore</Link>
            <Link href="/blog" className="hover:text-zinc-900 transition-colors">Blog</Link>
            <Link href="/faq" className="text-zinc-900 font-medium">FAQ</Link>
            <Link href="/contatti" className="hover:text-zinc-900 transition-colors">Contatti</Link>
            <a href="https://clienti.atparma.com" className="ml-2 px-4 py-2 bg-zinc-900 text-white text-sm rounded-lg hover:bg-zinc-800 transition-colors">
              Area Clienti
            </a>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium mb-3">
            FAQ
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Domande frequenti
          </h1>
          <p className="text-zinc-600 mb-12 leading-relaxed">
            Le risposte alle domande che i nostri clienti ci pongono piu spesso.
            Non trovi quello che cerchi? <Link href="/contatti" className="text-[var(--color-accent)] hover:underline">Contattaci direttamente</Link>.
          </p>

          <div className="space-y-12">
            {faqs.map((cat) => (
              <section key={cat.category}>
                <h2 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)] text-[var(--color-accent)]">
                  {cat.category}
                </h2>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <details
                      key={item.q}
                      className="group bg-white rounded-xl border border-zinc-100 overflow-hidden"
                    >
                      <summary className="cursor-pointer p-5 font-medium text-sm flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors">
                        <span>{item.q}</span>
                        <svg className="w-4 h-4 text-zinc-400 transition-transform group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-5 text-zinc-600 text-sm leading-relaxed">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 bg-[var(--color-surface)] rounded-2xl p-8 text-center">
            <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)]">
              Non hai trovato la risposta?
            </h3>
            <p className="text-zinc-600 text-sm mb-6">
              Contattaci: ti rispondiamo entro 24 ore lavorative.
            </p>
            <Link
              href="/contatti"
              className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm font-medium"
            >
              Scrivici
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
