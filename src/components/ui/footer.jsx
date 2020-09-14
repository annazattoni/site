import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import classNames from "classnames"
import PropTypes from "prop-types"

import "../../scss/ui/_footer.scss"

const Footer = ({ dark }) => {
  const { site, siteBuildMetadata } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            organization {
              company
              address
              zipCode
              city
              province
              country
              email
              taxId
              vatId
              registryId
            }
          }
        }
        siteBuildMetadata {
          fields {
            seo {
              socials {
                linkedin {
                  page
                }
              }
            }
          }
        }
      }
    `
  )

  const {
    company,
    address,
    zipCode,
    city,
    province,
    country,
    email,
    taxId,
    vatId,
    registryId,
  } = site.siteMetadata.organization
  const { linkedin } = siteBuildMetadata.fields.seo.socials
  let tax = ""

  if (taxId !== "" && vatId !== "") {
    if (taxId === vatId) {
      tax = <p>Codice Fiscale / Partita IVA {vatId}</p>
    } else {
      tax = (
        <>
          <p>Codice Fiscale {taxId}</p>
          <p>Partita IVA {vatId}</p>
        </>
      )
    }
  }

  return (
    <footer
      className={classNames({
        footer: true,
        "is-dark": dark,
      })}
    >
      <div className="container">
        <div className="columns">
          <div className="column">
            <h4>{company}</h4>
            <div className="block">
              <p>{address}</p>
              <p>
                {zipCode} {city} ({province})
              </p>
              <p>{country}</p>
            </div>
            <div className="block">
              {tax}
              {registryId && <p>REA {registryId}</p>}
            </div>
            <div className="block">
              <a href={`mailto:${email}`} title={email}>
                {email}
              </a>
            </div>
            <div className="block">
              <a
                href={`https://linkedin.com/in/${linkedin.page}`}
                title="LinkedIn"
                className="social-follow"
                target="_system"
              >
                <i className="icon-annazattoni-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          © {new Date().getFullYear()}, {company} -{" "}
          <Link to="/privacy">Politica sulla Privacy</Link> -{" "}
          <Link to="/cookies">Politica sui Cookie</Link> -{" "}
          <Link to="/credits">Credits</Link>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  dark: PropTypes.bool,
}

Footer.defaultProps = {
  dark: false,
}

export default Footer
