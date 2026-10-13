const BASE='https://matrix-group-4sfs.vercel.app'
const PAGES=['','/chi-siamo','/servizi','/servizi/consulenza-cantiere','/servizi/sicurezza-rspp','/progetti','/faq','/contatti','/privacy','/cookie-policy']
export default function sitemap(){return PAGES.map(p=>({url:BASE+p,changeFrequency:'monthly',priority:p===''?1:p.startsWith('/servizi')?0.8:0.5}))}
