import React from "react"

import Section from "./page/section"
import Page from "./page/page"

export default ({ children, location, metadata, section, dark, side }) => {
  if (section) {
    return (
      <Section location={location} children={children} metadata={metadata} dark={dark} side={side} />
    )
  } else {
    return (
      <Page location={location} children={children} metadata={metadata} />
    )
  }
}
