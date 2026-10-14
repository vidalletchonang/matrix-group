import {Hero,Cta,ServiceCards} from '../../../components/ui'
import {PH} from '../../../lib/site'
import {dict,meta} from '../../../lib/i18n'
export async function generateMetadata({params}){const {lang}=await params;const t=dict(lang).servizi;return meta(lang,'/servizi',t.meta.title,t.meta.desc)}
export default async function Page({params}){const {lang}=await params;const t=dict(lang);const s=t.servizi
  return(<>
<Hero img={PH.struttura} h={s.hero} t={t} lang={lang}/>
<section><div className="w"><span className="eyebrow">{s.s1.eyebrow}</span><h2>{s.s1.h}</h2><p className="lead">{s.s1.lead}</p><ServiceCards t={t} lang={lang} imgs={[PH.telaio,PH.gru]}/></div></section>
<section><div className="w"><span className="eyebrow">{s.per.eyebrow}</span><h2>{s.per.h}</h2><div className="grid3" style={{marginTop:30}}>{s.per.items.map(([a,b])=><div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div><p className="small">{s.per.note}</p></div></section>
<Cta t={t} lang={lang}/></>)}
