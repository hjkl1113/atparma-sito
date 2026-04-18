"use client";

import Link from "next/link";
import { useState } from "react";

export function MobileMenu() {
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
            <Link href="/servizi" className="text-zinc-700 font-medium" onClick={() => setOpen(false)}>Servizi</Link>
            <Link href="/calcolatori/forfettario" className="text-zinc-700 font-medium" onClick={() => setOpen(false)}>Calcolatore forfettario</Link>
            <Link href="/strumenti/codice-fiscale" className="text-zinc-700 font-medium" onClick={() => setOpen(false)}>Calcolo codice fiscale</Link>
            <Link href="/strumenti/buste-paga" className="text-zinc-700 font-medium" onClick={() => setOpen(false)}>Calcolo busta paga</Link>
            <Link href="/strumenti/imu" className="text-zinc-700 font-medium" onClick={() => setOpen(false)}>Calcolo IMU</Link>
            <a href="/blog" className="text-zinc-700 font-medium" onClick={() => setOpen(false)}>Blog</a>
            <a href="/faq" className="text-zinc-700 font-medium" onClick={() => setOpen(false)}>FAQ</a>
            <a href="/contatti" className="text-zinc-700 font-medium" onClick={() => setOpen(false)}>Contatti</a>
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
