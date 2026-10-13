import Link from 'next/link'
export const metadata={title:'Pagina non trovata'}
export default function NotFound(){return(<section className="cta" style={{padding:'120px 0'}}><div className="w"><span className="eyebrow">Errore 404</span><h2>Questa pagina <em>non esiste.</em></h2><p>Il link potrebbe essere errato o la pagina è stata spostata.</p><div className="ctas" style={{justifyContent:'center'}}><Link className="btn" href="/">Torna alla home</Link><Link className="btn o" href="/contatti">Contattaci</Link></div></div></section>)}
