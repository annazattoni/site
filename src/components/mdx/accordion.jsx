import React, { Component } from "react"
import { Link } from "gatsby"
import classNames from "classnames"

import "../../scss/mdx/_accordion.scss"

export default class Accordion extends Component {
  state = {
    active: false,
  }

  handleClick = e => {
    e.preventDefault()

    this.setState(state => ({ active: !state.active }))

    return false
  }

  render() {
    return (
      <div
        className={classNames({
          accordion: true,
          "is-active": this.state.active,
        })}
      >
        <div className="accordion-header">
          <Link className="accordion-toggle" to="#" onClick={this.handleClick}>
            {this.state.active ? "-" : "+"}
          </Link>
          {this.props.title && (
            <h1 className="title">
              <Link
                to="#"
                onClick={this.handleClick}
              >
                {this.props.title}
              </Link>
            </h1>
          )}
          {this.props.description && (
            <h2 className="description">{this.props.description}</h2>
          )}
        </div>
        <div className="accordion-body">{this.props.children}</div>
      </div>
    )
  }
}
