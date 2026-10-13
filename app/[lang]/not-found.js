'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import NF from '../../content/nf'
export default function NotFound(){
  const m=(usePathname()||'/').match(/^\/(en|fr|de|es)(?=\/|$)/);const lang=m?m[1]:'it';const t=NF[lang];const h=p=>lang==='it'?p:`/${lang}${p==='/'?'':p}`
  return(<section className="cta" style={{padding:'120px 0'}}><div className="w"><span className="eyebrow">{t.eyebrow}</span><h2>{t.title[0]}<em>{t.title[1]}</em></h2><p>{t.text}</p><div className="ctas" style={{justifyContent:'center'}}><Link className="btn" href={h('/')}>{t.home}</Link><Link className="btn o" href={h('/contatti')}>{t.contact}</Link></div></div></section>)}
