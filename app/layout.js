import Link from 'next/link'
import Nav from '../components/Nav'
import {SITE} from '../components/ui'
import './globals.css'
export const metadata={title:{default:'Matrix Group | Più competenze, una sola visione',template:'%s | Matrix Group'},description:'Consulenza e supporto di cantiere, sicurezza sul lavoro e servizio RSPP. Matrix Group: il punto da cui competenze e progetti prendono forma.'}
export const viewport={width:'device-width',initialScale:1,viewportFit:'cover'}
export default function Root({children}){return(<html lang="it"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/><link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet"/></head><body className="L2">
<div className="top"><div className="w"><span>Consulenza di cantiere · Sicurezza sul lavoro</span><span><a href={`tel:${SITE.tel.replace(/ /g,'')}`}>{SITE.tel}</a> · <a href={`mailto:${SITE.mail}`}>{SITE.mail}</a></span></div></div>
<header><div className="w"><Link className="logo" href="/" aria-label="Matrix Group, home"><picture><source srcSet="/logo-dark.svg" media="(prefers-color-scheme: dark)"/><img src="/logo.svg" alt="Matrix Group" width="1885" height="640"/></picture></Link><Nav/></div></header>
<main>{children}</main>
<footer><div className="w"><div className="cols"><div><img className="flogo" src="/logo-dark.svg" alt="Matrix Group" width="1885" height="640"/><p>Più competenze, una sola visione.<br/>{SITE.addr}</p></div><div><h4>Servizi</h4><Link href="/servizi">Consulenza di cantiere</Link><Link href="/servizi">Sicurezza e RSPP</Link></div><div><h4>Azienda</h4><Link href="/chi-siamo">Chi siamo</Link><Link href="/chi-siamo">Mission e vision</Link><Link href="/chi-siamo">Valori</Link></div><div><h4>Contatti</h4><Link href="/contatti">Scrivici</Link><a href={`mailto:${SITE.mail}`}>{SITE.mail}</a></div></div><div className="cp">© 2026 {SITE.name} · P.IVA {SITE.piva} · Sede legale: {SITE.addr}</div></div></footer>
</body></html>)}
