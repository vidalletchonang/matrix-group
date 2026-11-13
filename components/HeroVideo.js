'use client'
import {useEffect,useRef,useState} from 'react'
// Video di sfondo leggero: prima si vede il poster, il video parte solo a pagina caricata.
// Accetta un solo video (src) oppure una sequenza (clips) riprodotta in ciclo, es. comparto civile → industriale.
// Ogni clip: {src, srcSm (versione leggera per schermi piccoli), end (secondi, facoltativo: taglia la clip)}.
// Non si carica con "riduci movimento" o "risparmio dati"; si ferma fuori schermo e a scheda nascosta.
export default function HeroVideo({src,srcSm,clips,poster,t}){
  const list=clips||[{src,srcSm}]
  const v=useRef(null),user=useRef(false),idx=useRef(0)
  const [on,setOn]=useState(false)
  const pick=i=>{const c=list[i];return c.srcSm&&window.innerWidth<900?c.srcSm:c.src}
  const key=list.map(c=>c.src).join('|')
  useEffect(()=>{const el=v.current;if(!el)return
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||navigator.connection?.saveData)user.current=true
    const sync=()=>setOn(!el.paused)
    const next=()=>{if(list.length<2){el.currentTime=0;el.play().catch(()=>{});return}
      idx.current=(idx.current+1)%list.length;el.src=pick(idx.current);el.play().catch(()=>{})}
    const cap=()=>{const e=list[idx.current].end;if(e&&el.currentTime>=e)next()}
    el.addEventListener('play',sync);el.addEventListener('pause',sync);el.addEventListener('ended',next);el.addEventListener('timeupdate',cap)
    let visible=true
    const go=()=>{if(user.current||!visible||document.hidden)return;if(!el.getAttribute('src'))el.src=pick(idx.current);el.play().catch(()=>{})}
    const start=()=>('requestIdleCallback' in window?requestIdleCallback(go,{timeout:2500}):setTimeout(go,800))
    if(document.readyState==='complete')start();else window.addEventListener('load',start,{once:true})
    const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(visible)go();else el.pause()})
    io.observe(el)
    const vis=()=>{if(document.hidden)el.pause();else go()}
    document.addEventListener('visibilitychange',vis)
    return()=>{io.disconnect();document.removeEventListener('visibilitychange',vis);el.removeEventListener('play',sync);el.removeEventListener('pause',sync);el.removeEventListener('ended',next);el.removeEventListener('timeupdate',cap)}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[key])
  function toggle(){const el=v.current;if(!el)return;if(el.paused){user.current=false;if(!el.getAttribute('src'))el.src=pick(idx.current);el.play().catch(()=>{})}else{user.current=true;el.pause()}}
  return(<>
    <video ref={v} className="bg" poster={poster} muted playsInline preload="none" aria-hidden="true"/>
    <button className="play" onClick={toggle} aria-label={on?t.pauseL:t.playL}><b>{on?'❚❚':'▶'}</b>{on?t.pause:t.play}</button>
  </>)}
