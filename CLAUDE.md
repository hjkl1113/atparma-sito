@AGENTS.md

## Progetto: Sito Web A.T. Consulting Parma

Sito pubblico professionale per lo studio commercialista A.T. Consulting Parma S.R.L.S.
Dominio: www.atparma.com (attualmente WordPress/WooCommerce — da sostituire)

### Stack
- Next.js 16 + TypeScript
- Tailwind CSS v4 + shadcn/ui
- Stripe (pagamenti servizi)
- Vercel (hosting)
- Design: Pencil (.pen files)

### Obiettivo
Sito top-tier per professionisti italiani. Moderno, autorevole, veloce.
Sostituisce il vecchio WordPress + WooCommerce.

### Funzionalita
1. Landing page professionale (chi siamo, servizi, team, contatti)
2. Catalogo servizi con acquisto diretto (730, P.IVA, consulenze) via Stripe
3. Richiesta preventivo/consulenza (form)
4. Area "Sei gia cliente?" → link al portale clienti (at-parma.vercel.app)
5. Blog/news fiscali (opzionale, fase 2)
6. SEO ottimizzato per professionisti Parma

### Collegamento con Portale Clienti
- Portale clienti: https://at-parma.vercel.app (progetto separato in /Desktop/studio at/portale/)
- Quando un cliente acquista un servizio via Stripe → webhook crea account sul portale
- Il sito ha un bottone "Area Clienti" che punta al portale

### Dati Studio
- Ragione sociale: A.T. Consulting Parma S.R.L.S.
- P.IVA / CF: 02794450342
- Sede: Borgo Riccio da Parma 5, 43121 Parma (PR)
- PEC: atconsultingparma@pec.it
- Email: segreteria@atparma.com
- Tel: 0521 247721
- Soci: Alessandro Sicuri (49%, Presidente CdA), Aldo Ponzi (51%, Consigliere)

### Regole
- Lingua: italiano
- NO emoji nei file a meno che richiesto
- Design: professionale, autorevole, colori sobri, tipografia curata
- Mobile-first
