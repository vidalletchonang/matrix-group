'use client'
import {useEffect,useRef,useState} from 'react'
import {VIDEO} from './ui'
export default function HeroVideo(){
  const v=useRef(null)
  const user=useRef(false)
  const [on,setOn]=useState(false)
  useEffect(()=>{const el=v.current;if(!el)return
    el.muted=true;el.defaultMuted=true
    const sync=()=>setOn(!el.paused)
    el.addEventListener('play',sync);el.addEventListener('pause',sync)
    const go=()=>{if(!user.current)el.play().catch(()=>{})}
    const vis=()=>{if(document.visibilityState==='visible')go()}
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)user.current=true
    go();el.addEventListener('canplay',go,{once:true});document.addEventListener('visibilitychange',vis)
    return()=>{el.removeEventListener('play',sync);el.removeEventListener('pause',sync);document.removeEventListener('visibilitychange',vis)}},[])
  function toggle(){const el=v.current;if(!el)return;if(el.paused){user.current=false;el.play().catch(()=>{})}else{user.current=true;el.pause()}}
  return(<>
    <video ref={v} className="bg" src={VIDEO.src} poster={VIDEO.poster} muted loop playsInline preload="auto" aria-hidden="true"/>
    <button className="play" onClick={toggle} aria-label={on?'Metti in pausa il video':'Riproduci il video'}><b>{on?'❚❚':'▶'}</b>{on?'Pausa':'Video'}</button>
  </>)}
