'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useEffect,useState} from 'react'
const LANGS=['it','en','fr','de','es']
const NAMES={it:'Italiano',en:'English',fr:'Français',de:'Deutsch',es:'Español'}
const hr=(l,p)=>l==='it'?p:`/${l}${p==='/'?'':p}`
export default function Nav({t,lang}){
  const path=usePathname()||'/'
  const [open,setOpen]=useState(false)
  useEffect(()=>setOpen(false),[path])
  // percorso senza prefisso di lingua
  const m=path.match(/^\/(it|en|fr|de|es)(?=\/|$)/)
  const base=m?(path.slice(m[0].length)||'/'):path
  const PG=[['/',t.home],['/chi-siamo',t.chi],['/servizi',t.servizi],['/progetti',t.progetti],['/faq',t.faq],['/contatti',t.contatti]]
  const on=p=>p==='/'?base==='/':base.startsWith(p)
  return(<>
    <button className="burger" aria-expanded={open} aria-controls="menu" aria-label={open?t.close:t.open} onClick={()=>setOpen(!open)}><span/><span/><span/></button>
    <nav id="menu" className={open?'open':''}>
      <div className="links">{PG.map(([p,l])=><Link key={p} href={hr(lang,p)} className={on(p)?'on':''} aria-current={on(p)?'page':undefined}>{l}</Link>)}</div>
      <div className="langs" role="group" aria-label={t.lang}>{LANGS.map(l=><Link key={l} href={hr(l,base)} hrefLang={l} lang={l} title={NAMES[l]} className={l===lang?'cur':''} aria-current={l===lang?'true':undefined}>{l.toUpperCase()}</Link>)}</div>
      <Link className="btn s" href={hr(lang,'/contatti')}>{t.cta}</Link>
    </nav>
  </>)}
