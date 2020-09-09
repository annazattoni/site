import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Img from "gatsby-image"

import Container from "./container"

import Accordion from "../components/mdx/accordion"
import Portfolio from "../components/mdx/portfolio"
import Services from "../components/mdx/services"
import ContactForm from "../components/mdx/contact-form"

import "../scss/layouts/page/_page.scss"

export default ({ children, location, metadata }) => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { extension: { eq: "png" } }) {
          edges {
            node {
              id
              absolutePath
              name
              ext
              childImageSharp {
                fluid(maxWidth: 430) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    `
  )

  let image = null

  allFile.edges.forEach(({ node }) => {
    if (metadata.image === node.name + node.ext) {
      image = node.childImageSharp.fluid

      return false
    }
  })

  const shortcodes = {
    accordion: Accordion,
    portfolio: Portfolio,
    services: Services,
    contactform: ContactForm,
    link: Link
  }
  const body = (
    <main className="page-main">
      <div className="container">
        <div className="columns">
          {image && (
            <div className="column is-one-thirds">
              <div className="page-image">
                <Img fluid={image} alt={metadata.title} />
              </div>
            </div>
          )}
          <div className="column is-two-thirds">
            <div className="page-container">
              <header className="header page-header">
                {metadata.title && !metadata.compact && (
                  <h1 className="title">{metadata.title}</h1>
                )}
                {metadata.description && (
                  <h2 className="subtitle">{metadata.description}</h2>
                )}
              </header>
              <MDXProvider components={shortcodes}>{children}</MDXProvider>
            </div>
          </div>
        </div>
      </div>
    </main>
  )

  if (metadata.container || typeof metadata.container === "undefined") {
    return (
      <Container location={location} title={metadata.title}>
        {body}
      </Container>
    )
  } else {
    return body
  }
}
