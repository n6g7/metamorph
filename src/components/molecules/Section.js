import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { List } from "immutable"
import styled from "styled-components"

import Row from "./Row"

const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
`

class Section extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    compile: PropTypes.func.isRequired,
    files: PropTypes.instanceOf(List).isRequired,
    name: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
  }

  compile = file => () => this.props.compile(file)

  compileAll = () => {
    this.props.files.forEach(this.props.compile)
  }

  render() {
    const { files, name } = this.props

    const upToDate = files.reduce((utd, file) => utd && file.get("upToDate"), true)

    return (
      <Container>
        <Row
          title={ name }
          compile={this.compileAll}
          buttonLabel="Compile all"
          late={!upToDate}
        />
        {files.map((file, i) => (
          <Row
            key={i}
            compile={this.compile(file)}
            late={!file.get('upToDate')}
            path={file.get('source')}
          />
        ))}
      </Container>
    )
  }
}

export default  Section
