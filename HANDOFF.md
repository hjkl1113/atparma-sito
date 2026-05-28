# HANDOFF — STATO CONSOLIDATO E PROSSIMI PASSI

**Data:** 2026-05-28
**Versione:** 2.1
**Sessione precedente:** 2026-04-22 (v2.0). I file precedenti restano in `docs/archivio/`.

## Cosa è cambiato dalla sessione 2026-04-22 a oggi

Tre cantieri grossi chiusi in `main`:

1. **Tracking foundation** (commit `5d5faf9`) — GA4 + Google Ads tag, Meta Pixel + Meta Conversions API server-side. Eventi `Purchase` (Stripe + PayPal webhook), `InitiateCheckout` (checkout-form), `Lead` (lead-forfettario). Tutti gated da consent banner, CAPI con SHA-256 hashing + dedup. **Codice attivo ma dormiente** finché le env vars su Vercel non sono settate.
2. **Ads creative** (stesso commit) — 4 foto reali della sede in Borgo Riccio (HEIC 5712×4284 + JPG ottimizzate), 28 mockup tra Facebook/Instagram (12) + Google Ads (12) + profilo/copertina (4), script Python rigenerabili in `scripts/ads/`.
3. **Blog crisi impresa** (commit `c90da8a`) — 2 articoli pillar SEO live su atparma.com: `/blog/sovraindebitamento-2026-come-uscire-dai-debiti` (audience B2C/microimpresa) e `/blog/composizione-negoziata-crisi-impresa-2026` (audience B2B PMI). Introduce nuova convenzione **FAQPage JSON-LD** in tutti i blog futuri. Pagina servizio `/servizi/crisi-di-impresa` ora mostra box "Approfondimenti" verso i 2 articoli.

In più, setup automazione social via n8n:

4. **n8n FB publisher setup** — in `scripts/n8n/`: README operativo + schema Google Sheet + workflow JSON importabile per pubblicazione mirata 3 target (privati / PMI / artigiani) con approval gate via Telegram bot. **Non ancora committato** (vedi sotto, da committare prima del PC di casa).

## Cosa è davvero live oggi

| Area | Stato |
|---|---|
| 2 articoli blog crisi impresa | ✅ deployati su Vercel, accessibili pubblicamente |
| Sitemap + blog index aggiornati | ✅ |
| Pagina servizio `/crisi-di-impresa` con box "Approfondimenti" | ✅ |
| Tracking codice in produzione | ✅ deployato (ma dormiente, vedi sotto) |
| Cookie banner con consensi marketing/analytics separati | ✅ già attivo dalla v2.0 |

## Cosa è in codice ma NON ancora attivo

Richiede solo aggiunta di env vars su Vercel (production + preview):

```
NEXT_PUBLIC_GA4_ID                                   # GA4 Measurement ID, da creare
NEXT_PUBLIC_GOOGLE_ADS_ID                            # Google Ads, da creare
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_PURCHASE     # da Google Ads Conversions
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_LEAD         # da Google Ads Conversions
NEXT_PUBLIC_META_PIXEL_ID                            # da Meta Events Manager
META_PIXEL_ID                                        # = sopra, server-side
META_CAPI_ACCESS_TOKEN                               # segreto, da Meta Events Manager
META_CAPI_TEST_EVENT_CODE                            # solo per testing, vuoto in prod
```

Senza queste env vars, i componenti `<GoogleTag />` e `<MetaPixel />` non si attivano (graceful degradation). Documentazione completa in `.env.local.example` (ignorato da git per scelta, vedi `.gitignore`).

## Cosa NON è ancora committato

```
scripts/n8n/README.md                  # setup completo step-by-step
scripts/n8n/calendario-template.md     # schema Google Sheet + prompt AI per 3 target
scripts/n8n/workflow-publisher.json    # workflow n8n importabile
HANDOFF.md                             # questo file
```

Sono tutto materiale "setup automation social", coerente come commit atomico. **Prima cosa da fare al PC di casa: `git push` di questi.**

## Stato setup ads su Meta + Google

Il piano d'azione è stato già definito (per dettagli vedi `scripts/n8n/README.md` e le chat ChatGPT/Claude precedenti). Lo riassumo:

### 🔴 Bloccante in attesa Meta
**Conversione profilo professionale FB → Pagina classica** (ID profilo attuale `61588678684920`). Avviata? Verifica appena rientri. Meta richiede 24-72h. **Senza Pagina classica le Graph API non funzionano** e tutto il workflow n8n è inerte.

### 🟡 Da fare in parallelo mentre Meta lavora
| Task | Tempo | Bloccante? |
|---|---|---|
| Crea bot Telegram (`@BotFather`) — salva Bot Token + tuo Chat ID | 5 min | Sì per Telegram approval gate |
| Crea Google Sheet "AT Parma — Calendario Social" con schema da `scripts/n8n/calendario-template.md` | 30 min | Sì per workflow n8n |
| Riempi il Sheet con 4-6 righe pilota (prima 2 settimane post programmati) | 30 min | Sì |
| Pubblica i 3 post organici manuali (3 bozze nei messaggi chat precedenti) | 15 min × 3 giorni | No tecnicamente, ma SEO/algoritmo Meta sì |

### 🟢 Quando Pagina FB è migrata
| Task | Tempo |
|---|---|
| Crea Meta App `developers.facebook.com` | 30 min |
| Business Verification (richiede docs studio, p.iva) | 3-7 giorni Meta |
| App Review per permessi `pages_manage_posts` etc. | 3-5 giorni Meta |
| Genera Page Access Token long-lived (60gg) | 15 min |
| Setup env vars su Vercel per attivare tracking | 10 min |
| Import workflow n8n + configura 4 credentials | 2-3h |
| Test workflow end-to-end | 1h |

## Priorità per la prossima sessione (PC di casa)

### Priorità 1 — Chiudere setup n8n preparatorio
1. `git pull` (sincronizza)
2. `git push` del HANDOFF + `scripts/n8n/` (se non già fatto a fine di questa sessione)
3. Verifica stato migrazione Pagina FB
4. Crea bot Telegram + salva token in luogo sicuro (1Password, Bitwarden, ecc.)
5. Crea Google Sheet calendario + condividi con account che n8n usa

### Priorità 2 — Setup tracking ads dormiente
1. Apri `ads.google.com`, verifica/crea account Google Ads
2. Apri `analytics.google.com`, crea property GA4 per `atparma.com`
3. Linka GA4 → Google Ads
4. Apri `search.google.com/search-console`, verifica dominio e submit URL dei 2 nuovi articoli per indicizzazione
5. Imposta env vars su Vercel (NEXT_PUBLIC_GA4_ID, NEXT_PUBLIC_GOOGLE_ADS_ID, etc.)

### Priorità 3 — Quando Meta è OK
1. Setup Meta App + Pixel + CAPI token
2. Imposta env vars Meta su Vercel (META_PIXEL_ID, META_CAPI_ACCESS_TOKEN)
3. Test eventi su Meta Events Manager → Test Events
4. Import workflow n8n + test end-to-end

## Decisioni rimaste aperte dalla sessione 2026-04-22

Quelle del HANDOFF v2.0 restano in piedi (sotto). Non le riepilogo qui per non duplicare; vedi `docs/archivio/HANDOFF-2026-04-22.md` se serve.

| Tema (v2.0) | Stato oggi |
|---|---|
| entrypoint portale-first | invariato |
| prezzi sito codice-first | invariato (la matrice strict ha tenuto) |
| pagamenti portale | invariato |
| claim esperienza | invariato |

## Nuove decisioni emerse oggi

| Tema | Decisione aperta | Quando decidere |
|---|---|---|
| Cadenza post automatizzati | Default proposto 3/settimana (lun-mer-ven). Confermare dopo 4 settimane di test | Dopo primo mese di pubblicazione |
| Budget Meta Ads iniziale | Da definire dopo che la Pagina FB ha 50+ follower e 4-6 post organici visibili | Dopo migrazione Pagina + 2 settimane di post manuali |
| Budget Google Ads iniziale | Search ads "commercialista Parma", "730 online" — budget realistico 300-500 €/mese | Dopo setup GA4 + Google Ads collegati |
| Sostituzione foto AI esistenti sul sito | Le 4 foto reali della sede sono caricate ma NON ancora sostituite alle generated-*.png in homepage e blog | Da decidere a freddo (utente preferisce per ora tenere Duomo + Battistero) |
| Articoli figli del cluster crisi impresa | Concordato semplificato, art. 13 CCII, indici crisi, esdebitazione persone fisiche dopo prima esdebitazione | Da valutare dopo 4-8 settimane di osservazione ranking dei 2 pillar |

## File da leggere per primi quando riapri al PC di casa

1. **`HANDOFF.md`** (questo file) — stato consolidato + priorità
2. **`REPORT.md`** — fotografia tecnica del progetto, contiene changelog 2026-05-27 con l'architettura tracking
3. **`scripts/n8n/README.md`** — guida operativa setup automazione social (Meta App, Telegram, n8n)
4. **`scripts/n8n/calendario-template.md`** — schema Google Sheet + prompt AI per 3 target
5. **`CLAUDE.md`** — istruzioni globali del progetto sito

## Reference rapida

| Risorsa | URL |
|---|---|
| Repo | `https://github.com/hjkl1113/atparma-sito` |
| Dominio prod | `https://www.atparma.com` |
| Vercel deployments | dashboard Vercel, progetto `atparma-sito` |
| n8n | `https://n8n.atparma.com` (verificare credenziali admin) |
| Profilo FB attuale | ID `61588678684920` — in attesa migrazione a Pagina classica |
| Google Search Console | `https://search.google.com/search-console` |
| Meta Events Manager | `https://business.facebook.com/events_manager2/` (dopo creazione Business Manager) |
| Meta for Developers | `https://developers.facebook.com/apps/` |

## Conclusione pratica

La sessione 28/05 ha aggiunto **3 layer paralleli al progetto**: contenuto SEO (2 articoli blog), infrastruttura ads (foto + tracking + creatività), e setup automazione social (n8n). Il tutto è in `main` o pronto per esserlo.

Il collo di bottiglia adesso è **operativo, non tecnico**: aspettare che Meta completi la migrazione della Pagina FB e configurare gli account ads. Stimato 1-2 settimane per arrivare alla prima campagna live.

In attesa, la parte di SEO organico (articoli blog) lavora già: appena i 2 articoli sono indicizzati da Google, iniziano a portare traffico passivo per "sovraindebitamento Parma", "composizione negoziata Parma", "commercialista crisi impresa Parma" — keyword locali a bassa competizione, ranking realistico in 4-12 settimane.
