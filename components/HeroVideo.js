'use client'
import {useEffect,useRef,useState} from 'react'
// Video di sfondo leggero: prima si vede il poster, il video (≈1 MB) parte solo a pagina caricata.
// Non si carica con "riduci movimento" o "risparmio dati"; si ferma fuori schermo e a scheda nascosta.
export default function HeroVideo({src,poster,t}){
  const v=useRef(null),user=useRef(false)
  const [on,setOn]=useState(false)
  useEffect(()=>{const el=v.current;if(!el)return
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||navigator.connection?.saveData)user.current=true
    const sync=()=>setOn(!el.paused)
    el.addEventListener('play',sync);el.addEventListener('pause',sync)
    let visible=true
    const go=()=>{if(user.current||!visible||document.hidden)return;if(!el.getAttribute('src'))el.src=src;el.play().catch(()=>{})}
    const start=()=>('requestIdleCallback' in window?requestIdleCallback(go,{timeout:2500}):setTimeout(go,800))
    if(document.readyState==='complete')start();else window.addEventListener('load',start,{once:true})
    const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(visible)go();else el.pause()})
    io.observe(el)
    const vis=()=>{if(document.hidden)el.pause();else go()}
    document.addEventListener('visibilitychange',vis)
    return()=>{io.disconnect();document.removeEventListener('visibilitychange',vis);el.removeEventListener('play',sync);el.removeEventListener('pause',sync)}},[src])
  function toggle(){const el=v.current;if(!el)return;if(el.paused){user.current=false;if(!el.getAttribute('src'))el.src=src;el.play().catch(()=>{})}else{user.current=true;el.pause()}}
  return(<>
    <video ref={v} className="bg" poster={poster} muted loop playsInline preload="none" aria-hidden="true"/>
    <button className="play" onClick={toggle} aria-label={on?t.pauseL:t.playL}><b>{on?'❚❚':'▶'}</b>{on?t.pause:t.play}</button>
  </>)}
