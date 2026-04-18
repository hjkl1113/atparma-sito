import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";

type Current = "home" | "servizi" | "strumenti" | "blog" | "faq" | "contatti";

const voci: { href: string; label: string; key: Current }[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/servizi", label: "Servizi", key: "servizi" },
  { href: "/strumenti", label: "Strumenti", key: "strumenti" },
  { href: "/blog", label: "Blog", key: "blog" },
  { href: "/faq", label: "FAQ", key: "faq" },
  { href: "/contatti", label: "Contatti", key: "contatti" },
];

export function SiteHeader({ current }: { current?: Current }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
            A.T. Consulting
          </span>
          <span className="hidden sm:inline text-xs text-zinc-400 tracking-widest uppercase">
            Studio Professionale · Parma · Tutta Italia
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
          {voci.map((v) => (
            <Link
              key={v.key}
              href={v.href}
              className={
                current === v.key
                  ? "text-zinc-900 font-medium"
                  : "hover:text-zinc-900 transition-colors"
              }
            >
              {v.label}
            </Link>
          ))}
          <a
            href="https://clienti.atparma.com"
            className="ml-2 px-4 py-2 bg-zinc-900 text-white text-sm rounded-lg hover:bg-zinc-800 transition-colors"
          >
            Area Clienti
          </a>
        </nav>
        <MobileMenu current={current} />
      </div>
    </header>
  );
}
