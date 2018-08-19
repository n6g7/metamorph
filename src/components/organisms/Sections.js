import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { List } from "immutable"
import { connect } from "react-redux"
import styled from "styled-components"

import Section from "../molecules/Section"
import { Stylus, Pug } from "../../services/languages"
import { compileFile, removeFile } from "../../redux/actions"

const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  margin-top: ${p => p.theme.spacing.mult(8)}px;
`

class Sections extends PureComponent {
  static propTypes = {
    compile: PropTypes.func.isRequired,
    files: PropTypes.instanceOf(List).isRequired,
    remove: PropTypes.func.isRequired,
  }

  getFiles(type) {
    return this.props.files.filter(file => file.get("type") === type)
  }

  render() {
    return (
      <Container>
        <Section
          compile={this.props.compile}
          name="Stylus"
          remove={this.props.remove}
          files={this.getFiles(Stylus.name)}
        />
        <Section
          compile={this.props.compile}
          name="Pug"
          remove={this.props.remove}
          files={this.getFiles(Pug.name)}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  files: state.get("files"),
})

const mapDispatchToProps = {
  compile: compileFile,
  remove: removeFile,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sections)
