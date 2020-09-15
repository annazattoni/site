import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SingleLayout from "../layouts/single"
import Section from "../components/ui/section"
import Hero from "../components/ui/hero"

const CreditsPage = ({ location }) => {
  const { lucio, sara } = useStaticQuery(
    graphql`
      query CreditsImages {
        lucio: file(relativePath: { eq: "credits-lucio.png" }) {
          childImageSharp {
            fluid(maxWidth: 430) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        sara: file(relativePath: { eq: "credits-sara.png" }) {
          childImageSharp {
            fluid(maxWidth: 430) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <SingleLayout location={location.pathname}>
      <Hero title="Credits" subtitle="Ecco chi voglio ringraziare" />
      <Section>
        Quando una copy in stato confusionale da brainstorming incontra una
        grafica che sogna di essere Margherita Hack e un developer che non beve
        mai caffè, la copy in stato confusionale da brainstorming capisce subito di
        essere in buone mani...
        <br />
        SARA SILVESTRI e LUCIO BENINI sono i due professionisti che hanno saputo
        concretizzare ciò che avevo in mente (con una pazienza degna del
        Dalai Lama).
        <br />A loro vanno tutti i miei ringraziamenti per la realizzazione di questo sito. GRAZIE, GRAZIE e GRAZIE. E già che ci siamo, ancora GRAZIE!
      </Section>
      <Section>
        <div className="columns">
          <div className="column is-2"></div>
          <div className="column is-4">
            <Img fluid={sara.childImageSharp.fluid} alt="Sara" />
          </div>
          <div className="column is-4">
            <a href="https://pittica.com" target="_system">
              <Img fluid={lucio.childImageSharp.fluid} alt="Lucio" />
            </a>
          </div>
          <div className="column is-2"></div>
        </div>
      </Section>
    </SingleLayout>
  )
}

export default CreditsPage
