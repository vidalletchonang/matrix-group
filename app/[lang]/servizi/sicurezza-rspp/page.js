import {Hero,Photo,Cta,List} from '../../../../components/ui'
import {PH} from '../../../../lib/site'
import {dict,meta} from '../../../../lib/i18n'
export async function generateMetadata({params}){const {lang}=await params;const t=dict(lang).sic;return meta(lang,'/servizi/sicurezza-rspp',t.meta.title,t.meta.desc)}
export default async function Page({params}){const {lang}=await params;const t=dict(lang);const s=t.sic
  return(<>
<Hero img={PH.telaio} h={s.hero} t={t} lang={lang}/>
<section><div className="w grid2"><div><span className="eyebrow">{s.s1.eyebrow}</span><h2>{s.s1.h}</h2><p className="lead">{s.s1.lead}</p></div><Photo id={PH.caschi} alt={s.s1.alt}/></div></section>
<section><div className="w grid2 top"><div><span className="eyebrow">{s.list.eyebrow}</span><h2>{s.list.h}</h2><p className="small">{s.list.note}</p></div><List items={s.list.items}/></div></section>
<section><div className="w grid2"><div className="box"><span className="eyebrow">{s.box.eyebrow}</span><h3>{s.box.h}</h3><p>{s.box.p1}</p><p>{s.box.p2}</p></div><Photo id={PH.piani} alt={s.box.alt}/></div></section>
<Cta t={t} lang={lang} c={s.cta}/></>)}
