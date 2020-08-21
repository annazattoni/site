import React, { Component } from "react"
import { SEO } from "@pittica/gatsby-plugin-seo"

import MainNavBar from "../components/ui/nav/main"
import Footer from "../components/ui/footer"

import "../scss/layouts/_single-layout.scss"

export default class SingleLayout extends Component {
  render() {
    return (
      <div className="single-layout has-navbar-fixed-top">
        <SEO path={this.props.location.pathname} />
        <MainNavBar location={this.props.location} />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    )
  }
}
