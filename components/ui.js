import Link from 'next/link'

export const SITE={name:'MATRIX GROUP S.R.L.S.',piva:'04279440368',addr:'Via Tommaso Frignani 103-105-107, 41125 Modena (MO)',tel:'+39 000 0000000',mail:'info@example.it'}

// Foto libere da Unsplash (https://unsplash.com/license): sostituibili con foto proprie
export const PH={
  team:'1541888946425-d81bb19240f5',
  telaio:'1587582423116-ec07293f0395',
  gru:'1535732759880-bbd5c7265e3f',
  dallalto:'1504307651254-35680f356dfd',
  tramonto:'1579847188804-ecba0e2ea330',
  alba:'1599995903128-531fc7fb694b',
  sopralluogo:'1626885930974-4b69aa21bbf9',
  ferri:'1533378890784-b2a5b0a59d40',
  piani:'1742112125567-3e8967bad60f',
  stretta:'1742112125635-6f8201c6ee3f',
  dpi:'1662309376159-b95fb193d96b',
  caschi:'1552879890-3a06dd3a06c2',
  disegno:'1503387762-592deb58ef4e',
  progetto:'1608303588026-884930af2559',
  riunione:'1581094488379-6a10d04c0f04',
  struttura:'1508450859948-4e04fabaa4ea',
  ponteggi:'1531834685032-c34bf0d84c77',
  industria:'1582489853490-cd3a53eb4530',
  citta:'1565008447742-97f6f38c985c',
}
export const VIDEO={
  src:'https://videos.pexels.com/video-files/8964731/8964731-hd_1280_720_50fps.mp4',
  poster:'https://images.pexels.com/videos/8964731/bridge-building-site-control-cooperation-8964731.jpeg?auto=compress&cs=tinysrgb&w=1280',
}
const u=(id,w)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`

export function Photo({id,alt,className='img',label,eager,ratio}){
  return(<div className={className} style={ratio?{aspectRatio:ratio}:undefined}><img src={u(id,1024)} srcSet={`${u(id,640)} 640w, ${u(id,1024)} 1024w, ${u(id,1600)} 1600w`} sizes="(max-width:820px) 100vw, 50vw" alt={alt} loading={eager?'eager':'lazy'} decoding="async"/>{label&&<span>{label}</span>}</div>)}

export function Hero({title,text,img,alt='',big,eyebrow,children}){
  return(<div className={`hero${big?'':' sm'}`}>
    {img&&<img className="bg" src={u(img,1600)} srcSet={`${u(img,800)} 800w, ${u(img,1600)} 1600w, ${u(img,2200)} 2200w`} sizes="100vw" alt={alt} fetchPriority="high"/>}
    {children}
    <div className="in">{eyebrow&&<span className="eyebrow light">{eyebrow}</span>}<h1>{title}</h1>{text&&<p>{text}</p>}
      {big&&<div className="ctas"><Link className="btn" href="/contatti">Richiedi un contatto</Link><Link className="btn o" href="/servizi">I nostri servizi</Link></div>}</div>
  </div>)}

export const List=({items})=><ul className="lst">{items.map(x=><li key={x}>{x}</li>)}</ul>

export const Cta=({title=<>Mettiamo <em>ordine</em> nel tuo progetto.</>,text="Raccontaci il cantiere o l'esigenza di sicurezza della tua impresa."})=><section className="cta"><div className="w"><span className="eyebrow">Parliamone</span><h2>{title}</h2><p>{text}</p><Link className="btn" href="/contatti">Richiedi un contatto</Link></div></section>

export function Concept(){const L=['Cantiere','Sicurezza','Organizzazione','Prevenzione','Coordinamento','Competenza']
  return(<svg className="dg" viewBox="0 0 400 300" role="img" aria-label="Competenze che convergono in Matrix">{L.map((t,i)=>{const a=i*Math.PI/3-Math.PI/2,x=+(200+Math.cos(a)*115).toFixed(1),y=+(150+Math.sin(a)*105).toFixed(1);return <g key={t}><line x1="200" y1="150" x2={x} y2={y} stroke="var(--acc)" strokeWidth="1.5" opacity=".6"/><circle cx={x} cy={y} r="7" fill="var(--bg)" stroke="var(--acc)" strokeWidth="2"/><text x={x} y={y+(y<150?-16:24)} textAnchor="middle">{t}</text></g>})}<circle cx="200" cy="150" r="30" fill="var(--acc)"/><text x="200" y="157" textAnchor="middle" style={{fill:'var(--accink)',font:'700 22px var(--hf)'}}>M</text></svg>)}

export const SERVIZI=[
  {href:'/servizi/consulenza-cantiere',img:PH.sopralluogo,alt:'Due tecnici con casco e gilet ad alta visibilità durante un sopralluogo in cantiere',t:'Consulenza e supporto di cantiere',p:'Un supporto tecnico e organizzativo indipendente dalla realizzazione diretta delle opere, per imprese, professionisti e committenti.',c:['Pianificazione','Organizzazione','Coordinamento','Affiancamento']},
  {href:'/servizi/sicurezza-rspp',img:PH.dpi,alt:'Caschi e gilet ad alta visibilità appesi a una parete',t:'Sicurezza sul lavoro e RSPP',p:'Consulenza alle imprese per organizzare la prevenzione e gestire gli adempimenti di sicurezza, fino al ruolo di RSPP esterno quando ricorrono i requisiti.',c:['Valutazione dei rischi','Procedure','Formazione','RSPP esterno']},
]

export function ServiceCards(){return(<div className="svcs">{SERVIZI.map((s,i)=><Link className="svc" href={s.href} key={s.t}><Photo id={s.img} alt={s.alt}/><span className="num">0{i+1}</span><h3>{s.t}</h3><p>{s.p}</p><div className="chips">{s.c.map(x=><i key={x}>{x}</i>)}</div><span className="more">Scopri di più →</span></Link>)}</div>)}
