// Contatti diretti: chiamata, SMS e WhatsApp sullo stesso numero
export const PHONE={tel:'tel:+393713375663',sms:'sms:+393713375663',wa:'https://wa.me/393713375663'}
export const SITE={name:'MATRIX GROUP S.R.L.S.',piva:'04279440368',addr:'Via Tommaso Frignani 103-105-107, 41125 Modena (MO)',tel:'+39 371 337 5663',mail:'amministrazione@matrix-group.it'}

// Foto libere da Unsplash (https://unsplash.com/license): sostituibili con foto proprie
export const PH={
  telaio:'1587582423116-ec07293f0395',
  gru:'1535732759880-bbd5c7265e3f',
  alba:'1599995903128-531fc7fb694b',
  ferri:'1533378890784-b2a5b0a59d40',
  piani:'1742112125567-3e8967bad60f',
  stretta:'1742112125635-6f8201c6ee3f',
  caschi:'1552879890-3a06dd3a06c2',
  riunione:'1581094488379-6a10d04c0f04',
  struttura:'1508450859948-4e04fabaa4ea',
}
// Foto reali dei cantieri Matrix Group, ottimizzate in /public: [larghezza piccola, larghezza grande, altezza grande]
export const REAL={
  ponteggio:[720,1200,1380],
  copertura:[600,960,1280],
  piattaforma:[720,1600,1200],
  accumulo:[720,1600,1200],
  'fv-impianto':[720,960,590],
  'fv-tetto':[720,1280,960],
  impalcatura:[720,1600,1200],
  'cantiere-team':[720,1200,900],
  'consulenza-team':[720,1200,900],
}
// Video di sfondo delle hero (senza audio).
// Home: due riprese in drone Pexels (licenza libera, https://www.pexels.com/license/):
// volo su campi e impianti fotovoltaici → impianto agrivoltaico (pannelli tra i pascoli)
const PV='https://videos.pexels.com/video-files/'
export const HERO={home:{poster:'https://images.pexels.com/videos/9485000/pexels-photo-9485000.jpeg?auto=compress&cs=tinysrgb&w=1600',clips:[
  {src:PV+'9485000/9485000-hd_1280_720_30fps.mp4',srcSm:PV+'9485000/9485000-sd_960_540_30fps.mp4'},
  {src:PV+'18438145/18438145-hd_1280_720_24fps.mp4',srcSm:PV+'18438145/18438145-sd_960_540_24fps.mp4',end:10},
]},
// Consulenza di cantiere: ripresa aerea propria
cantiere:{src:'/hero-cantiere.mp4',poster:'/hero-cantiere.webp'}}
export const CERTS=[{src:'/fgas.webp',w:286,h:232},{src:'/tesla.webp',w:480,h:355}]
