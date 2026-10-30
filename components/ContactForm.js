'use client'
import Link from 'next/link'
import {useState} from 'react'
export default function ContactForm({t,privacyHref}){
  const [s,setS]=useState('idle')
  async function send(e){e.preventDefault();setS('sending')
    try{const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(e.target)))});setS(r.ok?'ok':'err')}catch{setS('err')}}
  if(s==='ok')return <p className="note">{t.ok}</p>
  return(<form onSubmit={send}>
    <input name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" className="hp"/>
    <input name="name" required placeholder={t.name} aria-label={t.name} autoComplete="name"/>
    <input name="email" type="email" required placeholder={t.email} aria-label={t.email} autoComplete="email"/>
    <input name="phone" type="tel" placeholder={t.phone} aria-label={t.phone} autoComplete="tel"/>
    <select name="service" aria-label={t.service}>{t.services.map(x=><option key={x}>{x}</option>)}</select>
    <textarea name="message" rows="4" placeholder={t.message} aria-label={t.messageL}/>
    <label className="chk"><input type="checkbox" name="privacy" required/> <span>{t.privacy[0]}<Link href={privacyHref}>{t.privacy[1]}</Link>{t.privacy[2]}</span></label>
    <button className="btn" disabled={s==='sending'}>{s==='sending'?t.sending:t.send}</button>
    {s==='err'&&<p className="note">{t.err}</p>}
  </form>)}
