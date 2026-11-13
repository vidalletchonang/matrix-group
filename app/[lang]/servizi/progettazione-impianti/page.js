import {Hero,Cta,List} from '../../../../components/ui'
import {PH} from '../../../../lib/site'
import {dict,meta} from '../../../../lib/i18n'
export async function generateMetadata({params}){const {lang}=await params;const t=dict(lang).prg;return meta(lang,'/servizi/progettazione-impianti',t.meta.title,t.meta.desc)}
export default async function Page({params}){const {lang}=await params;const t=dict(lang);const s=t.prg
  return(<>
<Hero img={PH.industria} h={s.hero} t={t} lang={lang}/>
<section><div className="w"><span className="eyebrow">{s.s1.eyebrow}</span><h2>{s.s1.h}</h2><p className="lead">{s.s1.lead}</p>
<div className="steps three">{s.fasi.items.map(([a,b])=><div key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
<section className="soft"><div className="w"><span className="eyebrow">{s.aree.eyebrow}</span><h2>{s.aree.h}</h2>
<div className="grid3" style={{marginTop:30}}>{s.aree.items.map(a=><div className="card" key={a.t}><h3>{a.t}</h3><p>{a.p}</p><List items={a.l}/></div>)}</div></div></section>
<section><div className="w"><div className="box"><span className="eyebrow">{s.box.eyebrow}</span><h3>{s.box.h}</h3><p>{s.box.p1}</p><p>{s.box.p2}</p></div></div></section>
<Cta t={t} lang={lang} c={s.cta}/></>)}
