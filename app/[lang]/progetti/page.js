import {Hero,Photo,Cta} from '../../../components/ui'
import LazyVideo from '../../../components/LazyVideo'
import {dict,meta} from '../../../lib/i18n'
// Ogni foto compare una sola volta nel sito: qui copertura, accumulo e video (indici di prog.real.items)
const REALG=[[1,'copertura'],[3,'accumulo'],[5,'video']]
export async function generateMetadata({params}){const {lang}=await params;const t=dict(lang).prog;return meta(lang,'/progetti',t.meta.title,t.meta.desc)}
export default async function Page({params}){const {lang}=await params;const t=dict(lang);const p=t.prog
  return(<>
<Hero img="fv-tetto" h={p.hero} t={t} lang={lang}/>
<section><div className="w"><span className="eyebrow">{p.real.eyebrow}</span><h2>{p.real.h}</h2><p className="lead">{p.real.lead}</p>
<div className="gal">{REALG.map(([i,id])=>{const a=p.real.items[i];return <article key={a.t} className="tall">{id==='video'?<LazyVideo t={t.video} label={a.alt}/>:<Photo id={id} alt={a.alt} sizes="(max-width:820px) 100vw, 33vw"/>}<div className="t"><h3>{a.t}</h3><p>{a.p}</p></div></article>})}</div></div></section>
<section className="soft"><div className="w"><span className="eyebrow">{p.s1.eyebrow}</span><h2>{p.s1.h}</h2><p className="lead">{p.s1.lead}</p>
<div className="grid3" style={{marginTop:30}}>{p.items.map(a=><div className="card" key={a.t}><h3>{a.t}</h3><p>{a.p}</p></div>)}</div></div></section>
<Cta t={t} lang={lang} c={p.cta}/></>)}
