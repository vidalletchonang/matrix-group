import {Hero,ContactButtons} from '../../../components/ui'
import ContactForm from '../../../components/ContactForm'
import {SITE,PH} from '../../../lib/site'
import {dict,meta,href} from '../../../lib/i18n'
export async function generateMetadata({params}){const {lang}=await params;const t=dict(lang).contatti;return meta(lang,'/contatti',t.meta.title,t.meta.desc)}
export default async function Page({params}){const {lang}=await params;const t=dict(lang);const c=t.contatti
  return(<>
<Hero img={PH.alba} h={c.hero} t={t} lang={lang}/>
<section><div className="w grid2 top"><div className="info"><span className="eyebrow">Matrix Group</span><h2>{c.h}</h2>
<p><strong>{SITE.name}</strong></p>
<p>{t.footer.sede}: {SITE.addr}</p>
<p>{t.footer.piva} {SITE.piva}</p>
<p><a href={`mailto:${SITE.mail}`}>{SITE.mail}</a></p>
<ContactButtons c={t.ct}/></div>
<div><span className="eyebrow">{c.write}</span><ContactForm t={t.form} privacyHref={href(lang,'/privacy')}/></div></div></section></>)}
