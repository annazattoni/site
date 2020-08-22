import React from "react"

import Portfolio from "../../content/pages/portfolio"
import Container from "../layouts/container"
import PortfolioMDX from "../components/mdx/portfolio"

export default ({ location }) => (
  <Container location={location} title="Portfolio">
    <Portfolio location={location} />
    <PortfolioMDX />
  </Container>
)
