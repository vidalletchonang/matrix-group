import Link from 'next/link'
import {Hero,Cta} from '../../../components/ui'
import {PH} from '../../../lib/site'
import {dict,meta,href} from '../../../lib/i18n'
export async function generateMetadata({params}){const {lang}=await params;const t=dict(lang).faq;return meta(lang,'/faq',t.meta.title,t.meta.desc)}
export default async function Page({params}){const {lang}=await params;const t=dict(lang);const f=t.faq
  return(<>
<Hero img="impalcatura" pos="50% 12%" h={f.hero} t={t} lang={lang}/>
<section><div className="w"><div className="faq">{f.items.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}</summary><p>{a}</p></details>)}</div>
<p className="small" style={{maxWidth:820}}>{f.note} <Link className="more" href={href(lang,'/contatti')}>{f.noteLink}</Link>.</p></div></section>
<Cta t={t} lang={lang}/></>)}
