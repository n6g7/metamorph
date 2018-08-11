import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import Status from "./Status"

class CompileButton extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    late: PropTypes.bool,
    onClick: PropTypes.func,
  }

  render() {
    const { label, late, onClick } = this.props

    return (
      <Status late={late}>
        <button onClick={onClick}>{label}</button>
      </Status>
    )
  }
}

export default CompileButton
