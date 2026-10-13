import Link from 'next/link'
import it from '../content/it'
import en from '../content/en'
import fr from '../content/fr'
import de from '../content/de'
import es from '../content/es'
import {SITE} from './site'

export const LANGS=['it','en','fr','de','es']
export const DEFAULT='it'
export const BASE='https://matrix-group-4sfs.vercel.app'
const D={it,en,fr,de,es}
export const dict=lang=>D[lang]||it

// percorso localizzato: l'italiano resta senza prefisso
export const href=(lang,p='/')=>lang===DEFAULT?p:`/${lang}${p==='/'?'':p}`

// titolo con parte in corsivo: ['prima ','corsivo',' dopo']
export const E=([a,b,c=''])=><>{a}<em>{b}</em>{c}</>

// metadati con hreflang
export function meta(lang,path,title,description){
  const languages=Object.fromEntries(LANGS.map(l=>[l,BASE+href(l,path)]))
  languages['x-default']=BASE+href(DEFAULT,path)
  return{title,description,alternates:{canonical:BASE+href(lang,path),languages},openGraph:{title:title?.absolute||title,description,locale:dict(lang).locale,url:BASE+href(lang,path),siteName:'Matrix Group',type:'website'}}
}

// testo ricco minimo: **grassetto**, [testo](/link), {name} {piva} {addr} {mail}
export function rich(s,lang){
  const parts=s.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\{(?:name|piva|addr|mail)\})/g)
  return parts.map((x,i)=>{
    if(!x)return null
    if(x.startsWith('**'))return <strong key={i}>{x.slice(2,-2)}</strong>
    if(x.startsWith('[')){const m=x.match(/^\[([^\]]+)\]\(([^)]+)\)$/);const u=m[2]
      return u.startsWith('/')?<Link key={i} href={href(lang,u)}>{m[1]}</Link>:<a key={i} href={u} target="_blank" rel="noopener noreferrer">{m[1]}</a>}
    if(x==='{mail}')return <a key={i} href={`mailto:${SITE.mail}`}>{SITE.mail}</a>
    if(x[0]==='{')return SITE[x.slice(1,-1)]
    return x})}

export function Blocks({blocks,lang}){
  return blocks.map((b,i)=>b.h?<h2 key={i}>{b.h}</h2>
    :b.ul?<ul key={i}>{b.ul.map((x,j)=><li key={j}>{rich(x,lang)}</li>)}</ul>
    :b.table?<table key={i}><thead><tr>{b.table[0].map(x=><th key={x}>{x}</th>)}</tr></thead><tbody>{b.table.slice(1).map((r,j)=><tr key={j}>{r.map((c,k)=><td key={k}>{c}</td>)}</tr>)}</tbody></table>
    :<p key={i}>{rich(b.p,lang)}</p>)}
