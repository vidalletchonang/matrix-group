import Link from 'next/link'
import {notFound} from 'next/navigation'
import Nav from '../../components/Nav'
import {SITE} from '../../lib/site'
import {LANGS,dict,href,BASE} from '../../lib/i18n'
import {WaFloat} from '../../components/ui'
import '@fontsource-variable/archivo/wdth.css'
import '../globals.css'

export function generateStaticParams(){return LANGS.map(lang=>({lang}))}
export async function generateMetadata({params}){const {lang}=await params;const t=dict(lang)
  return{metadataBase:new URL(BASE),title:{default:t.meta.title,template:'%s | Matrix Group'},description:t.meta.desc,openGraph:{type:'website',locale:t.locale,siteName:'Matrix Group'}}}
export const viewport={width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#14302A'}

export default async function Root({children,params}){const {lang}=await params;if(!LANGS.includes(lang))notFound();const t=dict(lang);const f=t.footer;const tel=SITE.tel.replace(/ /g,'')
  return(<html lang={lang}><body>
<a className="skip" href="#main">{t.nav.skip}</a>
<div className="topbar"><div className="w"><span>{t.top}</span><span><a href={`tel:${tel}`}>{SITE.tel}</a> · <a href={`https://wa.me/${tel.replace('+','')}`} target="_blank" rel="noopener">WhatsApp</a> · <a href={`mailto:${SITE.mail}`}>{SITE.mail}</a></span></div></div>
<header><div className="w"><Link className="logo" href={href(lang,'/')} aria-label="Matrix Group, home"><img src="/logo.svg" alt="Matrix Group" width="1885" height="640"/></Link><Nav t={t.nav} lang={lang}/></div></header>
<main id="main">{children}</main>
<footer><div className="w"><div className="cols">
<div><img className="flogo" src="/logo-dark.svg" alt="Matrix Group" width="1885" height="640"/><p>{f.tag}<br/>{SITE.addr}</p></div>
<div><h4>{f.servizi}</h4><Link href={href(lang,'/servizi/consulenza-cantiere')}>{f.cons}</Link><Link href={href(lang,'/servizi/sicurezza-rspp')}>{f.sic}</Link><Link href={href(lang,'/progetti')}>{f.ambiti}</Link></div>
<div><h4>{f.azienda}</h4><Link href={href(lang,'/chi-siamo')}>{f.chi}</Link><Link href={href(lang,'/chi-siamo')+'#valori'}>{f.valori}</Link><Link href={href(lang,'/faq')}>{f.faq}</Link></div>
<div><h4>{f.contatti}</h4><Link href={href(lang,'/contatti')}>{f.scrivi}</Link><a href={`mailto:${SITE.mail}`}>{SITE.mail}</a><a href={`tel:${tel}`}>{t.ct.call}: {SITE.tel}</a><a href={`https://wa.me/${tel.replace('+','')}`} target="_blank" rel="noopener">WhatsApp</a><a href={`sms:${tel}`}>{t.ct.sms}</a></div>
</div><div className="cp"><span>© 2026 {SITE.name} · {f.piva} {SITE.piva} · {f.sede}: {SITE.addr}</span><span><Link href={href(lang,'/privacy')}>{f.privacy}</Link> · <Link href={href(lang,'/cookie-policy')}>{f.cookie}</Link></span></div></div></footer>
<WaFloat c={t.ct}/>
</body></html>)}
