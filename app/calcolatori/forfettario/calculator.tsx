"use client";

import Link from "next/link";
import { startTransition, useCallback, useEffect, useMemo, useState } from "react";
import { ATTIVITA, CASSA_LABEL, calcola, type Cassa, type Risultato } from "./lib";

type Modo = "privato" | "professionista";

function formatEuro(n: number): string {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

function isCassa(v: string | null): v is Cassa {
  return v === "separata" || v === "artigiani-commercianti" || v === "privata";
}

export function Calculator() {
  const [ricavi, setRicavi] = useState(30000);
  const [spese, setSpese] = useState(3000);
  const [attivitaId, setAttivitaId] = useState(ATTIVITA[0].id);
  const [cassa, setCassa] = useState<Cassa>("separata");
  const [aliquotaCassaPrivata, setAliquotaCassaPrivata] = useState(0.16);
  const [nuovaAttivita, setNuovaAttivita] = useState(true);
  const [inpsVersatiPrec, setInpsVersatiPrec] = useState(4800);
  const [primoAnno, setPrimoAnno] = useState(false);
  const [modo, setModo] = useState<Modo>("privato");

  // Leggi parametri dall'URL al mount per share link pre-compilati.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.search);
    const num = (k: string) => {
      const v = p.get(k);
      return v === null ? undefined : Number(v);
    };
    startTransition(() => {
      const nRicavi = num("r");
      if (nRicavi !== undefined && !Number.isNaN(nRicavi)) setRicavi(Math.max(0, nRicavi));
      const nSpese = num("s");
      if (nSpese !== undefined && !Number.isNaN(nSpese)) setSpese(Math.max(0, nSpese));
      const att = p.get("a");
      if (att && ATTIVITA.some((x) => x.id === att)) setAttivitaId(att);
      const c = p.get("c");
      if (isCassa(c)) setCassa(c);
      const nAlq = num("ap");
      if (nAlq !== undefined && !Number.isNaN(nAlq)) setAliquotaCassaPrivata(Math.min(0.5, Math.max(0, nAlq)));
      if (p.get("nu") === "1") setNuovaAttivita(true);
      if (p.get("nu") === "0") setNuovaAttivita(false);
      const nInps = num("i");
      if (nInps !== undefined && !Number.isNaN(nInps)) setInpsVersatiPrec(Math.max(0, nInps));
      if (p.get("pa") === "1") setPrimoAnno(true);
      const m = p.get("m");
      if (m === "professionista" || m === "privato") setModo(m);
    });
  }, []);

  const risultato = useMemo(
    () =>
      calcola({
        ricavi,
        spese,
        attivitaId,
        cassa,
        aliquotaCassaPrivata,
        nuovaAttivita,
        inpsVersatiPrec,
        primoAnno,
      }),
    [ricavi, spese, attivitaId, cassa, aliquotaCassaPrivata, nuovaAttivita, inpsVersatiPrec, primoAnno]
  );

  const verdetto = risultato.verdetto;
  const diff = Math.abs(risultato.differenzaNettaForfettario);

  const buildShareUrl = useCallback(() => {
    if (typeof window === "undefined") return "";
    const p = new URLSearchParams();
    p.set("r", String(ricavi));
    p.set("s", String(spese));
    p.set("a", attivitaId);
    p.set("c", cassa);
    if (cassa === "privata") p.set("ap", String(aliquotaCassaPrivata));
    p.set("nu", nuovaAttivita ? "1" : "0");
    if (!primoAnno) p.set("i", String(inpsVersatiPrec));
    if (primoAnno) p.set("pa", "1");
    p.set("m", modo);
    return `${window.location.origin}${window.location.pathname}?${p.toString()}`;
  }, [ricavi, spese, attivitaId, cassa, aliquotaCassaPrivata, nuovaAttivita, inpsVersatiPrec, primoAnno, modo]);

  return (
    <div className="space-y-6">
      {/* Toggle modo privato / commercialista */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-full border border-zinc-200 bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setModo("privato")}
            aria-pressed={modo === "privato"}
            className={`px-4 py-1.5 text-xs sm:text-sm rounded-full transition-colors ${
              modo === "privato"
                ? "bg-zinc-900 text-white font-medium"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <span aria-hidden>👤</span> Sono un privato / professionista
          </button>
          <button
            type="button"
            onClick={() => setModo("professionista")}
            aria-pressed={modo === "professionista"}
            className={`px-4 py-1.5 text-xs sm:text-sm rounded-full transition-colors ${
              modo === "professionista"
                ? "bg-zinc-900 text-white font-medium"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <span aria-hidden>👔</span> Sono un commercialista
          </button>
        </div>
      </div>

    <div className="grid lg:grid-cols-5 gap-8">
      {/* Form */}
      <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-6">
        <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)]">
          I tuoi dati
        </h2>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            Tipo di attivita
          </label>
          <select
            value={attivitaId}
            onChange={(e) => setAttivitaId(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm bg-white"
          >
            {ATTIVITA.map((a) => (
              <option key={a.id} value={a.id}>
                {a.label} ({Math.round(a.coefficiente * 100)}%)
              </option>
            ))}
          </select>
          <p className="text-xs text-zinc-500 mt-1">
            Il coefficiente determina il reddito imponibile forfettario.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            Ricavi annui previsti (EUR)
          </label>
          <input
            type="number"
            value={ricavi}
            onChange={(e) => setRicavi(Math.max(0, Number(e.target.value) || 0))}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
            min={0}
            step={1000}
          />
          {ricavi > 85000 && (
            <p className="text-xs text-red-600 mt-1">
              Oltre EUR 85.000 il forfettario non e applicabile. Serve il regime ordinario.
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            Spese annue previste (EUR)
          </label>
          <input
            type="number"
            value={spese}
            onChange={(e) => setSpese(Math.max(0, Number(e.target.value) || 0))}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
            min={0}
            step={500}
          />
          <p className="text-xs text-zinc-500 mt-1">
            Usate solo per calcolare l&apos;ordinario. Il forfettario le ignora.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            Cassa previdenziale
          </label>
          <select
            value={cassa}
            onChange={(e) => setCassa(e.target.value as Cassa)}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm bg-white"
          >
            {(Object.keys(CASSA_LABEL) as Cassa[]).map((k) => (
              <option key={k} value={k}>
                {CASSA_LABEL[k]}
              </option>
            ))}
          </select>
        </div>

        {cassa === "privata" && (
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Aliquota cassa privata (%)
            </label>
            <input
              type="number"
              value={Math.round(aliquotaCassaPrivata * 100)}
              onChange={(e) =>
                setAliquotaCassaPrivata(Math.max(0, Math.min(0.5, Number(e.target.value) / 100)))
              }
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm"
              min={0}
              max={50}
              step={1}
            />
            <p className="text-xs text-zinc-500 mt-1">
              Inarcassa ~16%, Cassa Forense variabile, ENPAP ~10%. Verifica la tua cassa.
            </p>
          </div>
        )}

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={nuovaAttivita}
            onChange={(e) => setNuovaAttivita(e.target.checked)}
            className="mt-1"
          />
          <span className="text-sm text-zinc-700">
            <span className="font-medium">Nuova attivita</span> — primi 5 anni, se rispetti i
            requisiti l&apos;aliquota e 5% invece di 15%.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={primoAnno}
            onChange={(e) => setPrimoAnno(e.target.checked)}
            className="mt-1"
          />
          <span className="text-sm text-zinc-700">
            <span className="font-medium">E&apos; il mio primo anno</span> — nessun contributo
            INPS pagato negli anni precedenti, quindi nessuna deduzione.
          </span>
        </label>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            INPS versati nell&apos;anno (deducibili) — EUR
          </label>
          <input
            type="number"
            value={primoAnno ? 0 : inpsVersatiPrec}
            disabled={primoAnno}
            onChange={(e) => setInpsVersatiPrec(Math.max(0, Number(e.target.value) || 0))}
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm disabled:bg-zinc-50 disabled:text-zinc-400"
            min={0}
            step={100}
          />
          <p className="text-xs text-zinc-500 mt-1">
            {primoAnno
              ? "Nessuna deduzione: e il tuo primo anno di attivita."
              : "Contributi previdenziali effettivamente pagati durante l'anno d'imposta (saldo anno precedente + acconti). Principio di cassa: solo quelli gia versati riducono il reddito imponibile."}
          </p>
        </div>
      </div>

      {/* Risultato */}
      <div className="lg:col-span-3 space-y-6">
        {/* Verdetto */}
        <div
          className={`rounded-2xl p-6 sm:p-8 border ${
            verdetto === "forfettario"
              ? "bg-green-50 border-green-200"
              : verdetto === "ordinario"
                ? "bg-amber-50 border-amber-200"
                : "bg-zinc-50 border-zinc-200"
          }`}
        >
          <p className="text-xs tracking-[0.2em] uppercase font-medium mb-2 text-zinc-600">
            Il verdetto
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] mb-2">
            {risultato.forfettario.oltreSoglia
              ? "Il forfettario non e applicabile"
              : verdetto === "forfettario"
                ? "Ti conviene il forfettario"
                : verdetto === "ordinario"
                  ? "Ti conviene il regime ordinario"
                  : "Differenza minima tra i due regimi"}
          </h3>
          <p className="text-zinc-700 text-sm leading-relaxed">
            {risultato.forfettario.oltreSoglia
              ? "Superi la soglia di EUR 85.000 di ricavi annui: l'accesso al forfettario e precluso."
              : verdetto === "pareggio"
                ? "I due regimi producono un netto simile. Scegli in base a previsioni di crescita, credibilita bancaria e gestione IVA."
                : `Con i dati inseriti il ${verdetto === "forfettario" ? "forfettario" : "regime ordinario"} ti fa risparmiare circa ${formatEuro(diff)}/anno di imposte e contributi.`}
          </p>
        </div>

        {/* Confronto */}
        <div className="grid sm:grid-cols-2 gap-4">
          <RegimeCard
            titolo="Forfettario"
            aliquota={nuovaAttivita ? "5% (start-up)" : "15%"}
            redditoLordoLabel="Ricavi x coefficiente"
            disabilitato={risultato.forfettario.oltreSoglia}
            evidenza={verdetto === "forfettario" && !risultato.forfettario.oltreSoglia}
            redditoLordo={risultato.forfettario.redditoLordo}
            deduzioneInps={risultato.forfettario.deduzioneInps}
            redditoImponibile={risultato.forfettario.redditoImponibile}
            imposta={risultato.forfettario.imposta}
            contributi={risultato.forfettario.contributi}
            netto={risultato.forfettario.netto}
          />
          <RegimeCard
            titolo="Ordinario"
            aliquota="IRPEF scaglioni + addizionali"
            redditoLordoLabel="Ricavi - spese deducibili"
            evidenza={verdetto === "ordinario"}
            redditoLordo={risultato.ordinario.redditoLordo}
            deduzioneInps={risultato.ordinario.deduzioneInps}
            redditoImponibile={risultato.ordinario.redditoImponibile}
            imposta={risultato.ordinario.imposta}
            contributi={risultato.ordinario.contributi}
            netto={risultato.ordinario.netto}
          />
        </div>

        {/* Verifica risparmio (what-if) */}
        <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200">
          <h4 className="text-sm font-semibold mb-1 font-[family-name:var(--font-heading)]">
            Verifica risparmio
          </h4>
          <p className="text-xs text-zinc-600 mb-5">
            Sposta i cursori per vedere subito come cambia il netto, senza rifare il form.
          </p>

          <WhatIfSlider
            label="Ricavi annui"
            value={ricavi}
            onChange={setRicavi}
            min={5000}
            max={85000}
            step={1000}
          />
          <WhatIfSlider
            label="INPS deducibili"
            value={primoAnno ? 0 : inpsVersatiPrec}
            onChange={(v) => {
              setInpsVersatiPrec(v);
              if (v > 0 && primoAnno) setPrimoAnno(false);
            }}
            min={0}
            max={15000}
            step={100}
            disabled={primoAnno}
            hint={primoAnno ? "Disabilitato: e il tuo primo anno." : undefined}
          />
        </div>

        {/* Share + Lead magnet PDF */}
        <ShareAndPdf
          buildShareUrl={buildShareUrl}
          risultato={risultato}
          modo={modo}
          context={{
            ricavi,
            spese,
            attivitaLabel:
              ATTIVITA.find((a) => a.id === attivitaId)?.label ?? attivitaId,
            cassaLabel: CASSA_LABEL[cassa],
            nuovaAttivita,
            primoAnno,
            inpsVersatiPrec,
          }}
        />

        {/* CTA — cambia messaggio in base al modo */}
        {modo === "privato" ? (
          <div className="bg-zinc-900 text-white rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-heading)]">
              Vuoi aprire la Partita IVA con noi?
            </h3>
            <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
              Dottori commercialisti iscritti all&apos;albo: scegliamo insieme regime e codice
              ATECO, apriamo la P.IVA e gestiamo tutti gli adempimenti dal portale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#servizi-online"
                className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-medium text-sm hover:bg-[var(--color-accent-dark)] transition-colors text-center"
              >
                Vedi i servizi online
              </Link>
              <Link
                href="/contatti"
                className="px-6 py-3 border border-white/30 text-white rounded-lg font-medium text-sm hover:bg-white/10 transition-colors text-center"
              >
                Prenota una consulenza
              </Link>
            </div>
          </div>
        ) : (
          <ProfessionistaCTA />
        )}

        <p className="text-xs text-zinc-500 leading-relaxed">
          <strong className="text-zinc-700">Avvertenza.</strong> Stima indicativa basata su
          aliquote 2026 (IRPEF 23/35/43%, addizionali medie 2,5%, gestione separata 26,07%,
          artigiani/commercianti 24% con minimale EUR 4.208). Non sostituisce una
          consulenza fiscale personalizzata: variabili come detrazioni IRPEF, deduzioni
          analitiche, IVA e riduzioni contributive possono cambiare il risultato.
        </p>
      </div>
    </div>
    </div>
  );
}

function ShareAndPdf({
  buildShareUrl,
  risultato,
  modo,
  context,
}: {
  buildShareUrl: () => string;
  risultato: Risultato;
  modo: Modo;
  context: {
    ricavi: number;
    spese: number;
    attivitaLabel: string;
    cassaLabel: string;
    nuovaAttivita: boolean;
    primoAnno: boolean;
    inpsVersatiPrec: number;
  };
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(buildShareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  }

  function whatsAppUrl() {
    const f = risultato.forfettario;
    const d = Math.abs(risultato.differenzaNettaForfettario);
    const verdettoTxt = f.oltreSoglia
      ? "oltre soglia EUR 85k"
      : risultato.verdetto === "forfettario"
        ? `forfettario conviene (~${formatEuro(d)}/anno)`
        : risultato.verdetto === "ordinario"
          ? `ordinario conviene (~${formatEuro(d)}/anno)`
          : "differenza minima";
    const text = `Calcolatore forfettario 2026 AT Parma: ${verdettoTxt}. ${buildShareUrl()}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  async function generatePdf() {
    const { default: jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    const f = risultato.forfettario;
    const o = risultato.ordinario;
    const diff = risultato.differenzaNettaForfettario;

    let y = 18;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Report convenienza regime forfettario 2026", 14, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(`Generato il ${new Date().toLocaleDateString("it-IT")} da atparma.com`, 14, y);
    y += 10;

    const section = (title: string) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(title, 14, y);
      y += 6;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
    };
    const row = (k: string, v: string) => {
      doc.text(k, 16, y);
      doc.text(v, 130, y);
      y += 5;
    };

    section("Dati inseriti");
    row("Ricavi annui", formatEuro(context.ricavi));
    row("Spese deducibili", formatEuro(context.spese));
    row("Attivita", context.attivitaLabel);
    row("Cassa previdenziale", context.cassaLabel);
    row("Nuova attivita (5%)", context.nuovaAttivita ? "Si" : "No");
    row("Primo anno di attivita", context.primoAnno ? "Si" : "No");
    row("INPS versati deducibili", context.primoAnno ? formatEuro(0) : formatEuro(context.inpsVersatiPrec));
    y += 3;

    section("Forfettario");
    row("Reddito lordo (ricavi x coeff.)", formatEuro(f.redditoLordo));
    row("- INPS deducibili", formatEuro(-f.deduzioneInps));
    row("= Reddito imponibile", formatEuro(f.redditoImponibile));
    row("Imposta sostitutiva", formatEuro(f.imposta));
    row("Contributi INPS anno corrente", formatEuro(f.contributi));
    row("Netto stimato", formatEuro(f.netto));
    if (f.oltreSoglia) {
      doc.setFont("helvetica", "italic");
      doc.text("Oltre soglia EUR 85.000: forfettario non applicabile.", 16, y);
      doc.setFont("helvetica", "normal");
      y += 5;
    }
    y += 3;

    section("Ordinario");
    row("Reddito lordo (ricavi - spese)", formatEuro(o.redditoLordo));
    row("- INPS deducibili", formatEuro(-o.deduzioneInps));
    row("= Imponibile IRPEF", formatEuro(o.redditoImponibile));
    row("Imposte (IRPEF + addizionali)", formatEuro(o.imposta));
    row("Contributi INPS anno corrente", formatEuro(o.contributi));
    row("Netto stimato", formatEuro(o.netto));
    y += 3;

    section("Verdetto");
    const verd = f.oltreSoglia
      ? "Il forfettario non e applicabile (oltre soglia EUR 85.000)."
      : risultato.verdetto === "forfettario"
        ? `Forfettario conviene di ${formatEuro(Math.abs(diff))}/anno.`
        : risultato.verdetto === "ordinario"
          ? `Ordinario conviene di ${formatEuro(Math.abs(diff))}/anno.`
          : "Differenza minima tra i due regimi.";
    doc.text(doc.splitTextToSize(verd, 180), 16, y);
    y += 12;

    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    const disclaimer =
      "Stima indicativa basata su aliquote 2026 (IRPEF 23/35/43%, addizionali medie 2,5%, gestione separata 26,07%, artigiani/commercianti 24% con minimale EUR 4.208). Non sostituisce una consulenza fiscale personalizzata. A.T. Consulting Parma S.R.L.S. - www.atparma.com";
    doc.text(doc.splitTextToSize(disclaimer, 180), 14, y);

    doc.save("report-forfettario-atparma.pdf");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      await fetch("/api/lead-forfettario", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          fonte: "calcolatore-forfettario-pdf",
          modo,
          ricavi: context.ricavi,
          spese: context.spese,
          attivita: context.attivitaLabel,
          cassa: context.cassaLabel,
          nuovaAttivita: context.nuovaAttivita,
          primoAnno: context.primoAnno,
          inpsVersatiPrec: context.inpsVersatiPrec,
          verdetto: risultato.verdetto,
          nettoForf: risultato.forfettario.netto,
          nettoOrd: risultato.ordinario.netto,
          differenza: risultato.differenzaNettaForfettario,
        }),
      });
      await generatePdf();
      setStatus("done");
    } catch (err) {
      console.error("download pdf errore:", err);
      setStatus("error");
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-6">
      <div className="flex flex-wrap gap-2 mb-5">
        <button
          type="button"
          onClick={handleCopy}
          className="px-3 py-2 text-xs font-medium rounded-lg border border-zinc-200 hover:bg-zinc-50 transition-colors"
        >
          {copied ? "Link copiato" : "Copia link con risultato"}
        </button>
        <a
          href={whatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 text-xs font-medium rounded-lg border border-zinc-200 hover:bg-zinc-50 transition-colors"
        >
          Condividi su WhatsApp
        </a>
      </div>

      <h4 className="text-sm font-semibold mb-1 font-[family-name:var(--font-heading)]">
        Scarica il report in PDF
      </h4>
      <p className="text-xs text-zinc-600 mb-4">
        Salviamo la tua email per inviarti aggiornamenti su regimi fiscali e novita per
        {modo === "professionista" ? " commercialisti." : " forfettari e professionisti."}
      </p>

      {status === "done" ? (
        <p className="text-sm text-green-700">
          PDF scaricato. Controlla la cartella Download del tuo dispositivo.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="La tua email"
            className="flex-1 px-3 py-2 rounded-lg border border-zinc-200 text-sm"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="px-4 py-2 bg-zinc-900 text-white rounded-lg font-medium text-sm hover:bg-zinc-800 transition-colors disabled:opacity-50"
          >
            {status === "submitting" ? "Preparo il PDF..." : "Scarica PDF"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-xs text-red-600 mt-2">Email non valida o errore di rete. Riprova.</p>
      )}
    </div>
  );
}

function ProfessionistaCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead-forfettario", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          fonte: "waitlist-professio",
          modo: "professionista",
        }),
      });
      if (!res.ok) throw new Error("Errore invio");
      setStatus("done");
    } catch (err) {
      console.error("waitlist professio errore:", err);
      setStatus("error");
    }
  }

  return (
    <div className="bg-zinc-900 text-white rounded-2xl p-6 sm:p-8">
      <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-heading)]">
        Professio — il portale del tuo studio
      </h3>
      <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
        Offri questo calcolatore e tanti altri ai tuoi clienti, brandizzati con il nome del
        tuo studio. Documenti, scadenze, pratiche, tool fiscali: tutto in un unico portale.
        Lasciaci la tua email professionale per entrare nella lista d&apos;attesa beta.
      </p>
      {status === "done" ? (
        <p className="text-green-300 text-sm">
          Ti abbiamo aggiunto. Ti contatteremo appena Professio sara pronto.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nome@studio-commercialisti.it"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-medium text-sm hover:bg-[var(--color-accent-dark)] transition-colors disabled:opacity-50"
          >
            {status === "submitting" ? "Invio..." : "Iscrivimi alla waitlist"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-red-300 text-xs mt-2">Controlla l&apos;email e riprova.</p>
      )}
    </div>
  );
}

function RegimeCard({
  titolo,
  aliquota,
  redditoLordoLabel,
  redditoLordo,
  deduzioneInps,
  redditoImponibile,
  imposta,
  contributi,
  netto,
  evidenza,
  disabilitato,
}: {
  titolo: string;
  aliquota: string;
  redditoLordoLabel: string;
  redditoLordo: number;
  deduzioneInps: number;
  redditoImponibile: number;
  imposta: number;
  contributi: number;
  netto: number;
  evidenza?: boolean;
  disabilitato?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 border ${
        disabilitato
          ? "bg-zinc-100 border-zinc-200 opacity-60"
          : evidenza
            ? "bg-white border-green-400 ring-2 ring-green-400/30"
            : "bg-white border-zinc-200"
      }`}
    >
      <div className="flex items-baseline justify-between mb-4">
        <h4 className="font-semibold font-[family-name:var(--font-heading)]">{titolo}</h4>
        <span className="text-xs text-zinc-500">{aliquota}</span>
      </div>

      <dl className="space-y-1.5 text-sm">
        <Riga label={redditoLordoLabel} value={redditoLordo} />
        <Riga
          label="- Contributi INPS pagati (deducibili)"
          value={-deduzioneInps}
          muted
        />
        <Riga label="= Reddito imponibile" value={redditoImponibile} strong />
        <Riga label="Imposte" value={imposta} />
        <Riga label="Contributi INPS anno corrente" value={contributi} />
      </dl>

      <div className="border-t border-zinc-100 mt-4 pt-4 flex items-baseline justify-between">
        <span className="text-xs text-zinc-500 uppercase tracking-wider">Netto stimato</span>
        <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
          {formatEuro(netto)}
        </span>
      </div>
    </div>
  );
}

function WhatIfSlider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  disabled,
  hint,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  disabled?: boolean;
  hint?: string;
}) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-baseline justify-between mb-1">
        <label className="text-xs font-medium text-zinc-700">{label}</label>
        <span className="text-sm font-semibold tabular-nums">{formatEuro(value)}</span>
      </div>
      <input
        type="range"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className="w-full accent-[var(--color-accent)] disabled:opacity-40"
      />
      {hint ? <p className="text-xs text-zinc-500 mt-1">{hint}</p> : null}
    </div>
  );
}

function Riga({
  label,
  value,
  strong,
  muted,
}: {
  label: string;
  value: number;
  strong?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline justify-between ${
        strong ? "border-t border-zinc-100 pt-2 mt-1" : ""
      } ${muted ? "text-zinc-500" : ""}`}
    >
      <dt className={strong ? "text-zinc-800 font-medium" : muted ? "text-zinc-500" : "text-zinc-600"}>
        {label}
      </dt>
      <dd className={strong ? "font-semibold" : muted ? "font-normal" : "font-medium"}>
        {formatEuro(value)}
      </dd>
    </div>
  );
}
