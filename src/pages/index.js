import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import CornestoneLayout from "../layouts/cornerstone"
import MainBlock from "../components/ui/main-block"
import Section from "../components/ui/section"
import Intro from "../components/ui/intro"

const IndexPage = ({ location }) => {
  const { portfolio, about, services } = useStaticQuery(
    graphql`
      query Images {
        portfolio: file(relativePath: { eq: "section-portfolio.png" }) {
          childImageSharp {
            fluid(maxWidth: 430) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        about: file(relativePath: { eq: "section-about.png" }) {
          childImageSharp {
            fluid(maxWidth: 430) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        services: file(relativePath: { eq: "section-services.png" }) {
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
    <CornestoneLayout location={location.pathname}>
      <Intro />
      <Section>
        <div className="container">
          <div className="columns">
            <div className="column">
              <MainBlock
                to="/services"
                title="Servizi"
                fluid={services.childImageSharp.fluid}
                label="Testo Testo Testo Testo Testo Testo Testo Testo Testo"
                caption="Scopri I Servizi"
              />
            </div>
            <div className="column">
              <MainBlock
                to="/about"
                title="Chi Sono"
                fluid={about.childImageSharp.fluid}
                label="Testo Testo Testo Testo Testo Testo Testo Testo Testo"
                caption="Leggi Di Più"
              />
            </div>
            <div className="column">
              <MainBlock
                to="/portfolio"
                title="Portfolio"
                fluid={portfolio.childImageSharp.fluid}
                label="Testo Testo Testo Testo Testo Testo Testo Testo Testo"
                caption="Guarda Il Portfolio"
              />
            </div>
          </div>
        </div>
      </Section>
    </CornestoneLayout>
  )
}

export default IndexPage
