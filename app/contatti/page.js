import {Hero,SITE,PH} from '../../components/ui'
import ContactForm from '../../components/ContactForm'
export const metadata={title:'Contatti',description:'Contatta Matrix Group per consulenza di cantiere, sicurezza sul lavoro e servizio RSPP. Sede legale a Modena.'}
export default function Page(){return(<>
<Hero img={PH.alba} alt="Cantiere con gru all'alba" eyebrow="Contatti" title={<>Parliamo del <em>tuo progetto</em></>} text="Raccontaci il cantiere o l'esigenza di sicurezza della tua impresa: ti ricontattiamo al più presto."/>
<section><div className="w grid2 top"><div className="info"><span className="eyebrow">Matrix Group</span><h2>Parliamone.</h2>
<p><strong>{SITE.name}</strong></p>
<p>Sede legale: {SITE.addr}</p>
<p>P.IVA {SITE.piva}</p>
<p><a href={`mailto:${SITE.mail}`}>{SITE.mail}</a> · <a href={`tel:${SITE.tel.replace(/ /g,'')}`}>{SITE.tel}</a></p>
<p className="note">Telefono ed email sono segnaposto: modificali in components/ui.js.</p></div>
<div><span className="eyebrow">Scrivici</span><ContactForm/></div></div></section></>)}
