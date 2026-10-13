import {Hero} from '../../../components/ui'
import {dict,meta,Blocks} from '../../../lib/i18n'
export async function generateMetadata({params}){const {lang}=await params;const t=dict(lang).cookie;return meta(lang,'/cookie-policy',t.meta.title,t.meta.desc)}
export default async function Page({params}){const {lang}=await params;const t=dict(lang);const p=t.cookie
  return(<>
<Hero h={p.hero} t={t} lang={lang}/>
<section><div className="w prose"><p className="upd">{p.upd}</p>{t.legalNote&&<p className="note">{t.legalNote}</p>}<Blocks blocks={p.blocks} lang={lang}/></div></section></>)}
