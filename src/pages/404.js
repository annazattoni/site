import React, { Component } from "react"
import { Link } from "gatsby"

import CornestoneLayout from "../layouts/cornerstone"
import Hero from "../components/ui/hero"
import Section from "../components/ui/section"

export default class NotFoundPage extends Component {
  render() {
    return (
      <CornestoneLayout location={this.props.location.pathname}>
        <Hero title="NOT FOUND" subtitle="Pagina non trovata" />
        <Section dark={true}>
          <div className="has-text-centered">
            <Link to="/" className="button">Torna alla home</Link>
          </div>
        </Section>
      </CornestoneLayout>
    )
  }
}
