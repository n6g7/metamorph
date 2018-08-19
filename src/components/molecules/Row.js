import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import path from "path"
import { Map } from "immutable"
import styled, { css } from "styled-components"

import { Button, Status } from "../atoms"

const Container = styled.article`
  align-items: center;
  border-bottom: ${p => p.theme.spacing.mult(0.5)}px solid ${p => p.theme.colours.black};
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  height: ${p => p.theme.spacing.mult(14)}px;
  padding: ${p => css`${p.theme.spacing.mult(3)}px ${p.theme.spacing.mult(6)}px`};

  ${p => p.title && css`
    background: ${p.theme.colours.darkGrey};
  `}

  ${Status} {
    margin-left: ${p => p.theme.spacing.mult(3)}px;
  }

  &:not(:first-child):not(:last-child) {
    border-bottom-color: ${p => p.theme.colours.darkGrey};
  }
`

const Label = styled.p`
  flex-grow: 1;
  margin: 0;
`

const FilePath = styled.ol`
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  font-size: 14px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    &:not(:last-child) {
      color: ${p => p.theme.colours.grey};

      &::after {
        content: '/'
      }
    }
  }
`


class Row extends PureComponent {
  static propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    compile: PropTypes.func.isRequired,
    file: PropTypes.instanceOf(Map).isRequired,
    late: PropTypes.bool.isRequired,
    path: PropTypes.string,
    remove: PropTypes.func.isRequired,
    title: PropTypes.string,
  }

  static defaultProps = {
    buttonLabel: "Compile"
  }

  renderSource = () => {
    const { path: filePath } = this.props
    const data = path.parse(filePath)

    const parts = data.dir.split(path.sep).slice(-3)
    parts.unshift("...")

    return (
      <FilePath data->
        {parts.map((part, i) => <li key={i}>{part}</li>)}
        <li>{data.base}</li>
      </FilePath>
    )
  }

  render() {
    const { buttonLabel, compile, late, path, title } = this.props

    return (
      <Container title={!!title}>
        { title && <Label>{title}</Label> }
        { path && this.renderSource() }
        { late && <Button onClick={compile}>{ buttonLabel }</Button> }
        <Status late={late} />
      </Container>
    )
  }
}

export default Row
