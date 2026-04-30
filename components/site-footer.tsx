import Link from "next/link";
import type { ComponentType } from "react";
import { STUDIO } from "@/lib/studio-data";
import { TrustStrip } from "@/components/trust-badges";
import { CookiePreferencesLink } from "@/components/cookie-preferences-link";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/lib/icons";

export function SiteFooter() {
  const {
    ragioneSociale,
    brand,
    partitaIva,
    indirizzo,
    tel,
    telHref,
    email,
    pec,
    portaleClienti,
    social,
  } = STUDIO;

  const socialLinks = [
    social.facebook ? { href: social.facebook, label: "Facebook", Icon: FacebookIcon } : null,
    social.instagram ? { href: social.instagram, label: "Instagram", Icon: InstagramIcon } : null,
    social.linkedin ? { href: social.linkedin, label: "LinkedIn", Icon: LinkedInIcon } : null,
  ].filter((item): item is { href: string; label: string; Icon: ComponentType<{ className?: string }> } => item !== null);

  return (
    <footer className="bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className={`grid gap-12 ${socialLinks.length > 0 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
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
          {socialLinks.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-zinc-300">
                Social
              </h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                {socialLinks.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
              <li>
                <CookiePreferencesLink />
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <TrustStrip tone="dark" />
        </div>
        <div className="mt-6 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-xs">
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
