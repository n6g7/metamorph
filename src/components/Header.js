import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import Switch from "./common/Switch"
import logo from "../assets/images/logo.svg"

class Header extends PureComponent {
  static propTypes = {
    autoCompile: PropTypes.bool.isRequired,
    toggleAutoCompile: PropTypes.func.isRequired,
  }

  render() {
    const { autoCompile, toggleAutoCompile } = this.props

    return (
      <header>
        <img src={logo} className="logo" />
        <nav>
          <Switch value={autoCompile} onChange={toggleAutoCompile}>
            Auto compilation
          </Switch>
        </nav>
      </header>
    )
  }
}

export default Header
