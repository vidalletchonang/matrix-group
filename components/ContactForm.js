'use client'
import {useState} from 'react'
export default function ContactForm(){
  const [s,setS]=useState('idle')
  async function send(e){e.preventDefault();setS('sending')
    try{const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(e.target)))});setS(r.ok?'ok':'err')}catch{setS('err')}}
  if(s==='ok')return <p className="note">Grazie, abbiamo ricevuto la tua richiesta. Ti risponderemo al più presto.</p>
  return(<form onSubmit={send}><input name="name" required placeholder="Nome e cognome" aria-label="Nome e cognome"/><input name="email" type="email" required placeholder="Email" aria-label="Email"/><input name="phone" placeholder="Telefono" aria-label="Telefono"/><select name="service" aria-label="Di cosa hai bisogno"><option>Consulenza di cantiere</option><option>Sicurezza sul lavoro / RSPP</option><option>Altro</option></select><input name="message" placeholder="Messaggio (facoltativo)" aria-label="Messaggio"/><button className="btn" disabled={s==='sending'}>{s==='sending'?'Invio…':'Invia richiesta'}</button>{s==='err'&&<p className="note">Invio non riuscito. Riprova più tardi o scrivici via email.</p>}</form>)}
