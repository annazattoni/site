import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import classNames from "classnames"

import Section from "../../components/ui/section"

import "../../scss/layouts/page/_section.scss"

export default ({ children, location, metadata, dark, side }) => (
  <Section dark={dark}>
    {metadata && metadata.title && (
      <h1 className="title">
        {metadata.title}
      </h1>
    )}
    <div className="columns">
      {side && dark && (
        <div className="column">
          {side}
        </div>
      )}
      <div
        className={classNames({
          column: true,
          "is-half": true,
          "is-offset-half": dark && !side,
        })}
      >
        <div className="page-section">
          <MDXProvider>{metadata.excerpt || children}</MDXProvider>
        </div>
        {location && (
          <div
            className={classNames({
              "has-text-right": !dark
            })}
          >
            <Link to={location} className="button readmore">Leggi di più...</Link>
          </div>
        )}
      </div>
      {side && !dark && (
        <div className="column">
          {side}
        </div>
      )}
    </div>
  </Section>
)
