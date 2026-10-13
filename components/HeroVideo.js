'use client'
import {useEffect,useRef,useState} from 'react'
import {VIDEO} from './ui'
export default function HeroVideo(){
  const v=useRef(null)
  const [on,setOn]=useState(false)
  useEffect(()=>{const el=v.current;if(!el)return
    el.muted=true;el.defaultMuted=true
    const sync=()=>setOn(!el.paused)
    el.addEventListener('play',sync);el.addEventListener('pause',sync)
    if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      const go=()=>el.play().catch(()=>{})
      go();el.addEventListener('canplay',go,{once:true})}
    return()=>{el.removeEventListener('play',sync);el.removeEventListener('pause',sync)}},[])
  function toggle(){const el=v.current;if(!el)return;el.paused?el.play().catch(()=>{}):el.pause()}
  return(<>
    <video ref={v} className="bg" src={VIDEO.src} poster={VIDEO.poster} muted loop playsInline preload="auto" aria-hidden="true"/>
    <button className="play" onClick={toggle} aria-label={on?'Metti in pausa il video':'Riproduci il video'}><b>{on?'❚❚':'▶'}</b>{on?'Pausa':'Video'}</button>
  </>)}
