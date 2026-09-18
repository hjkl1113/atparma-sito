# Search Console — configurazione (una volta sola, ~10 minuti)

Serve per far leggere i dati a un programma senza che nessuno debba fare il
login ogni volta. Si crea un "service account": un utente finto, di sola
lettura, che autorizzi sulla proprieta' come autorizzeresti un collaboratore.

**Il login lo devi fare tu: io non accedo ad account Google.**

---

## 1. Creare il service account (su Google Cloud)

1. Vai su **console.cloud.google.com** e accedi con l'account Google che
   possiede Search Console di atparma.com.
2. In alto, nel menu dei progetti, **Nuovo progetto**. Chiamalo `atparma-seo`.
   Se ne hai gia' uno va bene lo stesso.
3. Nella barra di ricerca in alto scrivi **Google Search Console API** e aprila.
   Premi **ABILITA**.
4. Sempre nella ricerca: **Account di servizio** (IAM e amministrazione >
   Account di servizio). Premi **+ CREA ACCOUNT DI SERVIZIO**.
   - Nome: `lettore-search-console`
   - Premi **CREA E CONTINUA**, poi **CONTINUA**, poi **FINE**
     (i due passaggi dei ruoli si saltano: non serve alcun ruolo)
5. Nell'elenco compare l'account appena creato, con un indirizzo del tipo
   `lettore-search-console@atparma-seo.iam.gserviceaccount.com`.
   **Copia quell'indirizzo**, serve al passo 2.
6. Clicca sull'account > scheda **CHIAVI** > **AGGIUNGI CHIAVE** >
   **Crea nuova chiave** > tipo **JSON** > **CREA**.
   Il file si scarica da solo.

## 2. Autorizzarlo su Search Console

1. Vai su **search.google.com/search-console**.
2. In basso a sinistra **Impostazioni** > **Utenti e autorizzazioni**.
3. **AGGIUNGI UTENTE**: incolla l'indirizzo copiato al passo 1.5.
4. Autorizzazione: **Con limitazioni** (basta e avanza: e' sola lettura).
5. **AGGIUNGI**.

## 3. Mettere la chiave al suo posto

Il file scaricato ha un nome lungo tipo `atparma-seo-1a2b3c4d5e6f.json`.
Spostalo qui e rinominalo:

    ~/.config/atparma/search-console.json

Da terminale, dopo averlo scaricato:

    mkdir -p ~/.config/atparma
    mv ~/Downloads/atparma-seo-*.json ~/.config/atparma/search-console.json
    chmod 600 ~/.config/atparma/search-console.json

**Quel file e' una credenziale: non va nel repo, non va sul server, non va in
mail.** Sta fuori dal progetto apposta.

## 4. Dirlo al programma

Nel `.env` degli script Ratio (lo stesso che usa gia' il motore delle news)
aggiungi due righe:

    SC_KEY_FILE=~/.config/atparma/search-console.json
    SC_SITE=https://www.atparma.com/

`SC_SITE` deve essere **identico** a come la proprieta' compare in Search
Console, barra finale compresa.

## 5. Provare

    cd ~/Progetti\ claude/atparma/sito/scripts/searchconsole
    python3 monitor.py --modo settimanale

Senza `--send` stampa e basta, non manda nulla. Se vedi i numeri, funziona.

Se esce **403**, il passo 2 non e' andato a buon fine: l'indirizzo del service
account non risulta fra gli utenti della proprieta'.

---

## Cosa fa, una volta acceso

| Quando | Cosa |
|---|---|
| Lunedi' 08:45 | Report della settimana: clic, impressioni, CTR, posizione, confronto con la settimana prima, pagine piu' viste e pagine in calo |
| Ogni giorno 08:45 | Silenzioso. Scrive **solo se** i clic del giorno crollano oltre il 50% sotto la media dei sette precedenti, o se le impressioni vanno a zero |

Il controllo giornaliero non manda i numeri di ieri di proposito: su un sito da
pochi clic al giorno sarebbe rumore, e una mail che arriva sempre uguale smette
di essere letta.

## Cosa NON puo' fare

Le **azioni manuali** (le penalizzazioni di Google) e il dettaglio degli
**errori di indicizzazione** non sono esposti da alcuna API pubblica. Restano
da guardare a mano, ogni tanto, in Search Console:

- *Sicurezza e azioni manuali*
- *Indicizzazione > Pagine*

Il report settimanale lo ricorda in fondo.
