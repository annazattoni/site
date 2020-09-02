import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Section from "../ui/section"
import Accordion from "./accordion"

const Services = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          limit: 2000
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { slug: { regex: "/^/services//s" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                description
              }
              html
            }
          }
        }
      }
    `
  )

  if (allMarkdownRemark.edges.length > 0) {
    return (
      <div className="services-wrapper">
        <Section>
          {allMarkdownRemark.edges.map(({ node }) => {
            console.log(node)
            return (
              <Accordion
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                key={node.fields.slug}
              >
                <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
              </Accordion>
            )
          })}
        </Section>
      </div>
    )
  } else {
    return null
  }
}

export default Services
