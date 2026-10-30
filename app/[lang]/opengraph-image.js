import {ImageResponse} from 'next/og'
import {LANGS,dict} from '../../lib/i18n'
// Immagine di anteprima per WhatsApp, Facebook, LinkedIn… generata al momento della build (nessun file da caricare)
export const size={width:1200,height:630}
export const contentType='image/png'
export const alt='Matrix Group'
export function generateStaticParams(){return LANGS.map(lang=>({lang}))}
export default async function OG({params}){const {lang}=await params;const t=dict(LANGS.includes(lang)?lang:'it')
  return new ImageResponse(<div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',background:'#06343A',color:'#fff',padding:'72px 80px',fontFamily:'sans-serif'}}>
    <div style={{display:'flex',alignItems:'center',gap:20}}><div style={{width:64,height:14,background:'#FFC72C'}}/><div style={{fontSize:30,color:'#D9E5E6'}}>{t.top}</div></div>
    <div style={{display:'flex',flexDirection:'column'}}><div style={{fontSize:118,fontWeight:800,letterSpacing:-3,lineHeight:1}}>Matrix Group</div><div style={{fontSize:46,marginTop:22,color:'#FFC72C'}}>{t.footer.tag}</div></div>
    <div style={{display:'flex',fontSize:28,color:'#D9E5E6'}}>www.matrix-group.it · +39 371 337 5663</div>
  </div>,size)}
