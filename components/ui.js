import Link from 'next/link'
import {PH,REAL,CERTS,PHONE,SITE} from '../lib/site'
import {E,href} from '../lib/i18n'

const u=(id,w)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=66`
// id = chiave di REAL (foto reale in /public) oppure id Unsplash
function img(id,big){
  const r=REAL[id]
  if(r)return{src:`/${id}-${big?1600:720}.webp`,srcSet:`/${id}-720.webp ${r[0]}w, /${id}-1600.webp ${r[1]}w`}
  return big?{src:u(id,1600),srcSet:`${u(id,800)} 800w, ${u(id,1600)} 1600w, ${u(id,2200)} 2200w`}:{src:u(id,1024),srcSet:`${u(id,640)} 640w, ${u(id,1024)} 1024w, ${u(id,1600)} 1600w`}
}

export function Photo({id,alt,className='img',eager,ratio,sizes='(max-width:820px) 100vw, 50vw'}){
  return(<div className={className} style={ratio?{aspectRatio:ratio}:undefined}><img {...img(id)} sizes={sizes} alt={alt} loading={eager?'eager':'lazy'} decoding="async"/></div>)}

// h = sezione hero del dizionario: {eyebrow,title,text,alt}
export function Hero({h,img:id,pos,big,t,lang,children}){
  return(<div className={`hero${big?'':' sm'}`}>
    {id&&<img className="bg" {...img(id,true)} sizes="100vw" alt={h.alt||''} fetchPriority="high" style={pos?{objectPosition:pos}:undefined}/>}
    {children}
    <div className="in">{h.eyebrow&&<span className="eyebrow light">{h.eyebrow}</span>}<h1>{E(h.title)}</h1>{h.text&&<p>{h.text}</p>}
      {big&&<div className="ctas"><Link className="btn" href={href(lang,'/contatti')}>{t.hero.cta1}</Link><Link className="btn o" href={href(lang,'/servizi')}>{t.hero.cta2}</Link></div>}</div>
  </div>)}

export const List=({items})=><ul className="lst">{items.map(x=><li key={x}>{x}</li>)}</ul>

export const Cta=({t,lang,c})=><section className="cta"><div className="w"><span className="eyebrow">{t.cta.eyebrow}</span><h2>{E((c||t.cta).title)}</h2><p>{(c||t.cta).text}</p><Link className="btn" href={href(lang,'/contatti')}>{t.cta.btn}</Link></div></section>

export function Concept({labels,aria}){
  return(<svg className="dg" viewBox="0 0 400 300" role="img" aria-label={aria}>{labels.map((tx,i)=>{const a=i*Math.PI/3-Math.PI/2,x=+(200+Math.cos(a)*115).toFixed(1),y=+(150+Math.sin(a)*105).toFixed(1);return <g key={tx}><line x1="200" y1="150" x2={x} y2={y} stroke="var(--acc)" strokeWidth="1.5" opacity=".6"/><circle cx={x} cy={y} r="7" fill="var(--bg)" stroke="var(--acc)" strokeWidth="2"/><text x={x} y={y+(y<150?-16:24)} textAnchor="middle">{tx}</text></g>})}<circle cx="200" cy="150" r="30" fill="var(--acc)"/><text x="200" y="157" textAnchor="middle" style={{fill:'var(--accink)',font:'700 22px var(--hf)'}}>M</text></svg>)}

const SV=['/servizi/consulenza-cantiere','/servizi/sicurezza-rspp']
// imgs: una foto diversa per ogni pagina (nessuna immagine ripetuta nel sito); foto decorative, il testo della card basta
export function ServiceCards({t,lang,imgs}){return(<div className="svcs">{t.svc.map((s,i)=><Link className="svc" href={href(lang,SV[i])} key={s.t}><Photo id={imgs[i]} alt=""/><span className="num">0{i+1}</span><h3>{s.t}</h3><p>{s.p}</p><div className="chips">{s.c.map(x=><i key={x}>{x}</i>)}</div><span className="more">{t.more}</span></Link>)}</div>)}

export function Certs({c,compact}){
  return(<div className={`certs${compact?' compact':''}`}>
    {!compact&&<div><span className="eyebrow">{c.eyebrow}</span><h2>{c.h}</h2><p className="lead">{c.p}</p></div>}
    <ul>{c.items.map((x,i)=><li key={x.t}><img src={CERTS[i].src} width={CERTS[i].w} height={CERTS[i].h} alt={x.alt} loading="lazy" decoding="async"/><span>{x.t}</span></li>)}</ul>
  </div>)}

// Icone semplici (SVG in linea, nessun file da caricare)
const IC={
  tel:<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1z" fill="currentColor"/>,
  sms:<path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 3v-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm3 6.5a1.5 1.5 0 1 0 0 .01zm5 0a1.5 1.5 0 1 0 0 .01zm5 0a1.5 1.5 0 1 0 0 .01z" fill="currentColor"/>,
  wa:<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3 .78.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.25-.12-1.46-.72-1.69-.8s-.39-.12-.55.12-.63.8-.78.96-.29.19-.53.06a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.34a.45.45 0 0 0-.02-.43c-.06-.12-.55-1.33-.76-1.82s-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.7 2.7 0 0 0-.85 2.02 4.7 4.7 0 0 0 1 2.5 10.8 10.8 0 0 0 4.13 3.65c1.54.66 2.14.72 2.9.6a2.5 2.5 0 0 0 1.65-1.16 2 2 0 0 0 .14-1.16c-.06-.1-.22-.16-.47-.28z" fill="currentColor"/>,
}
export const Icon=({n})=><svg viewBox="0 0 24 24" aria-hidden="true">{IC[n]}</svg>
const waUrl=msg=>`${PHONE.wa}?text=${encodeURIComponent(msg)}`

// Tre modi per contattarci: chiamata, SMS, WhatsApp (c = dizionario ct)
export function ContactButtons({c}){
  return(<div className="ctbtns">
    <a className="ctb" href={PHONE.tel}><Icon n="tel"/>{c.call} <span>{SITE.tel}</span></a>
    <a className="ctb" href={PHONE.sms}><Icon n="sms"/>{c.sms}</a>
    <a className="ctb wa" href={waUrl(c.msg)} target="_blank" rel="noopener"><Icon n="wa"/>{c.wa}</a>
  </div>)}

// Pulsante WhatsApp fisso in basso a destra, su tutte le pagine
export const WaFloat=({c})=><a className="waf" href={waUrl(c.msg)} target="_blank" rel="noopener" aria-label={c.waL} title={c.waL}><Icon n="wa"/></a>
