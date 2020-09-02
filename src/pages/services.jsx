import React from "react"

import Container from "../layouts/container"
import Services from "../../content/pages/services"

export default ({ location }) => {
  return (
    <Container location={location} title="Services">
      <Services location={location} />
    </Container>
  )
}
