import React, { Component } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import "../../scss/ui/_logo.scss"

export default class Logo extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 406.97 83.06"
        className={classNames({ logo: true, negative: this.props.negative })}
      >
        <path d="M116.96 79.62V3.72l61.5 71.38V3.59h2.83v76.03h-2.68L119.8 11.36v68.27h-2.84zm-113.78 0l35.68-69.9 34.91 69.9h3.17L38.89 3.44 0 79.62h3.18zm286.83 0V3.72l-61.5 71.38V3.59h-2.83v76.03h2.68l58.82-68.27v68.27h2.83zm116.96 0L368.08 3.44l-38.05 76.19h3.17l34.91-69.9 35.68 69.9h3.18z" />
      </svg>
    )
  }
}

Logo.propTypes = {
  negative: PropTypes.bool,
}

Logo.defaultProps = {
  negative: false,
}
