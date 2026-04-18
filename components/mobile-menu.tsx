"use client";

import Link from "next/link";
import { useState } from "react";

type Current = "home" | "servizi" | "strumenti" | "blog" | "faq" | "contatti";

const voci: { href: string; label: string; key: Current }[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/servizi", label: "Servizi", key: "servizi" },
  { href: "/strumenti", label: "Strumenti", key: "strumenti" },
  { href: "/blog", label: "Blog", key: "blog" },
  { href: "/faq", label: "FAQ", key: "faq" },
  { href: "/contatti", label: "Contatti", key: "contatti" },
];

export function MobileMenu({ current }: { current?: Current }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-zinc-700"
        aria-label="Menu"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <nav className="absolute top-16 left-0 right-0 bg-white border-b border-zinc-100 shadow-lg">
          <div className="flex flex-col p-6 gap-4">
            {voci.map((v) => (
              <Link
                key={v.key}
                href={v.href}
                className={
                  current === v.key
                    ? "text-zinc-900 font-semibold"
                    : "text-zinc-700 font-medium"
                }
                onClick={() => setOpen(false)}
              >
                {v.label}
              </Link>
            ))}
            <a
              href="https://clienti.atparma.com"
              className="px-4 py-2 bg-zinc-900 text-white text-sm rounded-lg text-center"
            >
              Area Clienti
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
