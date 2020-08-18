import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { SEO } from "@pittica/gatsby-plugin-seo"
import Img from "gatsby-image"

import Footer from "../../components/ui/footer"
import MainNavBar from "../../components/ui/nav/main"

import Accordion from "../../components/mdx/accordion"

import "../../scss/layouts/page/_page.scss"

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

  return (
    <>
      <SEO title={metadata.title} path={location.pathname} />
      <MainNavBar location={location} />
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
                <MDXProvider components={{ accordion: Accordion }}>
                  {children}
                </MDXProvider>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
