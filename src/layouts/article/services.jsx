import React from "react"
import { graphql } from "gatsby"
import { SEO } from "@pittica/gatsby-plugin-seo"

import Footer from "../../components/ui/footer"
import MainNavBar from "../../components/ui/nav/main"

export default class ServicesTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <>
        <SEO title={post.title} path={this.props.location.pathname} />
        <MainNavBar location={this.props.location} />
        <main className="page-main">
          <div className="container">
            <section
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </main>
        <Footer />
      </>
    )
  }
}

export const pageQuery = graphql`
  query ServicesTemplate($slug: String!) {
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
      }
    }
  }
`
