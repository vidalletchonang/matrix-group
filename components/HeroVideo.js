'use client'
import {useEffect,useRef,useState} from 'react'
import {VIDEO} from '../lib/site'
export default function HeroVideo({t}){
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
    <button className="play" onClick={toggle} aria-label={on?t.pauseL:t.playL}><b>{on?'❚❚':'▶'}</b>{on?t.pause:t.play}</button>
  </>)}
