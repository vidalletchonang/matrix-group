import Link from 'next/link'
import {Hero,Photo,Cta,Concept,ServiceCards} from '../../components/ui'
import HeroVideo from '../../components/HeroVideo'
import {PH} from '../../lib/site'
import {dict,href,meta} from '../../lib/i18n'
export async function generateMetadata({params}){const {lang}=await params;const t=dict(lang);return meta(lang,'/',{absolute:t.meta.title},t.meta.desc)}
export default async function Home({params}){const {lang}=await params;const t=dict(lang);const h=t.home
  return(<>
<Hero big h={{title:h.title,text:h.text}} t={t} lang={lang}><HeroVideo t={t.video}/></Hero>
<section><div className="w"><span className="eyebrow">{h.s1.eyebrow}</span><h2>{h.s1.h}</h2><p className="lead">{h.s1.lead}</p><ServiceCards t={t} lang={lang}/></div></section>
<div className="mq" aria-hidden="true"><span>{h.mq.repeat(4)}</span><span>{h.mq.repeat(4)}</span></div>
<section><div className="w grid2"><div><span className="eyebrow">{h.name.eyebrow}</span><h2>{h.name.h}</h2><p className="lead">{h.name.lead}</p><Link className="more" href={href(lang,'/chi-siamo')}>{h.name.link}</Link></div><Concept labels={h.concept} aria={h.conceptAria}/></div></section>
<section><div className="w"><span className="eyebrow">{h.steps.eyebrow}</span><h2>{h.steps.h}</h2><div className="steps">{h.steps.items.map(([a,b])=><div key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
<section className="band"><Photo className="" id={PH.tramonto} alt={h.band.alt}/><div className="w"><span className="eyebrow light">{h.band.eyebrow}</span><h2>{h.band.h}</h2><p>{h.band.p}</p><Link className="btn" href={href(lang,'/servizi/sicurezza-rspp')}>{h.band.btn}</Link></div></section>
<section className="deep"><div className="w"><span className="eyebrow light">{h.why.eyebrow}</span><h2>{h.why.h}</h2><div className="vals">{h.why.items.map(([a,b])=><div key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
<Cta t={t} lang={lang}/></>)}
