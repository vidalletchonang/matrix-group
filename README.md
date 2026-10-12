# Matrix Group – sito Next.js

## Provare in locale
    npm install
    npm run dev      # http://localhost:3000

## Dove modificare
- Contatti (indirizzo, telefono, email): `components/ui.js` (oggetto SITE)
- Testi: `app/page.js`, `app/chi-siamo/page.js`, `app/servizi/page.js`
- Colori e grafica: `app/globals.css` (variabili in cima, accento #008080)

## Pubblicare su Vercel (gratis)
1. Carica questa cartella su un repository GitHub.
2. Su vercel.com: Add New > Project > importa il repository > Deploy.
3. Settings > Domains: aggiungi il tuo dominio. Vercel mostra i record DNS da inserire.

## Collegare il dominio Aruba
Nel pannello Aruba, Gestione DNS del dominio, inserisci ESATTAMENTE i valori mostrati da Vercel
(di solito: record A per il dominio principale e CNAME per "www").
Non toccare i record MX se usi la posta Aruba.

## Modulo contatti (invio email)
1. Crea un account su resend.com e verifica il dominio.
2. In Vercel: Settings > Environment Variables, aggiungi RESEND_API_KEY, MAIL_FROM, MAIL_TO (vedi .env.example).
3. Rifai il deploy.
