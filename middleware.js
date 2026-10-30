import {NextResponse} from 'next/server'
const OTHER=['en','fr','de','es']
// L'italiano è servito senza prefisso (/, /servizi…); le altre lingue con /en, /fr, /de, /es
export function middleware(req){
  const {pathname}=req.nextUrl
  const first=pathname.split('/')[1]
  if(first==='it'){const url=req.nextUrl.clone();url.pathname=pathname.replace(/^\/it(?=\/|$)/,'')||'/';return NextResponse.redirect(url,308)}
  if(OTHER.includes(first))return NextResponse.next()
  const url=req.nextUrl.clone();url.pathname='/it'+(pathname==='/'?'':pathname);return NextResponse.rewrite(url)
}
export const config={matcher:['/((?!api|_next|.*opengraph-image|.*\\..*).*)']}
