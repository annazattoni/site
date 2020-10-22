import React from "react"

import Container from "../layouts/container"
import Services from "../../content/pages/services"

export default ({ location }) => {
  return (
    <Container location={location} title="Servizi">
      <Services location={location} />
    </Container>
  )
}
