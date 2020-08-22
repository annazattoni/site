import React from "react"
import { SEO } from "@pittica/gatsby-plugin-seo"

import Footer from "../components/ui/footer"
import MainNavBar from "../components/ui/nav/main"

export default ({ children, location, title }) => (
  <>
    <SEO title={title} path={location.pathname} />
    <MainNavBar location={location} />
    {children}
    <Footer />
  </>
)
