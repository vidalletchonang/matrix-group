import Link from 'next/link'
import Nav from '../components/Nav'
import {SITE} from '../components/ui'
import '@fontsource-variable/fraunces/wght.css'
import '@fontsource-variable/fraunces/wght-italic.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import './globals.css'
export const metadata={metadataBase:new URL('https://matrix-group-4sfs.vercel.app'),title:{default:'Matrix Group | Più competenze, una sola visione',template:'%s | Matrix Group'},description:'Consulenza e supporto di cantiere, sicurezza sul lavoro e servizio RSPP a Modena. Matrix Group: il punto da cui competenze e progetti prendono forma.',openGraph:{type:'website',locale:'it_IT',siteName:'Matrix Group'}}
export const viewport={width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#14302A'}
export default function Root({children}){return(<html lang="it"><body className="L2">
<a className="skip" href="#main">Vai al contenuto</a>
<div className="top"><div className="w"><span>Consulenza di cantiere · Sicurezza sul lavoro · Modena</span><span><a href={`tel:${SITE.tel.replace(/ /g,'')}`}>{SITE.tel}</a> · <a href={`mailto:${SITE.mail}`}>{SITE.mail}</a></span></div></div>
<header><div className="w"><Link className="logo" href="/" aria-label="Matrix Group, home"><picture><source srcSet="/logo-dark.svg" media="(prefers-color-scheme: dark)"/><img src="/logo.svg" alt="Matrix Group" width="1885" height="640"/></picture></Link><Nav/></div></header>
<main id="main">{children}</main>
<footer><div className="w"><div className="cols">
<div><img className="flogo" src="/logo-dark.svg" alt="Matrix Group" width="1885" height="640"/><p>Più competenze, una sola visione.<br/>{SITE.addr}</p></div>
<div><h4>Servizi</h4><Link href="/servizi/consulenza-cantiere">Consulenza di cantiere</Link><Link href="/servizi/sicurezza-rspp">Sicurezza e RSPP</Link><Link href="/progetti">Ambiti di intervento</Link></div>
<div><h4>Azienda</h4><Link href="/chi-siamo">Chi siamo</Link><Link href="/chi-siamo#valori">Valori</Link><Link href="/faq">Domande frequenti</Link></div>
<div><h4>Contatti</h4><Link href="/contatti">Scrivici</Link><a href={`mailto:${SITE.mail}`}>{SITE.mail}</a><a href={`tel:${SITE.tel.replace(/ /g,'')}`}>{SITE.tel}</a></div>
</div><div className="cp"><span>© 2026 {SITE.name} · P.IVA {SITE.piva} · Sede legale: {SITE.addr}</span><span><Link href="/privacy">Privacy</Link> · <Link href="/cookie-policy">Cookie</Link></span></div></div></footer>
</body></html>)}
