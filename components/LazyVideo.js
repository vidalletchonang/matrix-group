'use client'
import {useEffect,useRef,useState} from 'react'
import {VIDEO} from '../lib/site'
// Video leggero: si carica solo quando entra nello schermo, muto e in loop
export default function LazyVideo({t,label}){
  const v=useRef(null),user=useRef(false)
  const [on,setOn]=useState(false)
  const load=el=>{if(!el.getAttribute('src'))el.src=VIDEO.src}
  useEffect(()=>{const el=v.current;if(!el)return
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(reduce||navigator.connection?.saveData)user.current=true
    const sync=()=>setOn(!el.paused)
    el.addEventListener('play',sync);el.addEventListener('pause',sync)
    const io=new IntersectionObserver(([e])=>{
      if(e.isIntersecting){if(!user.current){load(el);el.play().catch(()=>{})}}
      else if(!el.paused)el.pause()
    },{rootMargin:'200px'})
    io.observe(el)
    return()=>{io.disconnect();el.removeEventListener('play',sync);el.removeEventListener('pause',sync)}},[])
  function toggle(){const el=v.current;if(!el)return;if(el.paused){user.current=false;load(el);el.play().catch(()=>{})}else{user.current=true;el.pause()}}
  return(<div className="img vid">
    <video ref={v} poster={VIDEO.poster} muted loop playsInline preload="none" aria-label={label}/>
    <button className="play" onClick={toggle} aria-label={on?t.pauseL:t.playL}><b>{on?'❚❚':'▶'}</b>{on?t.pause:t.play}</button>
  </div>)}
