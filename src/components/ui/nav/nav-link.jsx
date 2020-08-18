import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

const NavLink = ({ children, location, to }) => (
  <Link
    className={classNames({
      "navbar-item": true,
      "is-active": location.pathname === to
    })}
    to={to}
  >
    {children}
  </Link>
)

export default NavLink