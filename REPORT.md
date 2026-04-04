# Sito Web A.T. Consulting Parma — Report Progetto

**Ultimo aggiornamento:** 2026-04-04 16:27
**Versione:** 0.2

---

## Deploy e Infrastruttura

| Componente | Dettaglio |
|---|---|
| Sito target | www.atparma.com |
| Hosting | Vercel (da configurare) |
| Repository | https://github.com/hjkl1113/atparma-sito |
| Cartella locale | /Users/alessandrosicuri/Desktop/studio at/sito/ |

---

## Stack Tecnologico

| Componente | Tecnologia |
|---|---|
| Framework | Next.js 16 + TypeScript |
| UI | Tailwind CSS v4 + shadcn/ui |
| Design | Pencil (.pen files) |
| Pagamenti | Stripe |
| Hosting | Vercel |

---

## Design Homepage v2

| Componente | Dettaglio |
|---|---|
| File | new.pen |
| Frame | AT Parma - Homepage v2 (node hT3Pj) |
| Stile | Aerial Gravitas |
| Palette | Carbon Frost (#FFFFFF, #0A0A0A, #4A9FD8) |
| Font titoli | Geist |
| Font corpo | Inter |
| Font caption | Geist Mono |

### Sezioni Homepage
1. Hero (foto aerea Parma, headline, 2 CTA, 4 stats)
2. Servizi (3 card numerate: fiscale, crisi impresa, finanziaria)
3. Servizi Online / Pricing (3 card con prezzi e CTA acquisto)
4. Chi siamo (split 50/50: foto team + testo)
5. Testimonial (3 recensioni clienti)
6. Perche' sceglierci (griglia 2x3 vantaggi)
7. Blog / Guide fiscali (3 card articoli con illustrazioni)
8. CTA finale (foto aerea + "Hai una questione urgente?")
9. Footer (contatti, link, P.IVA/PEC)

### Prezzi (PLACEHOLDER)
| Servizio | Prezzo | Stato |
|---|---|---|
| Dichiarazione 730 | EUR 79 | DA DEFINIRE |
| Apertura Partita IVA | EUR 149 | DA DEFINIRE |
| Consulenza su misura | A preventivo | OK |

---

## Collegamento con Portale Clienti

| Componente | Dettaglio |
|---|---|
| Portale clienti | https://at-parma.vercel.app |
| Repository portale | https://github.com/hjkl1113/studio-atparma |
| Flusso acquisto | Stripe checkout > webhook > crea account portale > email attivazione |

---

## Stato Avanzamento

### Fase 0 — Setup
| Step | Descrizione | Stato |
|---|---|---|
| 0.1 | Init Next.js + TypeScript + Tailwind | COMPLETATO |
| 0.2 | Repository GitHub | COMPLETATO |
| 0.3 | CLAUDE.md + REPORT | COMPLETATO |
| 0.4 | Contenuti approvati (contenuti.md) | COMPLETATO |
| 0.5 | Design homepage v1 (Monumental Editorial) | SCARTATO |
| 0.6 | Design homepage v2 (Aerial Gravitas) | COMPLETATO |
| 0.7 | Deploy Vercel | DA FARE |

### Fase 1 — Sito Pubblico
| Step | Descrizione | Stato |
|---|---|---|
| 1.1 | Sviluppo landing page da design v2 | DA FARE |
| 1.2 | Pagina servizi dettaglio | DA FARE |
| 1.3 | Form richiesta preventivo/consulenza | DA FARE |
| 1.4 | Link "Area Clienti" > portale | DA FARE |
| 1.5 | SEO + meta tags + sitemap | DA FARE |
| 1.6 | Blog / sistema articoli fiscali | DA FARE |

### Fase 2 — Pagamenti Stripe
| Step | Descrizione | Stato |
|---|---|---|
| 2.1 | Integrazione Stripe checkout | DA FARE |
| 2.2 | Webhook Stripe > crea account portale | DA FARE |
| 2.3 | Pagina conferma ordine | DA FARE |
| 2.4 | Pannello gestione prezzi (admin) | DA FARE |

### Fase 3 — Go-Live
| Step | Descrizione | Stato |
|---|---|---|
| 3.1 | Definire prezzi definitivi catalogo | DA FARE |
| 3.2 | Switchover dominio da WordPress a Vercel | DA FARE |

---

## Prossimi Passi

1. Sviluppo landing page da design Pencil v2
2. Deploy su Vercel
3. Integrazione Stripe con pricing dinamico
4. Pannello admin per gestione prezzi
5. Blog con articoli fiscali
6. Switchover dominio

---

## Note

- Prezzi 730 e P.IVA sono placeholder, da definire prima del go-live
- Serve meccanismo per modificare prezzi senza toccare codice (pannello admin)
- Design v1 (oro/nero, Monumental Editorial) scartato: troppo template
