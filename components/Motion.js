'use client'
import {usePathname} from 'next/navigation'
import {useEffect} from 'react'
// Movimento leggero del sito (nessuna libreria):
// - gli elementi compaiono con una breve dissolvenza quando entrano nello schermo, a cascata tra fratelli;
// - la linea dei "4 passi" si riempie in sequenza;
// - l'intestazione diventa più compatta quando si scorre.
// Con "riduci movimento" attivo, o senza JavaScript, tutto resta visibile e fermo.
const SEL=['section h2','section .lead','.svc','.gal article','.card','.steps>div','.vals>div','.feat figure','.certs li','.lst li','.faq details','.box','.grid2>.img','.grid2>div>.img','.dg','.ctbtns','form'].join(',')
export default function Motion(){
  const path=usePathname()
  useEffect(()=>{
    const head=document.querySelector('header')
    const onScroll=()=>head&&head.classList.toggle('scrolled',window.scrollY>40)
    onScroll();window.addEventListener('scroll',onScroll,{passive:true})
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return()=>window.removeEventListener('scroll',onScroll)
    const els=[...document.querySelectorAll(SEL)].filter(el=>!el.closest('.hero'))
    const vh=window.innerHeight
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px',threshold:.08})
    els.forEach(el=>{
      if(el.getBoundingClientRect().top<vh*.92)return // già visibile all'apertura: nessuna animazione
      const sib=[...el.parentElement.children].filter(c=>c.matches(SEL))
      const i=Math.min(sib.indexOf(el),5)
      el.style.setProperty('--d',`${i*70}ms`)
      el.classList.add('rv');io.observe(el)
    })
    const steps=document.querySelector('.steps')
    if(steps){steps.classList.add('draw');const so=new IntersectionObserver(([e])=>{if(e.isIntersecting){steps.classList.add('go');so.disconnect()}},{threshold:.35});so.observe(steps)}
    return()=>{io.disconnect();window.removeEventListener('scroll',onScroll)}
  },[path])
  return null
}
