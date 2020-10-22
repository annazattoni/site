import React from "react"
import { SEO } from "@pittica/gatsby-plugin-seo"

import Footer from "../components/ui/footer"
import MainNavBar from "../components/ui/nav/main"

export default ({ children, location, title, description }) => (
  <>
    <SEO title={title} path={location.pathname} description={description} />
    <MainNavBar location={location} />
    {children}
    <Footer />
  </>
)
