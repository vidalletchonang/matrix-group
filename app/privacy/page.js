import Link from 'next/link'
import {Hero,SITE} from '../../components/ui'
export const metadata={title:'Informativa privacy',description:'Informativa sul trattamento dei dati personali ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679.'}
export default function Page(){return(<>
<Hero eyebrow="Privacy" title={<>Informativa <em>privacy</em></>} text="Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR)."/>
<section><div className="w prose">
<p className="upd">Ultimo aggiornamento: 13 ottobre 2026</p>
<h2>1. Titolare del trattamento</h2>
<p>{SITE.name}, P.IVA {SITE.piva}, con sede legale in {SITE.addr}. Per qualsiasi richiesta relativa ai dati personali puoi scrivere a <a href={`mailto:${SITE.mail}`}>{SITE.mail}</a>.</p>
<h2>2. Quali dati trattiamo</h2>
<ul>
<li><strong>Dati forniti volontariamente</strong> tramite il modulo di contatto o via email: nome e cognome, indirizzo email, telefono (facoltativo), tipo di servizio richiesto ed eventuale messaggio.</li>
<li><strong>Dati di navigazione</strong>: i sistemi informatici che fanno funzionare il sito acquisiscono, nel normale esercizio, alcuni dati tecnici (ad esempio indirizzo IP, tipo di browser, data e ora della richiesta, pagine visitate), utilizzati per garantire il funzionamento e la sicurezza del sito.</li>
</ul>
<p>Ti chiediamo di non inserire nel messaggio dati particolari (ad esempio dati relativi alla salute) non necessari alla tua richiesta.</p>
<h2>3. Finalità e base giuridica</h2>
<table><thead><tr><th>Finalità</th><th>Base giuridica</th></tr></thead><tbody>
<tr><td>Rispondere alle richieste di informazioni e di consulenza inviate tramite il sito</td><td>Esecuzione di misure precontrattuali adottate su tua richiesta (art. 6, par. 1, lett. b GDPR)</td></tr>
<tr><td>Garantire il funzionamento e la sicurezza del sito</td><td>Legittimo interesse del titolare (art. 6, par. 1, lett. f GDPR)</td></tr>
<tr><td>Adempiere a obblighi di legge e, se necessario, tutelare i propri diritti</td><td>Obbligo legale e legittimo interesse (art. 6, par. 1, lett. c ed f GDPR)</td></tr>
</tbody></table>
<p>Il conferimento dei dati richiesti nel modulo (nome ed email) è necessario per poterti rispondere; in loro assenza non potremo dare seguito alla richiesta. Il sito non utilizza i dati per finalità di marketing né per profilazione.</p>
<h2>4. Modalità e durata della conservazione</h2>
<p>I dati sono trattati con strumenti elettronici e con misure di sicurezza adeguate. I dati delle richieste di contatto sono conservati per il tempo necessario a gestire la richiesta e, se non segue un rapporto contrattuale, non oltre 24 mesi dall'ultimo contatto. I dati di navigazione sono conservati dal fornitore di hosting per il periodo limitato previsto dai suoi sistemi.</p>
<h2>5. Destinatari dei dati</h2>
<p>I dati possono essere trattati, in qualità di responsabili del trattamento, da fornitori di servizi tecnici necessari al funzionamento del sito:</p>
<ul>
<li><strong>Vercel Inc.</strong> – hosting del sito;</li>
<li><strong>Resend</strong> – servizio di invio delle email generate dal modulo di contatto, ove attivo.</li>
</ul>
<p>Il sito mostra inoltre immagini e video ospitati da servizi terzi (<strong>Unsplash</strong> e <strong>Pexels</strong>): per visualizzarli il tuo browser si collega ai loro server, che ricevono il tuo indirizzo IP. Le font utilizzate sono invece ospitate direttamente sul sito.</p>
<p>I dati non sono diffusi. Alcuni fornitori hanno sede negli Stati Uniti: in tal caso il trasferimento avviene sulla base di una decisione di adeguatezza della Commissione europea (EU-US Data Privacy Framework) o di clausole contrattuali standard, ai sensi degli artt. 45 e 46 GDPR.</p>
<h2>6. I tuoi diritti</h2>
<p>Puoi esercitare in qualsiasi momento i diritti previsti dagli artt. 15-22 GDPR: accesso, rettifica, cancellazione, limitazione del trattamento, portabilità dei dati e opposizione al trattamento basato sul legittimo interesse, scrivendo a <a href={`mailto:${SITE.mail}`}>{SITE.mail}</a>.</p>
<p>Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>).</p>
<h2>7. Cookie</h2>
<p>Per le informazioni sui cookie consulta la <Link href="/cookie-policy">cookie policy</Link>.</p>
</div></section></>)}
