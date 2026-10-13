import Link from 'next/link'
import {Hero,SITE} from '../../components/ui'
export const metadata={title:'Cookie policy',description:'Informazioni sull\'uso dei cookie sul sito di Matrix Group.'}
export default function Page(){return(<>
<Hero eyebrow="Cookie" title={<>Cookie <em>policy</em></>} text="Come questo sito utilizza cookie e tecnologie simili."/>
<section><div className="w prose">
<p className="upd">Ultimo aggiornamento: 13 ottobre 2026</p>
<h2>Che cosa sono i cookie</h2>
<p>I cookie sono piccoli file di testo che i siti visitati inviano al browser e che vengono memorizzati sul dispositivo, per essere poi ritrasmessi agli stessi siti alla visita successiva.</p>
<h2>Cookie utilizzati da questo sito</h2>
<p>Questo sito <strong>non utilizza cookie di profilazione</strong>, né strumenti di statistica o di marketing, e non installa cookie propri.</p>
<p>Per mostrare immagini e video il sito si collega a servizi esterni (Unsplash e Pexels). Questi servizi possono utilizzare esclusivamente cookie tecnici necessari all'erogazione e alla sicurezza dei contenuti, per i quali non è richiesto il consenso. Per questo motivo il sito non mostra un banner per il consenso ai cookie.</p>
<h2>Come gestire i cookie</h2>
<p>Puoi in ogni momento cancellare o bloccare i cookie dalle impostazioni del tuo browser. Il blocco dei cookie tecnici di terze parti potrebbe impedire la corretta visualizzazione di alcune immagini o video.</p>
<h2>Titolare e contatti</h2>
<p>{SITE.name}, {SITE.addr}. Per informazioni scrivi a <a href={`mailto:${SITE.mail}`}>{SITE.mail}</a>. Per maggiori dettagli sul trattamento dei dati personali consulta l'<Link href="/privacy">informativa privacy</Link>.</p>
</div></section></>)}
