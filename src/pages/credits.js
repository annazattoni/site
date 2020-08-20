import React from "react"

import SingleLayout from "../layouts/single"
import Section from "../components/ui/section"
import Hero from "../components/ui/hero"

const CreditsPage = ({ location }) => {
  return (
    <SingleLayout location={location.pathname}>
      <Hero title="Credits" subtitle="Crediti" />
      <Section>
        
      </Section>
    </SingleLayout>
  )
}

export default CreditsPage
