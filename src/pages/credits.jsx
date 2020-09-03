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
      <Hero title="Credits" subtitle="Crediti" />
      <Section>
        Quando una copy in stato confusionale post-brainstorming incontra una
        grafica che sogna di essere Margherita Hack e un developer che non beve
        caffè, la copy in stato confusionale post-brainstorming capisce subito
        di essere in buone mani. Sara Silvestri e Lucio Benini sono i due
        professionisti che hanno contribuito alla concretizzazione del mio
        brainstorming. Con grande indulgenza, per (mia) fortuna.
      </Section>
      <Section>
        <div className="columns">
          <div className="column">
            <Img fluid={sara.childImageSharp.fluid} alt="Sara" />
          </div>
          <div className="column">
            <Img fluid={lucio.childImageSharp.fluid} alt="Lucio" />
          </div>
        </div>
      </Section>
    </SingleLayout>
  )
}

export default CreditsPage
