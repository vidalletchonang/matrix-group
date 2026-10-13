import Link from 'next/link'
import {Hero,Cta,PH} from '../../components/ui'
export const metadata={title:'Domande frequenti',description:'Risposte alle domande più comuni sulla consulenza di cantiere, sulla sicurezza sul lavoro e sul servizio di RSPP esterno.'}
const FAQ=[
  ['Che cosa si intende per consulenza di cantiere?','È un supporto tecnico e organizzativo, indipendente dalla realizzazione diretta delle opere: aiutiamo a pianificare le fasi, organizzare le lavorazioni, coordinare le figure coinvolte e risolvere criticità tecniche o organizzative.'],
  ['Sostituite il direttore dei lavori o il coordinatore per la sicurezza?','No. Le nostre attività si svolgono nel rispetto dei ruoli, delle responsabilità e degli incarichi professionali previsti dalla normativa, senza sovrapporci alle figure tecniche formalmente incaricate. Lavoriamo al loro fianco.'],
  ['Potete intervenire solo su una fase del cantiere?','Sì. Possiamo seguire un progetto nel suo insieme oppure intervenire su singole fasi o problematiche specifiche, anche su cantieri di aziende esterne.'],
  ['Chi è il RSPP e quando serve?','Il Responsabile del Servizio di Prevenzione e Protezione collabora con il datore di lavoro nella valutazione dei rischi, nelle misure di prevenzione e protezione e nella formazione dei lavoratori. Secondo il D.Lgs. 81/2008 la sua designazione è un obbligo del datore di lavoro, che non può delegarlo.'],
  ['Il ruolo di RSPP può essere affidato a una figura esterna?','Sì, il decreto consente di affidare il servizio a un soggetto esterno all\'azienda, purché in possesso delle capacità e dei requisiti professionali previsti dall\'art. 32. Matrix Group svolge questo ruolo solo quando ricorrono tali requisiti e previo formale incarico.'],
  ['Il datore di lavoro può svolgere personalmente il ruolo di RSPP?','In alcuni casi sì: l\'art. 34 del D.Lgs. 81/2008 lo consente in determinate tipologie e dimensioni di azienda, previa specifica formazione. Possiamo aiutarti a capire se rientri in questi casi e a organizzare gli adempimenti.'],
  ['Vi occupate anche della formazione dei lavoratori?','Affianchiamo l\'azienda nell\'organizzazione della formazione e dell\'informazione dei lavoratori, nella programmazione delle scadenze e nel coordinamento con le altre figure aziendali coinvolte.'],
  ['Dove operate?','La nostra sede è a Modena. Contattaci per verificare la disponibilità per il tuo cantiere o la tua azienda.'],
  ['Come posso richiedere una consulenza?','Compila il modulo nella pagina Contatti o scrivici via email, descrivendo brevemente la tua esigenza: ti ricontatteremo per approfondire.'],
]
export default function Page(){return(<>
<Hero img={PH.progetto} alt="Persone che esaminano disegni di progetto su una scrivania" eyebrow="FAQ" title={<>Domande <em>frequenti</em></>} text="Le risposte alle domande che ci vengono rivolte più spesso."/>
<section><div className="w"><div className="faq">{FAQ.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}</summary><p>{a}</p></details>)}</div>
<p className="small" style={{maxWidth:820}}>Le informazioni hanno carattere generale e non sostituiscono la verifica del caso specifico. Non trovi la tua domanda? <Link className="more" href="/contatti">Scrivici</Link>.</p></div></section>
<Cta/></>)}
