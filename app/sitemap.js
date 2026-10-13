import {LANGS,BASE,href} from '../lib/i18n'
const PAGES=['/','/chi-siamo','/servizi','/servizi/consulenza-cantiere','/servizi/sicurezza-rspp','/progetti','/faq','/contatti','/privacy','/cookie-policy']
export default function sitemap(){return PAGES.flatMap(p=>LANGS.map(l=>({url:BASE+href(l,p),changeFrequency:'monthly',priority:p==='/'?1:p.startsWith('/servizi')?0.8:0.5,alternates:{languages:Object.fromEntries(LANGS.map(x=>[x,BASE+href(x,p)]))}})))}
