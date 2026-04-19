import Link from "next/link";
import { STUDIO } from "@/lib/studio-data";

export function SiteFooter() {
  const { ragioneSociale, brand, partitaIva, indirizzo, tel, telHref, email, pec, portaleClienti } = STUDIO;

  return (
    <footer className="bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4 font-[family-name:var(--font-heading)]">
              {brand}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {ragioneSociale}
              <br />
              {indirizzo.via}
              <br />
              {indirizzo.cap} {indirizzo.citta} ({indirizzo.provincia})
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-zinc-300">
              Contatti
            </h3>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li>
                Tel:{" "}
                <a href={telHref} className="hover:text-white transition-colors">
                  {tel}
                </a>
              </li>
              <li>
                Email:{" "}
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
                </a>
              </li>
              <li>
                PEC:{" "}
                <a href={`mailto:${pec}`} className="hover:text-white transition-colors">
                  {pec}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-zinc-300">
              Link utili
            </h3>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li>
                <Link href="/servizi" className="hover:text-white transition-colors">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="/strumenti" className="hover:text-white transition-colors">
                  Strumenti
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <Link href="/sicurezza" className="hover:text-white transition-colors">
                  Sicurezza
                </Link>
              </li>
              <li>
                <a href={portaleClienti} className="hover:text-white transition-colors">
                  Area Clienti
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-xs">
          <p>P.IVA / CF: {partitaIva}</p>
          <p>
            &copy; {new Date().getFullYear()} {ragioneSociale} &mdash; Tutti i diritti
            riservati
          </p>
        </div>
      </div>
    </footer>
  );
}
