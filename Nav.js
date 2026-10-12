'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
const PG=[['/','Home'],['/chi-siamo','Chi siamo'],['/servizi','Servizi'],['/contatti','Contatti']]
export default function Nav(){const p=usePathname();return <nav>{PG.map(([h,l])=><Link key={h} href={h} className={p===h?'on':''}>{l}</Link>)}<Link className="btn s" href="/contatti">Contattaci</Link></nav>}
