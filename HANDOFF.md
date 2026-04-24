# HANDOFF — STATO CONSOLIDATO E PROSSIMI PASSI

**Data:** 2026-04-22  
**Versione:** 2.0  
**Nota:** i file precedenti sono stati archiviati senza modifiche in `docs/archivio/`.

## Dove siamo messi

- `Sito:` live, ricco, commercialmente forte, ma con funnel e pricing non ancora completamente riallineati
- `Portale:` live, molto avanzato, ma non ancora chiuso nei flussi pubblici e nei gate finali
- `Integrazione:` e' oggi il collo di bottiglia numero uno

## Cosa e' davvero live

### Sito
- catalogo servizi attivo
- pagine prodotto
- landing macro-sezioni servizi (`/servizi/dichiarazioni`, `/servizi/professionista`, `/servizi/artigiani-commercianti`)
- Stripe + PayPal
- privacy / sicurezza / cookie banner
- tool gratuiti e contenuti di funnel

### Portale
- auth / onboarding base
- clienti / anagrafica
- documenti
- billing / proforme
- pratiche / kanban
- quote / preventivi
- firma OTP / FEA
- settings studio
- tools Sprint A Fase L

### Infrastruttura / deliverability
- `atparma.com` autenticato su Brevo
- `SPF` corretto
- `DMARC` presente (`p=none`)

## Cosa e' live ma incompleto

| Area | Gap |
|---|---|
| Prezzi sito | source-of-truth non unificata |
| Checkout sito | post-acquisto ancora manuale verso il portale |
| CTA portale-first | dominio sito riallineato, ma funnel service-based ancora non congelato end-to-end |
| Pagamenti portale | memoria decisionale non congelata |
| Compliance | vari gate ancora aperti |

## Blocchi veri

1. **Ponte sito -> portale non chiuso**
   - webhook sito non crea account/client nel portale
   - onboarding servizio-specifici del portale non trovati nel codice
   - CTA sito puntano a `clienti.atparma.com/login?next=/onboarding?service=...`, ma il flusso service-based del portale non e' ancora memoria canonica chiusa

2. **Source-of-truth prezzi del sito non pulita**
   - `app/lib/prezzi-default.ts` = catalogo reale di fatto
   - `/api/prezzi` = non guida davvero tutti i prezzi mostrati
   - `/api/checkout` ha fallback legacy con prezzi vecchi

3. **Memoria progetto frammentata**
   - vecchi `REPORT/HANDOFF` contenevano prezzi e funnel ormai superati
   - il nuovo `REPORT.md` va letto prima di nuove sessioni

4. **Pagamenti portale da congelare**
   - O-1/O-2 e SDD hanno avuto piu' evoluzioni della memoria ufficiale

## Priorita' 1

1. sistemare i CTA del sito verso un entrypoint reale del portale
2. decidere e congelare il flusso minimo `sito -> portale`
3. unificare davvero i prezzi del sito
4. riallineare la memoria pagamenti del portale

## Priorita' 2

1. chiudere i gate compliance piu' critici
2. verificare worktree locali non ancora assorbiti
3. pulire i file stale nei repo dopo consolidamento

## Priorita' 3

1. documentale gestito finale
2. stream SaaS / multi-tenant avanzato
3. affinamento commerciale successivo

## Decisioni da prendere

| Tema | Decisione aperta |
|---|---|
| entrypoint portale-first | hotfix minimal o onboarding specifici veri |
| prezzi sito | codice-first puro o fonte unica via API/blob |
| pagamenti portale | congelare MVP e aggiornarne i docs |
| claim esperienza | uniformare dopo verifica dato reale |

## File da leggere per primi

1. `REPORT.md`
2. `HANDOFF.md`
3. `CLAUDE.md`

## Conclusione pratica

Il progetto non ha un problema di base prodotto. Ha un problema di allineamento.
Prima di nuove feature importanti bisogna:

1. consolidare la memoria
2. chiudere il ponte `sito -> portale`
3. ripulire il sistema prezzi
4. congelare i pagamenti del portale
