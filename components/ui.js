import Link from 'next/link'
import {PH} from '../lib/site'
import {E,href} from '../lib/i18n'

const u=(id,w)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`

export function Photo({id,alt,className='img',eager,ratio}){
  return(<div className={className} style={ratio?{aspectRatio:ratio}:undefined}><img src={u(id,1024)} srcSet={`${u(id,640)} 640w, ${u(id,1024)} 1024w, ${u(id,1600)} 1600w`} sizes="(max-width:820px) 100vw, 50vw" alt={alt} loading={eager?'eager':'lazy'} decoding="async"/></div>)}

// h = sezione hero del dizionario: {eyebrow,title,text,alt}
export function Hero({h,img,big,t,lang,children}){
  return(<div className={`hero${big?'':' sm'}`}>
    {img&&<img className="bg" src={u(img,1600)} srcSet={`${u(img,800)} 800w, ${u(img,1600)} 1600w, ${u(img,2200)} 2200w`} sizes="100vw" alt={h.alt||''} fetchPriority="high"/>}
    {children}
    <div className="in">{h.eyebrow&&<span className="eyebrow light">{h.eyebrow}</span>}<h1>{E(h.title)}</h1>{h.text&&<p>{h.text}</p>}
      {big&&<div className="ctas"><Link className="btn" href={href(lang,'/contatti')}>{t.hero.cta1}</Link><Link className="btn o" href={href(lang,'/servizi')}>{t.hero.cta2}</Link></div>}</div>
  </div>)}

export const List=({items})=><ul className="lst">{items.map(x=><li key={x}>{x}</li>)}</ul>

export const Cta=({t,lang,c})=><section className="cta"><div className="w"><span className="eyebrow">{t.cta.eyebrow}</span><h2>{E((c||t.cta).title)}</h2><p>{(c||t.cta).text}</p><Link className="btn" href={href(lang,'/contatti')}>{t.cta.btn}</Link></div></section>

export function Concept({labels,aria}){
  return(<svg className="dg" viewBox="0 0 400 300" role="img" aria-label={aria}>{labels.map((tx,i)=>{const a=i*Math.PI/3-Math.PI/2,x=+(200+Math.cos(a)*115).toFixed(1),y=+(150+Math.sin(a)*105).toFixed(1);return <g key={tx}><line x1="200" y1="150" x2={x} y2={y} stroke="var(--acc)" strokeWidth="1.5" opacity=".6"/><circle cx={x} cy={y} r="7" fill="var(--bg)" stroke="var(--acc)" strokeWidth="2"/><text x={x} y={y+(y<150?-16:24)} textAnchor="middle">{tx}</text></g>})}<circle cx="200" cy="150" r="30" fill="var(--acc)"/><text x="200" y="157" textAnchor="middle" style={{fill:'var(--accink)',font:'700 22px var(--hf)'}}>M</text></svg>)}

const SV=[{path:'/servizi/consulenza-cantiere',img:PH.sopralluogo},{path:'/servizi/sicurezza-rspp',img:PH.dpi}]
export function ServiceCards({t,lang}){return(<div className="svcs">{t.svc.map((s,i)=><Link className="svc" href={href(lang,SV[i].path)} key={s.t}><Photo id={SV[i].img} alt={s.alt}/><span className="num">0{i+1}</span><h3>{s.t}</h3><p>{s.p}</p><div className="chips">{s.c.map(x=><i key={x}>{x}</i>)}</div><span className="more">{t.more}</span></Link>)}</div>)}
