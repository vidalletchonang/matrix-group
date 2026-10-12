import {Hero,SITE} from '../../components/ui'
import ContactForm from '../../components/ContactForm'
export const metadata={title:'Contatti'}
export default function Page(){return(<>
<Hero n={10} title={<em>Contatti</em>} text="Raccontaci il tuo progetto o la tua esigenza."/>
<section><div className="w grid2"><div><span className="eyebrow">Matrix Group</span><h2>Parliamone.</h2><p>{SITE.addr}</p><p>{SITE.mail} · {SITE.tel}</p><p className="note">Indirizzo e recapiti sono segnaposto: modificali in components/ui.js.</p></div><ContactForm/></div></section></>)}
