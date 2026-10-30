import {SITE} from '../../../lib/site'
// Invio del modulo contatti con Resend (https://resend.com).
// Serve una sola variabile su Vercel: RESEND_API_KEY. Mittente e destinatario sono fissi qui sotto.
const FROM=process.env.MAIL_FROM||'Sito Matrix Group <sito@matrix-group.it>'
const TO=process.env.MAIL_TO||SITE.mail
const clip=(v,n)=>String(v||'').trim().slice(0,n)
export async function POST(req){
  const d=await req.json().catch(()=>({}))
  if(d.website)return Response.json({ok:true}) // campo nascosto anti-spam: i bot lo compilano, le persone no
  const name=clip(d.name,120),email=clip(d.email,160),phone=clip(d.phone,40),service=clip(d.service,80),message=clip(d.message,4000)
  if(!name||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return Response.json({ok:false},{status:400})
  if(!process.env.RESEND_API_KEY)return Response.json({ok:false,error:'email non configurata'},{status:501})
  const r=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'},
    body:JSON.stringify({from:FROM,to:[TO],reply_to:email,subject:`Richiesta dal sito: ${service||'contatto'} – ${name}`,
      text:`Nome: ${name}\nEmail: ${email}\nTelefono: ${phone||'-'}\nServizio: ${service||'-'}\n\nMessaggio:\n${message||'-'}\n\n— Inviato dal modulo contatti di www.matrix-group.it`})})
  if(!r.ok)console.error('Resend',r.status,await r.text().catch(()=>''))
  return Response.json({ok:r.ok},{status:r.ok?200:502})}
