import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { remote } from "electron"
import { connect } from "react-redux"

import { Button } from "../atoms"
import { languages } from "../../services/languages"
import { addFile } from "../../redux/actions"

const { dialog } = remote
const win = remote.getCurrentWindow()

const Container = styled.div`
  padding: 0 ${p => p.theme.spacing.mult(6)}px;
`

const Btn = Button.extend`
  background: ${p => p.theme.colours.purple};
  padding: ${p => css`${p.theme.spacing.mult(5)}px ${p.theme.spacing.mult(6)}px`};
  width: 100%;
  text-align: left;
`

class Banner extends PureComponent {
  static propTypes = {
    addFile: PropTypes.func.isRequired,
  }

  handlePick = () => {
    const paths = dialog.showOpenDialog(win, {
      properties: ["openFile", "multiSelections"],
      filters: languages,
    })

    if (!paths) return
    paths.forEach(this.props.addFile)
  }

  render () {
    return <Container>
      <Btn onClick={this.handlePick}>Add Stylus (.styl) or Pug (.pug) files</Btn>
    </Container>
  }
}

const mapDispatchToProps = { addFile }

export default connect(null, mapDispatchToProps)(Banner)
