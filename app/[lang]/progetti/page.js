import {Hero,Photo,Cta,Certs} from '../../../components/ui'
import LazyVideo from '../../../components/LazyVideo'
import {PH} from '../../../lib/site'
import {dict,meta} from '../../../lib/i18n'
const REALG=[['piattaforma',1],['copertura'],['ponteggio'],['accumulo'],['fv-impianto'],['video',1],['fv-tetto']]
const IMG=[[PH.struttura,1],[PH.ferri],[PH.citta],[PH.ponteggi],[PH.industria],[PH.alba,1]]
export async function generateMetadata({params}){const {lang}=await params;const t=dict(lang).prog;return meta(lang,'/progetti',t.meta.title,t.meta.desc)}
export default async function Page({params}){const {lang}=await params;const t=dict(lang);const p=t.prog
  return(<>
<Hero img="fv-tetto" h={p.hero} t={t} lang={lang}/>
<section><div className="w"><span className="eyebrow">{p.real.eyebrow}</span><h2>{p.real.h}</h2><p className="lead">{p.real.lead}</p>
<div className="gal">{p.real.items.map((a,i)=>{const [id,w]=REALG[i];return <article key={a.t} className={w?'wide':''}>{id==='video'?<LazyVideo t={t.video} label={a.alt}/>:<Photo id={id} alt={a.alt} sizes={w?'(max-width:820px) 100vw, 66vw':'(max-width:820px) 100vw, 33vw'}/>}<div className="t"><h3>{a.t}</h3><p>{a.p}</p></div></article>})}</div></div></section>
<section className="soft"><div className="w"><Certs c={t.certs}/></div></section>
<section><div className="w"><span className="eyebrow">{p.s1.eyebrow}</span><h2>{p.s1.h}</h2><p className="lead">{p.s1.lead}</p>
<div className="gal">{p.items.map((a,i)=><article key={a.t} className={IMG[i][1]?'wide':''}><Photo id={IMG[i][0]} alt={a.alt}/><div className="t"><h3>{a.t}</h3><p>{a.p}</p></div></article>)}</div>
<p className="note" style={{marginTop:34}}>{p.note}</p></div></section>
<Cta t={t} lang={lang} c={p.cta}/></>)}
