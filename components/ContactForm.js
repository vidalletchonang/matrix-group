'use client'
import Link from 'next/link'
import {useState} from 'react'
export default function ContactForm(){
  const [s,setS]=useState('idle')
  async function send(e){e.preventDefault();setS('sending')
    try{const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(e.target)))});setS(r.ok?'ok':'err')}catch{setS('err')}}
  if(s==='ok')return <p className="note">Grazie, abbiamo ricevuto la tua richiesta. Ti risponderemo al più presto.</p>
  return(<form onSubmit={send}>
    <input name="name" required placeholder="Nome e cognome" aria-label="Nome e cognome" autoComplete="name"/>
    <input name="email" type="email" required placeholder="Email" aria-label="Email" autoComplete="email"/>
    <input name="phone" type="tel" placeholder="Telefono" aria-label="Telefono" autoComplete="tel"/>
    <select name="service" aria-label="Di cosa hai bisogno"><option>Consulenza di cantiere</option><option>Sicurezza sul lavoro / RSPP</option><option>Altro</option></select>
    <textarea name="message" rows="4" placeholder="Raccontaci brevemente la tua esigenza (facoltativo)" aria-label="Messaggio"/>
    <label className="chk"><input type="checkbox" name="privacy" required/> <span>Dichiaro di aver letto l'<Link href="/privacy">informativa privacy</Link>.</span></label>
    <button className="btn" disabled={s==='sending'}>{s==='sending'?'Invio…':'Invia richiesta'}</button>
    {s==='err'&&<p className="note">Invio non riuscito. Riprova più tardi o scrivici via email.</p>}
  </form>)}
