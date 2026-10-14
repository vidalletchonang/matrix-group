import Link from 'next/link'
import {Hero,Photo,Cta,List} from '../../../../components/ui'
import {PH} from '../../../../lib/site'
import {dict,meta,href} from '../../../../lib/i18n'
export async function generateMetadata({params}){const {lang}=await params;const t=dict(lang).cons;return meta(lang,'/servizi/consulenza-cantiere',t.meta.title,t.meta.desc)}
export default async function Page({params}){const {lang}=await params;const t=dict(lang);const c=t.cons
  return(<>
<Hero img={PH.sopralluogo} h={c.hero} t={t} lang={lang}/>
<section><div className="w grid2"><div><span className="eyebrow">{c.s1.eyebrow}</span><h2>{c.s1.h}</h2><p className="lead">{c.s1.lead}</p></div><Photo id={PH.riunione} alt={c.s1.alt}/></div></section>
<section><div className="w grid2 top"><div><span className="eyebrow">{c.list.eyebrow}</span><h2>{c.list.h}</h2><p className="small">{c.list.note}</p></div><List items={c.list.items}/></div></section>
<section><div className="w"><span className="eyebrow">{c.when.eyebrow}</span><h2>{c.when.h}</h2><div className="steps">{c.when.items.map(([a,b])=><div key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
<section className="band"><Photo className="" id={PH.ferri} alt={c.band.alt}/><div className="w"><span className="eyebrow light">{c.band.eyebrow}</span><h2>{c.band.h}</h2><p>{c.band.p}</p><Link className="btn" href={href(lang,'/servizi/sicurezza-rspp')}>{c.band.btn}</Link></div></section>
<Cta t={t} lang={lang} c={c.cta}/></>)}
