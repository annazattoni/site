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
