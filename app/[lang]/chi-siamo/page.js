import {Hero,Photo,Cta,List} from '../../../components/ui'
import {PH} from '../../../lib/site'
import {dict,meta} from '../../../lib/i18n'
export async function generateMetadata({params}){const {lang}=await params;const t=dict(lang).chi;return meta(lang,'/chi-siamo',t.meta.title,t.meta.desc)}
export default async function Page({params}){const {lang}=await params;const t=dict(lang);const c=t.chi
  return(<>
<Hero img={PH.team} h={c.hero} t={t} lang={lang}/>
<section><div className="w grid2"><div><span className="eyebrow">{c.s1.eyebrow}</span><h2>{c.s1.h}</h2><p className="lead">{c.s1.lead}</p></div><Photo id={PH.stretta} alt={c.s1.alt}/></div></section>
<section><div className="w grid2"><div className="card"><span className="eyebrow">Mission</span><h3>{c.mission}</h3></div><div className="card"><span className="eyebrow">Vision</span><h3>{c.vision}</h3></div></div></section>
<section><div className="w grid2 top"><div><span className="eyebrow">{c.ob.eyebrow}</span><h2>{c.ob.h}</h2><Photo id={PH.piani} alt={c.ob.alt} ratio="16/10"/></div><List items={c.ob.items}/></div></section>
<section id="valori"><div className="w"><span className="eyebrow">{c.val.eyebrow}</span><h2>{c.val.h}</h2><div className="grid3" style={{marginTop:30}}>{c.val.items.map(([a,b])=><div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
<Cta t={t} lang={lang}/></>)}
