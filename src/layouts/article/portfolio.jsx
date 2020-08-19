import React from "react"
import { graphql } from "gatsby"
import { SEO } from "@pittica/gatsby-plugin-seo"
import Img from "gatsby-image"

import Footer from "../../components/ui/footer"
import MainNavBar from "../../components/ui/nav/main"

import "../../scss/layouts/article/_portfolio.scss"

export default class PortfolioTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <>
        <SEO title={post.title} path={this.props.location.pathname} />
        <MainNavBar location={this.props.location} />
        <main className="portfolio-main">
          <div className="container">
            <div className="columns">
              {post.frontmatter.logo && (
                <div className="column is-one-thirds">
                  <div className="portfolio-image">
                    <Img
                      fluid={post.frontmatter.logo.childImageSharp.fluid}
                      alt={post.frontmatter.title}
                    />
                  </div>
                </div>
              )}
              <div className="column is-two-thirds">
                <div className="portfolio-container">
                  <header className="header portfolio-header">
                    {post.frontmatter.title && (
                      <h1 className="title">{post.frontmatter.title}</h1>
                    )}
                    {post.frontmatter.description && (
                      <h2 className="subtitle">
                        {post.frontmatter.description}
                      </h2>
                    )}
                  </header>
                  <section
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />
                  {post.frontmatter.url && (
                    <a href={post.frontmatter.url} alt={post.frontmatter.url}>{post.frontmatter.url}</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}

export const pageQuery = graphql`
  query PortfolioTemplate($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        url
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
`
