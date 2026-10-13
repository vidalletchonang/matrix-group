'use client'
import {useEffect,useRef,useState} from 'react'
import {VIDEO} from './ui'
export default function HeroVideo(){
  const v=useRef(null)
  const [on,setOn]=useState(true)
  useEffect(()=>{const el=v.current;if(!el)return
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){el.pause();setOn(false);return}
    el.play().catch(()=>setOn(false))},[])
  function toggle(){const el=v.current;if(!el)return;if(el.paused){el.play();setOn(true)}else{el.pause();setOn(false)}}
  return(<>
    <video ref={v} className="bg" src={VIDEO.src} poster={VIDEO.poster} muted loop playsInline preload="metadata" aria-hidden="true"/>
    <button className="play" onClick={toggle} aria-label={on?'Metti in pausa il video':'Riproduci il video'}><b>{on?'❚❚':'▶'}</b>{on?'Pausa':'Video'}</button>
  </>)}
