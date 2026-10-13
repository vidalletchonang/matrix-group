'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useEffect,useState} from 'react'
export const PG=[['/','Home'],['/chi-siamo','Chi siamo'],['/servizi','Servizi'],['/progetti','Progetti'],['/faq','FAQ'],['/contatti','Contatti']]
export default function Nav(){
  const p=usePathname()
  const [open,setOpen]=useState(false)
  useEffect(()=>setOpen(false),[p])
  const on=h=>h==='/'?p==='/':p.startsWith(h)
  return(<>
    <button className="burger" aria-expanded={open} aria-controls="menu" aria-label={open?'Chiudi il menu':'Apri il menu'} onClick={()=>setOpen(!open)}><span/><span/><span/></button>
    <nav id="menu" className={open?'open':''}>{PG.map(([h,l])=><Link key={h} href={h} className={on(h)?'on':''} aria-current={on(h)?'page':undefined}>{l}</Link>)}<Link className="btn s" href="/contatti">Contattaci</Link></nav>
  </>)}
