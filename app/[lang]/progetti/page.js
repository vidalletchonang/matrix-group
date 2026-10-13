import {Hero,Photo,Cta} from '../../../components/ui'
import {PH} from '../../../lib/site'
import {dict,meta} from '../../../lib/i18n'
const IMG=[[PH.struttura,1],[PH.ferri],[PH.citta],[PH.ponteggi],[PH.industria],[PH.alba,1]]
export async function generateMetadata({params}){const {lang}=await params;const t=dict(lang).prog;return meta(lang,'/progetti',t.meta.title,t.meta.desc)}
export default async function Page({params}){const {lang}=await params;const t=dict(lang);const p=t.prog
  return(<>
<Hero img={PH.gru} h={p.hero} t={t} lang={lang}/>
<section><div className="w"><span className="eyebrow">{p.s1.eyebrow}</span><h2>{p.s1.h}</h2><p className="lead">{p.s1.lead}</p>
<div className="gal">{p.items.map((a,i)=><article key={a.t} className={IMG[i][1]?'wide':''}><Photo id={IMG[i][0]} alt={a.alt}/><div className="t"><h3>{a.t}</h3><p>{a.p}</p></div></article>)}</div>
<p className="note" style={{marginTop:34}}>{p.note}</p></div></section>
<Cta t={t} lang={lang} c={p.cta}/></>)}
