import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Section from "../ui/section"
import PortfolioImage from "../ui/portfolio-image"

import "../../scss/mdx/_portfolio.scss"

const Portfolio = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          limit: 2000
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                description
                logo {
                  childImageSharp {
                    fluid(maxWidth: 212) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  if (allMarkdownRemark.edges.length > 0) {
    return (
      <div className="portfolio-wrapper">
        <Section>
          <div className="columns is-multiline">
            {allMarkdownRemark.edges.map(({ node }) => {
              return (
                <div className="column is-3" key={node.fields.slug}>
                  <article className="portfolio-item">
                    {node.frontmatter.logo && (
                      <Link to={node.fields.slug}>
                        <PortfolioImage frontmatter={node.frontmatter} />
                      </Link>
                    )}
                    {node.frontmatter.title && (
                      <Link to={node.fields.slug} className="porfolio-link">
                        {node.frontmatter.title}
                      </Link>
                    )}
                  </article>
                </div>
              )
            })}
          </div>
        </Section>
      </div>
    )
  } else {
    return null
  }
}

export default Portfolio
