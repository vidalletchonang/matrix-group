import Link from 'next/link'
import {Hero,Photo,Cta,Concept,ServiceCards,Certs} from '../../components/ui'
import {PH} from '../../lib/site'
import {dict,href,meta} from '../../lib/i18n'
export async function generateMetadata({params}){const {lang}=await params;const t=dict(lang);return meta(lang,'/',{absolute:t.meta.title},t.meta.desc)}
export default async function Home({params}){const {lang}=await params;const t=dict(lang);const h=t.home
  return(<>
<Hero big img="ponteggio" pos="50% 38%" h={{title:h.title,text:h.text,alt:h.heroAlt}} t={t} lang={lang}/>
<section><div className="w"><span className="eyebrow">{h.s1.eyebrow}</span><h2>{h.s1.h}</h2><p className="lead">{h.s1.lead}</p><ServiceCards t={t} lang={lang}/></div></section>
<div className="mq" aria-hidden="true"><span>{h.mq.repeat(4)}</span><span>{h.mq.repeat(4)}</span></div>
<section><div className="w grid2"><div><span className="eyebrow">{h.name.eyebrow}</span><h2>{h.name.h}</h2><p className="lead">{h.name.lead}</p><Link className="more" href={href(lang,'/chi-siamo')}>{h.name.link}</Link></div><Concept labels={h.concept} aria={h.conceptAria}/></div></section>
<section><div className="w"><span className="eyebrow">{h.steps.eyebrow}</span><h2>{h.steps.h}</h2><div className="steps">{h.steps.items.map(([a,b])=><div key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
<section className="soft"><div className="w"><div className="head"><div><span className="eyebrow">{h.real.eyebrow}</span><h2>{h.real.h}</h2><p className="lead">{h.real.lead}</p></div><Link className="more" href={href(lang,'/progetti')}>{h.real.link}</Link></div>
<div className="real">{[['fv-tetto',6],['accumulo',3],['copertura',1]].map(([id,i])=><figure key={id}><Photo id={id} alt={t.prog.real.items[i].alt} sizes="(max-width:820px) 100vw, 33vw"/><figcaption>{t.prog.real.items[i].t}</figcaption></figure>)}</div>
<Certs c={t.certs} compact/></div></section>
<section className="band"><Photo className="" id={PH.tramonto} alt={h.band.alt}/><div className="w"><span className="eyebrow light">{h.band.eyebrow}</span><h2>{h.band.h}</h2><p>{h.band.p}</p><Link className="btn" href={href(lang,'/servizi/sicurezza-rspp')}>{h.band.btn}</Link></div></section>
<section className="deep"><div className="w"><span className="eyebrow light">{h.why.eyebrow}</span><h2>{h.why.h}</h2><div className="vals">{h.why.items.map(([a,b])=><div key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
<Cta t={t} lang={lang}/></>)}
