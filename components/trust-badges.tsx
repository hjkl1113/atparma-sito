import Link from "next/link";
import {
  GlobeIcon,
  LockIcon,
  SignatureIcon,
  DocumentIcon,
  ChatIcon,
  ShieldIcon,
} from "@/lib/icons";

interface BadgeItem {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
}

const ITEMS: BadgeItem[] = [
  { Icon: GlobeIcon, title: "Dati in Unione Europea", subtitle: "Neon + R2 Francoforte" },
  { Icon: LockIcon, title: "TLS 1.3 + AES-256", subtitle: "Cifratura in transito e a riposo" },
  { Icon: SignatureIcon, title: "Firma eIDAS", subtitle: "Art. 26 Reg. UE 910/2014" },
  { Icon: DocumentIcon, title: "GDPR compliant", subtitle: "Conservazione 10 anni" },
  { Icon: ChatIcon, title: "Supporto 24h", subtitle: "Email in giornata lavorativa" },
  { Icon: ShieldIcon, title: "Commercialisti iscritti", subtitle: "Albi di Parma e Brescia (sez A)" },
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {ITEMS.map(({ Icon, title, subtitle }) => (
        <div
          key={title}
          className="flex items-start gap-3 p-4 rounded-lg border border-zinc-200 bg-white"
        >
          <Icon className="w-6 h-6 flex-shrink-0 text-[var(--color-accent)]" />
          <div>
            <p className="font-semibold text-sm text-zinc-900 leading-snug">{title}</p>
            <p className="text-xs text-zinc-600 mt-0.5">{subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TrustStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
      <span className="inline-flex items-center gap-1.5">
        <GlobeIcon className="w-3.5 h-3.5" /> Dati UE
      </span>
      <span aria-hidden>·</span>
      <span className="inline-flex items-center gap-1.5">
        <LockIcon className="w-3.5 h-3.5" /> Pagamento sicuro
      </span>
      <span aria-hidden>·</span>
      <span className="inline-flex items-center gap-1.5">
        <ChatIcon className="w-3.5 h-3.5" /> Supporto 24h
      </span>
      <span aria-hidden>·</span>
      <Link
        href="/sicurezza"
        className="underline hover:text-zinc-900 transition-colors"
      >
        Come proteggiamo i tuoi dati &rarr;
      </Link>
    </div>
  );
}
