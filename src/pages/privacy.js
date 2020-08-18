import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SingleLayout from "../layouts/single"
import Section from "../components/ui/section"
import Hero from "../components/ui/hero"

const PrivacyPage = ({ location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            organization {
              company
              address
              zipCode
              city
              province
              country
              email
              taxId
              vatId
            }
          }
        }
      }
    `
  )

  const organization = site.siteMetadata.organization

  return (
    <SingleLayout location={location.pathname}>
      <Hero title="Politica sulla Privacy" />
      <Section>
        <h2>Perché questo avviso?</h2>
        <p>Si tratta di un'informativa che è resa anche ai sensi dell'<a href="http://www.garanteprivacy.it/garante/doc.jsp?ID=1311248#articolo13" target="_blank" rel="noreferrer">art. 13 del d.lg. n. 196/2003 – Codice in materia di protezione dei dati personali</a> e Regolamento generale sulla protezione dei dati ("GDPR") a coloro che interagiscono con i servizi <em>web</em> di <strong>{organization.company}</strong>, accessibili per via telematica a partire dall'indirizzo <strong><a href={site.siteMetadata.siteUrl}>{site.siteMetadata.siteUrl}</a></strong> corrispondente alla pagina iniziale del sito.</p>
        <p>L'informativa è resa solo per il sito di <strong>{organization.company}</strong> e non anche per altri siti <em>web</em> eventualmente consultati dall'utente tramite <em>link</em>.</p>
        <p>L'informativa si ispira anche alla Raccomandazione n. 2/2001 che le autorità europee per la protezione dei dati personali, riunite nel Gruppo istituito dall'<a href="http://www.garanteprivacy.it/garante/document?ID=432175" target="_blank" rel="noreferrer">art. 29 della direttiva n. 95/46/CE</a>, hanno adottato il 17 maggio 2001 per individuare alcuni requisiti minimi per la raccolta di dati personali <em>on-line</em>, e, in particolare, le modalità, i tempi e la natura delle informazioni che i titolari del trattamento devono fornire agli utenti quando questi si collegano a pagine <em>web</em>, indipendentemente dagli scopi del collegamento.</p>
      </Section>
      <Section>
        <h2>Il Titolare del Trattamento</h2>
        <p>A seguito della consultazione di questo sito possono essere trattati dati relativi a persone identificate o identificabili. Il titolare del trattamento dei dati è <strong>{organization.company}</strong> con sede in {organization.address} in {organization.city} ({organization.province}), Codice Fiscale {organization.taxId} e Partita IVA {organization.vatId}.</p>
      </Section>
      <Section>
        <h2>Responsabile del Trattamento</h2>
        <p>{organization.company} (Codice Fiscale {organization.taxId}) è stato designato responsabile del trattamento ai sensi dell'<a href="http://www.garanteprivacy.it/garante/doc.jsp?ID=1311248#articolo29">articolo 29</a> del Codice in materia di protezione dei dati personali, in quanto responsabile del sito.</p>
      </Section>
      <Section>
        <h2>Tipi di Dati Trattati</h2>
        <ul>
          <li>
            <h4>Dati di Navigazione</h4>
            <p>I sistemi informatici e le procedure software preposte al funzionamento di questo sito Web acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. Si tratta di informazioni che non sono raccolte per essere associate a interessati identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di identificare gli utenti. In questa categoria di dati rientrano gli indirizzi IP o i nomi a dominio dei computer utilizzati dagli utenti che si connettono al sito, gli indirizzi in notazione URI (Uniform Resource Identifier) delle risorse richieste, l'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente. Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull'uso del sito e per controllarne il corretto funzionamento. I dati potrebbero essere utilizzati per l'accertamento di responsabilità in caso di ipotetici reati informatici ai danni del sito solo su richiesta degli organi di vigilanza preposti.</p>
          </li>
          <li>
            <h4>Dati forniti volontariamente dall'utente</h4>
            <p>L'invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo sito comporta la successiva acquisizione dell'indirizzo del mittente, necessario per rispondere alle richieste, nonché degli eventuali altri dati personali inseriti nella missiva.</p>
          </li>
          <li>
            <h4>Cookies</h4>
            <p>Nessun dato personale degli utenti viene in proposito acquisito dal sito. Non viene fatto uso di c.d. <em>cookies</em> per la trasmissione di informazioni di carattere personale, né vengono utilizzati c.d. <em>cookies</em> persistenti di alcun tipo, ovvero sistemi per il tracciamento degli utenti. L'uso di c.d. <em>cookies</em> di sessione (che non vengono memorizzati in modo persistente sul computer dell'utente e svaniscono con la chiusura del browser) è strettamente limitato alla trasmissione di identificativi di sessione (costituiti da numeri casuali generati dal server) necessari per consentire l'esplorazione sicura ed efficiente del sito. I c.d. <em>cookies</em> di sessione utilizzati in questo sito evitano il ricorso ad altre tecniche informatiche potenzialmente pregiudizievoli per la riservatezza della navigazione degli utenti e non consentono l'acquisizione di dati personali identificativi dell'utente.</p>
          </li>
          <li>
            <h4>Analisi Web</h4>
            <p>Raccogliamo i dati di utilizzo esclusivamente a fini statistici e per ottimizzare il nostro sito web. Si considerano dati di utilizzo data e ora dell'apertura del nostro sito, i tempi di permanenza sul nostro sito o le pagine ed i contenuti visitati. Il rilevamento dell'indirizzo IP, quando effettuato, viene utilizzato esclusivamente a fini statistici e non consente di risalire a una persona. Per la raccolta dei dati di utilizzo impieghiamo programmi di analisi (Web Analytics).</p>
          </li>
          <li>
            <h4>Google Analytics</h4>
            <p>Il nostro sito web utilizza, tra gli altri, anche Google Analytics, un servizio di analisi dei dati web di Google Inc. (di seguito "Google"). Google Analytics utilizza i c.d. <em>cookies</em>, ovvero file di testo che vengono salvati sul vostro computer e che consentono un'analisi dell'utilizzo del sito web da parte vostra. Le informazioni generate dai c.d. <em>cookies</em> riguardo al vostro utilizzo di questo sito web sono di regola trasferite e salvate su un server di Google negli USA. Qualora venga attivata su questo sito web l'anonimizzazione dell'indirizzo IP, Google provvederà tuttavia ad abbreviare il vostro indirizzo IP nell'ambito degli Stati membri dell'Unione Europea o di altri stati aderenti all'accordo sullo Spazio Economico Europeo. Solo in casi eccezionali l'indirizzo IP intero sarà trasmesso a un server di Google negli USA e successivamente abbreviato.</p>
            <p>Google utilizzerà queste informazioni per conto dell'amministratore di questo sito web per valutare il vostro utilizzo del sito, redigere report sulle attività del sito web e fornire altri servizi collegati all'utilizzo del sito e di Internet nei confronti dell'amministratore del sito web. L'indirizzo IP trasmesso dal vostro browser nell'ambito di Google Analytics non viene messo in relazione con altri dati di Google. È possibile impedire la memorizzazione dei c.d. <em>cookies</em> selezionando la corrispondente impostazione sul proprio browser; tuttavia, in tal caso non sarà eventualmente possibile utilizzare a pieno tutte le funzionalità di questo sito. È inoltre possibile impedire la raccolta da parte di Google dei dati generati tramite i c.d. <em>cookies</em> e riferiti al vostro utilizzo del sito web (incluso il vostro indirizzo IP), così come il trattamento dei dati da parte di Google, scaricando e installando il seguente <a href="https://tools.google.com/dlpage/gaoptout?hl=it" target="_blank" rel="noreferrer">plugin per il browser</a>. Potrete impedire il rilevamento da parte di Google Analytics cliccando sul link sottostante. In questo modo verrà installato un c.d. <em>cookies</em> di opt-out che impedirà la raccolta dei vostri dati durante la visita del nostro sito web: <a href="https://tools.google.com/dlpage/gaoptout?hl=it" target="_blank" rel="noreferrer">Disattiva Google Analytics</a>.</p>
            <p>Ulteriori informazioni sulle condizioni di utilizzo e la protezione dei dati di Google Analytics sono disponibili all'indirizzo <a href="http://www.google.com/analytics/terms/it.html" target="_blank" rel="noreferrer">http://www.google.com/analytics/terms/it.html</a>.</p>
            <p>Facciamo presente che la vostra opposizione all'analisi web effettuata viene memorizzata sotto forma di cookie di opt-out. La cancellazione dei cookie può eventualmente rendere inefficace l'opposizione riguardo all'analisi web eseguita.</p>
          </li>
        </ul>
      </Section>
      <Section>
        <h2>Facoltatività del Conferimenti dei Dati</h2>
        <p>A parte quanto specificato per i dati di navigazione, l'utente è libero di fornire i dati personali riportati nei moduli di richiesta a {organization.company} o comunque indicati in contatti per sollecitare l'invio di materiale informativo o di altre comunicazioni. Il loro mancato conferimento può comportare l'impossibilità di ottenere quanto richiesto.</p>
        <p>Per completezza va ricordato che in alcuni casi (non oggetto dell'ordinaria gestione di questo sito) l'Autorità può richiedere notizie e informazioni ai sensi dell'<a href="http://www.garanteprivacy.it/garante/doc.jsp?ID=1311248#articolo157" target="_blank" rel="noreferrer">articolo 157 del Codice in materia di protezione dei dati personali</a>, ai fini del controllo sul trattamento dei dati personali.</p>
        <p>In questi casi la risposta è obbligatoria a pena di sanzione amministrativa.</p>
      </Section>
      <Section>
        <h2>Parte riservata per i Minorenni</h2>
        <p>Nessuna persona di età inferiore ai 18 anni, senza previo consenso dei genitori o di chi ne fa le veci, potrà inviare informazioni a questo sito Web, ne tantomeno potrà fare acquisti o perfezionare atti legali presso questo sito senza il suddetto consenso, a meno che ciò non sia consentito dalle norme in vigore.</p>
      </Section>
      <Section>
        <h2>Diritti degli Interessati</h2>
        <p>I soggetti cui si riferiscono i dati personali hanno il diritto in qualunque momento di ottenere la conferma dell'esistenza o meno dei medesimi dati e di conoscerne il contenuto e l'origine, verificarne l'esattezza o chiederne l'integrazione o l'aggiornamento, oppure la rettifica (<a href="http://www.garanteprivacy.it/garante/doc.jsp?ID=1311248#articolo7" target="_blank" rel="noreferrer">articolo 7 del D.Lgs. n° 196/2003 del Codice in materia di protezione dei dati personali</a>). Ai sensi del medesimo articolo si ha il diritto di chiedere la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, nonché di opporsi in ogni caso, per motivi legittimi, al loro trattamento. Chiunque dovesse avere dubbi riguardanti il rispetto della politica per la tutela della privacy adottata da {organization.company}, la sua applicazione, l'accuratezza dei tuoi dati personali o l'utilizzo delle informazioni raccolte può contattarci tramite e-mail all'indirizzo <a href={"mailto:" + organization.email} title={organization.email}>{organization.email}</a>.</p>
      </Section>
      <Section>
        {organization.city}, {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}
      </Section>
    </SingleLayout>
  )
}

export default PrivacyPage
