# Sito Web A.T. Consulting Parma — Report Progetto

**Ultimo aggiornamento:** 2026-04-04 23:45
**Versione:** 0.1

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

## Collegamento con Portale Clienti

| Componente | Dettaglio |
|---|---|
| Portale clienti | https://at-parma.vercel.app |
| Repository portale | https://github.com/hjkl1113/studio-atparma |
| Flusso acquisto | Stripe checkout → webhook → crea account portale → email attivazione |

---

## Stato Avanzamento

### Fase 0 — Setup
| Step | Descrizione | Stato |
|---|---|---|
| 0.1 | Init Next.js + TypeScript + Tailwind | COMPLETATO |
| 0.2 | Repository GitHub | COMPLETATO |
| 0.3 | CLAUDE.md + REPORT | COMPLETATO |
| 0.4 | Deploy Vercel | DA FARE |
| 0.5 | Design con Pencil | DA FARE |

### Fase 1 — Sito Pubblico
| Step | Descrizione | Stato |
|---|---|---|
| 1.1 | Landing page (hero, servizi, team, contatti) | DA FARE |
| 1.2 | Pagina servizi dettaglio | DA FARE |
| 1.3 | Form richiesta preventivo/consulenza | DA FARE |
| 1.4 | Link "Area Clienti" → portale | DA FARE |
| 1.5 | SEO + meta tags + sitemap | DA FARE |

### Fase 2 — Pagamenti Stripe
| Step | Descrizione | Stato |
|---|---|---|
| 2.1 | Integrazione Stripe checkout | DA FARE |
| 2.2 | Webhook Stripe → crea account portale | DA FARE |
| 2.3 | Pagina conferma ordine | DA FARE |

### Fase 3 — Blog/News (opzionale)
| Step | Descrizione | Stato |
|---|---|---|
| 3.1 | Sistema articoli/news fiscali | DA FARE |

---

## Prossimi Passi

1. Design con Pencil (layout, colori, tipografia)
2. Sviluppo landing page
3. Deploy su Vercel
4. Integrazione Stripe
5. Switchover dominio da WordPress a Vercel
