import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { connect } from "react-redux"

import { Switch } from "../atoms"
import logo from "../../assets/images/logo.svg"
import { toggleAutoCompile } from "../../redux/actions"

const Container = styled.header`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: ${p => css`${p.theme.spacing.mult(8)}px ${p.theme.spacing.mult(6)}px`};

  img {
    height: ${p => p.theme.spacing.mult(6)}px;
  }
`

class Header extends PureComponent {
  static propTypes = {
    autoCompile: PropTypes.bool.isRequired,
    toggleAutoCompile: PropTypes.func.isRequired,
  }

  render() {
    const { autoCompile, toggleAutoCompile } = this.props

    return (
      <Container>
        <img src={logo} className="logo" />

        <Switch value={autoCompile} onChange={toggleAutoCompile}>
          Auto compilation
        </Switch>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  autoCompile: state.get("autoCompile"),
})

const mapDispatchToProps = { toggleAutoCompile }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
