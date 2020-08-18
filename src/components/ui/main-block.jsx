import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import "../../scss/ui/_main-block.scss"

export default class MainBlock extends Component {
  render() {
    return (
      <div className="main-block">
        <Link to={this.props.to} title={this.props.title}>
          <Img fluid={this.props.fluid} alt={this.props.title} />
        </Link>
        <h2>
          <Link to={this.props.to} title={this.props.title}>
            {this.props.label}
          </Link>
        </h2>
        <Link to={this.props.to} title={this.props.title} className="caption">
          {this.props.caption}
        </Link>
      </div>
    )
  }
}

MainBlock.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  fluid: PropTypes.object.isRequired,
}

MainBlock.defaultProps = {}
