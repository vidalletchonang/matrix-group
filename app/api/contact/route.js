export async function POST(req){
  const d=await req.json().catch(()=>({}))
  if(!d.name||!d.email)return Response.json({ok:false},{status:400})
  if(!process.env.RESEND_API_KEY)return Response.json({ok:false,error:'email non configurata'},{status:501})
  const r=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({from:process.env.MAIL_FROM,to:[process.env.MAIL_TO],reply_to:d.email,subject:`Richiesta dal sito: ${d.service}`,text:`Nome: ${d.name}\nEmail: ${d.email}\nTel: ${d.phone||''}\nServizio: ${d.service}\n\n${d.message||''}`})})
  return Response.json({ok:r.ok},{status:r.ok?200:502})}
