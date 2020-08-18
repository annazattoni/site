import React, { Component } from "react"

import Section from "./section"

import intro from "../../images/intro.jpg"

import "../../scss/ui/_intro.scss"

export default class Intro extends Component {
  render() {
    return (
      <Section negative={true}>
        <figure className="image intro">
          <img src={intro} alt="Anna Zattoni" />
        </figure>
      </Section>
    )
  }
}
