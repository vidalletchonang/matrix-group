import {Hero,Photo,Cta,PH} from '../../components/ui'
export const metadata={title:'Progetti e ambiti di intervento',description:'I contesti in cui Matrix Group offre consulenza di cantiere e supporto alla sicurezza: edilizia residenziale, strutture, cantieri industriali, riqualificazioni e aziende.'}
const AMB=[
  {img:PH.struttura,alt:'Edificio residenziale in costruzione',t:'Edilizia residenziale',p:'Nuove costruzioni e interventi su edifici residenziali: pianificazione delle fasi, organizzazione delle lavorazioni e coordinamento operativo.',wide:true},
  {img:PH.ferri,alt:'Posa dei ferri di armatura',t:'Strutture e opere in cemento armato',p:'Supporto nelle fasi strutturali, dove sequenze di lavoro e sicurezza sono più delicate.'},
  {img:PH.citta,alt:'Gru e palazzi in costruzione in città',t:'Cantieri urbani',p:'Cantieri in contesti complessi, con spazi ridotti, interferenze e molte figure coinvolte.'},
  {img:PH.ponteggi,alt:'Operai al lavoro su ponteggi',t:'Riqualificazioni e ristrutturazioni',p:'Interventi su edifici esistenti, con attenzione alle lavorazioni in quota e alle interferenze.'},
  {img:PH.industria,alt:'Casco di protezione appeso in un ambiente industriale',t:'Aziende e ambienti produttivi',p:'Consulenza sulla sicurezza aziendale: valutazione dei rischi, procedure, formazione e servizio RSPP.'},
  {img:PH.alba,alt:'Gru su un cantiere con fondazioni in cemento all\'alba',t:'Grandi cantieri e infrastrutture',p:'Affiancamento su fasi specifiche o criticità puntuali, anche in cantieri di aziende esterne.',wide:true},
]
export default function Page(){return(<>
<Hero img={PH.gru} alt="Gru a torre vista dal basso" eyebrow="Progetti" title={<>Dove <em>interveniamo</em></>} text="Gli ambiti in cui mettiamo a disposizione consulenza, organizzazione e supporto alla sicurezza."/>
<section><div className="w"><span className="eyebrow">Ambiti di intervento</span><h2>Ogni cantiere è diverso. Il metodo resta.</h2><p className="lead">Dal singolo edificio residenziale all'azienda produttiva: ci adattiamo al contesto, alle persone e alle responsabilità di ciascun progetto.</p>
<div className="gal">{AMB.map(a=><article key={a.t} className={a.wide?'wide':''}><Photo id={a.img} alt={a.alt}/><div className="t"><h3>{a.t}</h3><p>{a.p}</p></div></article>)}</div>
<p className="note" style={{marginTop:34}}>Le prime realizzazioni seguite da Matrix Group saranno pubblicate in questa pagina. Le immagini sono rappresentative degli ambiti di intervento.</p></div></section>
<Cta title={<>Hai un progetto <em>in partenza?</em></>} text="Raccontaci di che cosa si tratta: valutiamo insieme come possiamo affiancarti."/></>)}
