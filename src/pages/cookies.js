import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SingleLayout from "../layouts/single"
import Section from "../components/ui/section"
import Hero from "../components/ui/hero"

const CookiesPage = ({ location }) => {
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
      <Hero title="Politica sui Cookie" subtitle={`Politica sui Cookie adottata da ${organization.company}`} />
      <Section>
        <h2>Cos'è un Cookie</h2>
        <p>I c.d. <em>cookies</em> sono semplici documenti di testo costituiti da porzioni di codice installate all'interno del browser che assistono il Titolare nell'erogazione del servizio in base alle finalità descritte. Alcune delle finalità di installazione dei c.d. <em>cookies</em> potrebbero, inoltre, necessitare del consenso dell'Utente.</p>
      </Section>
      <Section>
        <h2>Cookie tecnici e di statistica aggregata</h2>
        <p>Questo Sito Web e le Applicazioni utilizzate da esso necessitano dell'impiego dei c.d. <em>cookies</em>. Tra essi rientrano quelli utilizzati per salvare le preferenze sulla lingua, sull'aspetto e per la gestione delle statistiche sul funzionamento delle applicazioni medesime e sull'affluenza degli utenti.</p>
      </Section>
      <Section>
        <h2>Altre tipologie di Cookie o strumenti terzi che potrebbero farne utilizzo</h2>
        <p>Alcuni dei servizi elencati di seguito raccolgono statistiche in forma aggregata e potrebbero non richiedere il consenso dell'Utente o potrebbero essere gestiti direttamente dal Titolare, a seconda di quanto descritto, senza l'ausilio di terzi.</p>
        <p>Qualora fra gli strumenti indicati in seguito fossero presenti servizi gestiti da terzi, questi potrebbero, in aggiunta a quanto specificato ed anche all'insaputa del Titolare, compiere attività di tracciamento dell'Utente.</p>
        <p>Per informazioni dettagliate in merito, si consiglia di consultare le Politica sulla Privacy dei servizi elencati.</p>
        <p>I servizi elencati possono essere al momento disattivati ed essere impiegati straordinariamente dal Titolare.</p>
        <h4>Statistica</h4>
        <p>I servizi contenuti nella presente sezione permettono al Titolare del Trattamento di monitorare e analizzare i dati di traffico e servono a tener traccia del comportamento dell'Utente.</p>
        <h5>Google Analytics (Google Inc.)</h5>
        <p>Google Analytics è un servizio di analisi web fornito da Google Inc. e/o Google Ireland Limited ("Google"). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l'utilizzo di questa Applicazione, compilare report e condividerli con gli altri servizi sviluppati da Google.</p>
        <p>Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del proprio network pubblicitario.</p>
        <ul>
          <li>Dati personali raccolti: Cookie e Dati di utilizzo.</li>
          <li>Luogo del trattamento: USA/Irlanda</li>
          <li><a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noreferrer">Politica sulla Privacy</a></li>
          <li><a href="http://tools.google.com/dlpage/gaoptout?hl=it" target="_blank" rel="noreferrer">Opt-Out</a></li>
          <li>Cookie: _ga, _gat</li>
          <li>Durata: 2 anni</li>
        </ul>
        <h4>Protezione dallo SPAM</h4>
        <p>Questo tipo di servizi analizzano il traffico per prevenire SPAM verso il Titolare.</p>
        <h5>Google reCAPTCHA (Google Inc.)</h5>
        <p>Google reCAPTCHA è un servizio di protezione dallo SPAM fornito da Google Inc. e/o Google Ireland Limited ("Google"). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l'utilizzo di questa Applicazione, compilare report e condividerli con gli altri servizi sviluppati da Google.</p>
        <ul>
          <li>Dati personali raccolti: Cookie e Dati di utilizzo.</li>
          <li>Luogo del trattamento: USA/Irlanda</li>
          <li><a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noreferrer">Politica sulla Privacy</a></li>
        </ul>
        <h4>Contenuti Esterni</h4>
        <p>Questo tipo di servizi forniscono contenuti.</p>
        <h5>Google Fonts (Google Inc.)</h5>
        <p>Google Fonts Google Fonts è una libreria di font con licenza libera fornita da Google Inc. e/o Google Ireland Limited ("Google"). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l'utilizzo di questo sito, compilare report e condividerli con gli altri servizi sviluppati da Google.</p>
        <ul>
          <li>Dati personali raccolti: Cookie e Dati di utilizzo.</li>
          <li>Luogo del trattamento: USA/Irlanda</li>
          <li><a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noreferrer">Politica sulla Privacy</a></li>
        </ul>
        <h4>Visualizzazione di contenuti da piattaforme esterne</h4>
        <p>Questi servizi permettono di visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di questa Applicazione e di interagire con essi.</p>
        <p>Nel caso in cui sia installato un servizio di questo tipo, è possibile che, anche nel caso gli Utenti non utilizzino il servizio, lo stesso raccolga dati di traffico relativi alle pagine in cui è installato.</p>
        <h5>Widget Contenuti YouTube (Google Inc.)</h5>
        <p>YouTube è un servizio di visualizzazione di contenuti video gestito da Google Inc. che permette a questa Applicazione di integrare tali contenuti all'interno delle proprie pagine.</p>
        <ul>
          <li>Dati personali raccolti: Cookie e Dati di utilizzo.</li>
          <li>Luogo del trattamento: USA</li>
          <li><a href="http://www.google.com/intl/it/policies/privacy/" target="_blank" rel="noreferrer">Politica sulla Privacy</a></li>
        </ul>
        <h5>Widget Contenuti Vimeo (Vimeo LLC)</h5>
        <p>Vimeo è un servizio di visualizzazione di contenuti video gestito da Vimeo LLC che permette a questa Applicazione di integrare tali contenuti all'interno delle proprie pagine.</p>
        <ul>
          <li>Dati personali raccolti: Cookie e Dati di utilizzo.</li>
          <li>Luogo del trattamento: USA</li>
          <li><a href="https://vimeo.com/privacy" target="_blank" rel="noreferrer">Politica sulla Privacy</a></li>
          <li><a href="https://vimeo.com/cookie_policy" target="_blank" rel="noreferrer">Politica sui Cookie</a></li>
        </ul>
      </Section>
      <Section>
        <h2>Come posso controllare l'installazione di Cookie</h2>
        <p>L'Utente può gestire le preferenze relative ai c.d. <em>cookies</em> direttamente all'interno del proprio browser ed impedire che terze parti possano installarne.</p>
        <p>Il funzionamento di questo Sito Web o le sue Applicazioni potrebbe essere compromesso se i c.d. <em>cookies</em> venissero disabilitati.</p>
        <p>Tramite le preferenze del browser è inoltre possibile eliminare i c.d. <em>cookies</em> installati in passato, incluso il c.d. <em>cookies</em> in cui venga eventualmente salvato il consenso all'installazione di c.d. <em>cookies</em> da parte di questo sito.</p>
        <ul>
          <li>
            <h5>Google Chrome</h5>
            <p><a title="Google Chrome" href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">Documentazione</a></p>
          </li>
          <li>
            <h5>Mozilla Firefox</h5>
            <p><a title="Mozilla Firefox" href="http://mzl.la/1BAQFQq" target="_blank" rel="noreferrer">Documentazione</a></p>
          </li>
          <li>
            <h5>Apple Safari</h5>
            <p><a title="Apple Safari" href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">Documentazione</a></p>
          </li>
          <li>
            <h5>Microsoft Windows Explorer</h5>
            <p><a title="Microsoft Windows Explorer" href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noreferrer">Documentazione</a></p>
          </li>
          <li>
            <h5>Microsoft Edge</h5>
            <p><a title="Microsoft Edge" href="https://support.microsoft.com/it-it/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noreferrer">Documentazione</a></p>
          </li>
          <li>
            <h5>Opera</h5>
            <p><a title="Opera" href="https://help.opera.com/it/latest/web-preferences/#cookies" target="_blank" rel="noreferrer">Documentazione</a></p>
          </li>
        </ul>
        <p>In caso di servizi erogati da terze parti, l'Utente può inoltre esercitare il proprio diritto ad opporsi al tracciamento informandosi tramite la privacy policy della terza parte, tramite il link di Opt-Out se esplicitamente fornito o contattando direttamente la stessa.</p>
        <p>Il Titolare informa che l'Utente può avvalersi di <a title="Your Online Choices" href="http://www.youronlinechoices.com/" target="_blank" rel="noreferrer">Your Online Choices</a>. Attraverso tale servizio è possibile gestire le preferenze di tracciamento della maggior parte degli strumenti pubblicitari. Il Titolare, pertanto, consiglia agli Utenti di utilizzare tale risorsa in aggiunta alle informazioni fornite dal presente documento.</p>
      </Section>
      <Section>
        <h2>Titolare del Trattamento dei Dati</h2>
        <blockquote>
          {organization.company}<br />
          {organization.address}<br />
          {organization.zipCode} {organization.city} ({organization.province})<br />
          {organization.country}<br />
          <a href={`mailto:${organization.email}`} title={organization.email}>{organization.email}</a>
        </blockquote>
        <p>Dal momento che l'installazione di c.d. <em>cookies</em> e di altri sistemi di tracciamento operata da terze parti tramite i servizi utilizzati all'interno di questo Sito Web e delle sue Applicazioni non può essere tecnicamente controllata dal Titolare, ogni riferimento specifico a c.d. <em>cookies</em> e sistemi di tracciamento installati da terze parti è da considerarsi indicativo. Per ottenere informazioni complete, consulta la privacy policy degli eventuali servizi terzi elencati in questo documento.</p>
        <p>Vista l'oggettiva complessità legata all'identificazione delle tecnologie basate sui c.d. <em>cookies</em> ed alla loro integrazione molto stretta con il funzionamento del web, l'Utente è invitato a contattare il Titolare qualora volesse ricevere qualunque approfondimento relativo all'utilizzo dei c.d. <em>cookies</em> stessi e ad eventuali utilizzi degli stessi, ad esempio ad opera di terzi, effettuati tramite questo Sito Web.</p>
      </Section>
      <Section>
        <h2>Definizioni</h2>
        <ul>
          <li>
            <h5>Dati Personali</h5>
            <p>Costituisce dato personale qualunque informazione relativa a persona fisica, identificata o identificabile, anche indirettamente, mediante riferimento a qualsiasi altra informazione, ivi compreso un numero di identificazione personale.</p>
          </li>
          <li>
            <h5>Dati di Utilizzo</h5>
            <p>Sono le informazioni raccolte in maniera automatica da questo Sito Web e le sue Applicazioni (o dalle applicazioni di parti terze che questo Sito Web utilizza), tra i quali: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall'Utente che si connette con questa Applicazione, gli indirizzi in notazione URI (Uniform Resource Identifier), l'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.), il Paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all'itinerario seguito all'interno del Sito Web, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all'ambiente informatico dell'Utente.</p>
          </li>
          <li>
            <h5>Utente</h5>
            <p>L'individuo che utilizza questa Applicazione, che deve coincidere con l'Interessato o essere da questo autorizzato ed i cui Dati Personali sono oggetto del trattamento.</p>
          </li>
          <li>
            <h5>Interessato</h5>
            <p>La persona fisica o giuridica cui si riferiscono i Dati Personali.</p>
          </li>
          <li>
            <h5>Responsabile del Trattamento</h5>
            <p>La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente, associazione od organismo preposti dal Titolare al trattamento dei Dati Personali, secondo quanto predisposto dalla presente Politica sulla Privacy.</p>
          </li>
          <li>
            <h5>Titolare del Trattamento</h5>
            <p>La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente, associazione od organismo cui competono, anche unitamente ad altro titolare, le decisioni in ordine alle finalità, alle modalità del trattamento di dati personali ed agli strumenti utilizzati, ivi compreso il profilo della sicurezza, in relazione al funzionamento e alla fruizione di questa Applicazione.</p>
            <p>Il Titolare del Trattamento, salvo quanto diversamente specificato, è il proprietario di questa Applicazione.</p>
          </li>
          <li>
            <h5>Applicazioni</h5>
            <p>Gli strumenti hardware o software che compongono il servizio con cui state interagendo e mediante le quali sono raccolti i Dati Personali degli Utenti.</p>
          </li>
          <li>
            <h5>Cookie</h5>
            <p>Piccola porzione di dati conservata all'interno del dispositivo dell'Utente.</p>
          </li>
        </ul>
      </Section>
    </SingleLayout>
  )
}

export default CookiesPage
