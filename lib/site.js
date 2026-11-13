// Contatti diretti: chiamata, SMS e WhatsApp sullo stesso numero
export const PHONE={tel:'tel:+393713375663',sms:'sms:+393713375663',wa:'https://wa.me/393713375663'}
export const SITE={name:'MATRIX GROUP S.R.L.S.',piva:'04279440368',addr:'Via Tommaso Frignani 103-105-107, 41125 Modena (MO)',tel:'+39 371 337 5663',mail:'amministrazione@matrix-group.it'}

// Foto libere da Unsplash (https://unsplash.com/license): sostituibili con foto proprie
export const PH={
  team:'1541888946425-d81bb19240f5',
  telaio:'1587582423116-ec07293f0395',
  gru:'1535732759880-bbd5c7265e3f',
  dallalto:'1504307651254-35680f356dfd',
  tramonto:'1579847188804-ecba0e2ea330',
  alba:'1599995903128-531fc7fb694b',
  sopralluogo:'1626885930974-4b69aa21bbf9',
  ferri:'1533378890784-b2a5b0a59d40',
  piani:'1742112125567-3e8967bad60f',
  stretta:'1742112125635-6f8201c6ee3f',
  dpi:'1662309376159-b95fb193d96b',
  caschi:'1552879890-3a06dd3a06c2',
  disegno:'1503387762-592deb58ef4e',
  progetto:'1608303588026-884930af2559',
  riunione:'1581094488379-6a10d04c0f04',
  struttura:'1508450859948-4e04fabaa4ea',
  ponteggi:'1531834685032-c34bf0d84c77',
  industria:'1582489853490-cd3a53eb4530',
  citta:'1565008447742-97f6f38c985c',
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
export const VIDEO={src:'/terrazza.mp4',poster:'/terrazza-poster.webp'}
// Video di sfondo delle hero (riprese aeree di cantiere, 1280×720, senza audio)
// Home: riprese in drone Pexels (licenza libera, https://www.pexels.com/license/), tutte girate in Italia:
// Verona (comparto civile, centro storico) → cantiere di due torri residenziali (Veneto) →
// comparto industriale tra il verde → impianto fotovoltaico (Sardegna, energia pulita)
const PV='https://videos.pexels.com/video-files/'
export const HERO={home:{poster:'https://images.pexels.com/videos/34631436/autumn-drone-houses-italy-34631436.jpeg?auto=compress&cs=tinysrgb&w=1600',clips:[
  {src:PV+'34631436/14677382_1280_720_50fps.mp4',srcSm:PV+'34631436/14677380_960_540_50fps.mp4',end:7},
  {src:PV+'38144441/16194659_1280_720_30fps.mp4',srcSm:PV+'38144441/16194658_960_540_30fps.mp4',end:8},
  {src:PV+'12445845/12445845-hd_1280_720_30fps.mp4',srcSm:PV+'12445845/12445845-sd_960_540_30fps.mp4',end:8},
  {src:PV+'19350561/19350561-hd_1280_720_30fps.mp4'},
]},cantiere:{src:'/hero-cantiere.mp4',poster:'/hero-cantiere.webp'}}
export const CERTS=[{src:'/fgas.webp',w:286,h:232},{src:'/tesla.webp',w:480,h:355}]
