import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import "../../scss/ui/_portfolio-image.scss"

export default class Section extends Component {
  render() {
    return (
      <div className="column is-one-thirds">
        <div className="portfolio-image">
          <Img
            fluid={this.props.frontmatter.logo.childImageSharp.fluid}
            alt={this.props.frontmatter.title}
          />
        </div>
      </div>
    )
  }
}

Section.propTypes = {
  frontmatter: PropTypes.object,
}

Section.defaultProps = {
  frontmatter: false,
}
