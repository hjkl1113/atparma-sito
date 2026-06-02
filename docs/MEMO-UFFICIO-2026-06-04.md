# Memo ufficio — giovedì 4 giugno 2026

Cose da chiudere domattina in ufficio prima di mercoledì 4/6 sera. **Tempo
totale stimato: 1.5h** se prendi le cose una dopo l'altra senza distrazioni.

## 1. Domande da fare a Pietro Franzosi (10 min)

- [ ] **"Sara richiama entro 24h"**: confermi che è una garanzia operativa per i lead social? (citato in checkout IMU + flussi DM stories — se non garantito ammorbidisco a "ti ricontattiamo entro 24h lavorative")
- [ ] **Foto profilo professionale tua + Aldo**: ne abbiamo già di disponibili o le scattiamo? Servono per la sezione Team sul sito (chiude un buco grosso: oggi nominiamo voi due ma nessuno vede la faccia). Format: ritratto verticale tipo LinkedIn, sfondo neutro (anche cortile Borgo Riccio se vuoi mood "ambientato")
- [ ] **3-5 clienti per testimonianza pubblica**: hai 3-5 clienti che ti firmerebbero una citazione pubblica (nome + città + servizio + 1 frase tipo "lo studio mi ha aiutato a…")? Servono per chiudere il vuoto "200 aziende ma nessuno parla"
- [ ] **Approvazione nuovi imponibili** sui 5 prezzi gestionali (vedi punto 4 sotto)

## 2. Cose da fare con Sara (15 min)

- [ ] **Lista 30 account adiacenti IT** (cat 1-2-3-5 in `scripts/n8n/account-adiacenti-IT.md`): 15 min di ricerca FB/IG/LinkedIn per micro-commercialisti EM, consulenti del lavoro Parma, avvocati tributaristi, notai locali. Salva in un Note (non in git: profili pubblici terzi)
- [ ] **POST 1 (Reel 730 "3 segnali paghi troppe tasse")**: produrre il video → copy completa è in `scripts/n8n/post-setup-9.md` POST 1. Pubblicazione **lunedì 8/6 alle 09:00** (fra 5 giorni). Va girato + montato entro venerdì
- [ ] **Routine commenti 30 min/giorno**: parte da **lun 8/6**. 5 commenti/giorno su account adiacenti, mai generici. Vedi anti-pattern in `account-adiacenti-IT.md`

## 3. Step Meta App / Business Manager (15 min)

Bloccato da ieri sul sanity check Business Manager. Aprire `business.facebook.com` da Chrome con profilo AT loggato. In alto a sinistra c'è il selettore Portfolio Business.

- [ ] **Verifica se esiste già un BM "A.T. Consulting Parma"**:
  - Solo ZenPaw → procediamo a creare nuovo BM AT (5 min, su business.facebook.com)
  - Esiste già con altro nome → linkiamo a quello
  - C'è uno di Franzosi/Ponzi → decidiamo se collegarci o crearne uno dedicato
- [ ] **Una volta deciso il BM**, torna su `developers.facebook.com/apps/` e riprendi il wizard "Crea app" da step 5 (Portfolio business). Tutti gli step nel prompt che hai dato a Claude for Chrome ieri sera

Tempo Meta totale: 30 min se tutto liscio, +3-7gg di attesa Business Verification.

## 4. Fix sito (analisi OpenAI + mia) — non urgente ma da decidere

5 prezzi attualmente "gestionali" (€xxx,40 / xxx,60) — derivano da imponibile tondo × 1,22. Da ritarare imponibile in modo che il totale IVA inclusa cada su numero tondo. Solo 5 voci, decisione di 5 min:

| ID prezzo | Oggi totale | Oggi imponibile | Proposta totale | Nuovo imponibile |
|---|---|---|---|---|
| `apertura-prof-sola` | €146,40 | €120,00 | **€149,00** | €122,13 |
| `piva-prof-semp` | €1610,40 | €1320,00 | **€1599,00** | €1310,66 |
| `cont-prof-forf` | €402,60 | €330,00 | **€399,00** | €327,05 |
| `cont-prof-semp` | €1464,00 | €1200,00 | **€1490,00** | €1221,31 |
| `piva-art-semp` | €2074,00 | €1700,00 | **€2099,00** | €1720,49 |

**Decisione**: applico i nuovi prezzi (impatto: sito + portale clienti vanno allineati)? O lasciamo i gestionali per coerenza back-office? Scelta tua + Franzosi.

## 5. Cose già fatte (per memoria, non richiedono azione)

- ✅ Bot Telegram AT creato + token in `.env.local`
- ✅ Google Sheet "AT Parma — Calendario Social" creato + 30 post importati
- ✅ 9 post setup con copy pronta (`scripts/n8n/post-setup-9.md`)
- ✅ Piano editoriale 8 settimane (21 post Mac dal 29/6, `scripts/n8n/piano-editoriale-8-settimane.md`)
- ✅ Foto sede ruotate landscape (commit `d10ce09`)
- ✅ Prezzi 2 decimali + IVA esposta ovunque (commit `7739275`)
- ✅ Claim non dimostrabili rimossi dai post setup (commit `98c179d`)

## 6. Calendario prossimi 7 giorni

| Quando | Cosa | Owner |
|---|---|---|
| Gio 4/6 | Memo + call con Pietro/Aldo (questo doc) | Tu |
| Ven 5/6 | Produzione video POST 1 + ricerca account adiacenti | Sara |
| Sab-Dom 6-7/6 | Riposo / produzione altri post sett 1 (POST 2, POST 6) | Sara |
| **Lun 8/6 09:00** | **POST 1 live + routine commenti parte** | Sara |
| Mer 10/6 09:00 | POST 2 (Carosello checklist 730) | Sara |
| Ven 12/6 09:00 | POST 6 (Reel IMU comodato, anticipato per scadenza 16/6) | Sara |

## 7. Domande aperte / decisioni da prendere

- [ ] Imponibili nuovi (sì/no, vedi punto 4)
- [ ] Foto Team disponibili o da scattare?
- [ ] Quali 3-5 clienti firmerebbero testimonianza pubblica?
- [ ] IG dedicato AT: lo creiamo ora o aspettiamo sett 8+?
