# Matrix Group – sito Next.js (IT · EN · FR · DE · ES)

## Provare in locale
    npm install
    npm run dev      # http://localhost:3000

## Dove modificare
- Dati aziendali, contatti, foto e video: `lib/site.js`
- Testi in ogni lingua: `content/it.js`, `content/en.js`, `content/fr.js`, `content/de.js`, `content/es.js`
  (stessa struttura in tutti i file: se aggiungi un testo in italiano, aggiungilo anche nelle altre lingue)
- Pagine: cartella `app/[lang]/`
- Colori e grafica: `app/globals.css` (variabili in cima, accento #008080)

## Lingue
L'italiano è servito senza prefisso (`/servizi`), le altre lingue con prefisso (`/en/servizi`, `/fr/servizi`…).
Lo gestisce `middleware.js`.

## Pubblicare su Vercel
Ogni modifica su GitHub (ramo main) viene pubblicata automaticamente da Vercel.

## Modulo contatti (invio email)
1. Crea un account su resend.com e verifica il dominio.
2. In Vercel: Settings > Environment Variables, aggiungi RESEND_API_KEY, MAIL_FROM, MAIL_TO (vedi .env.example).
3. Rifai il deploy.
