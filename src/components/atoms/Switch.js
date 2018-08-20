import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
`

const Widget = styled.span`
  border: solid ${p => p.theme.spacing.unit}px ${p => p.theme.colours.white};
  border-radius: 0 ${p => p.theme.spacing.mult(3)}px ${p => p.theme.spacing.mult(3)}px 0;
  box-sizing: border-box;
  display: inline-block;
  height: ${p => p.theme.spacing.mult(6)}px;
  margin-left: ${p => p.theme.spacing.mult(3)}px;
  position: relative;
  width: ${p => p.theme.spacing.mult(9)}px;

  &::after {
    background: ${p => p.theme.colours.grey};
    border-radius: 1px;
    content: '';
    left: 3px;
    position: absolute;
    height: ${p => p.theme.spacing.mult(2.5)}px;
    top: 3px;
    transition: .8s;
    width: ${p => p.theme.spacing.mult(2.5)}px;
  }

  &.on::after {
    background: ${p => p.theme.colours.green};
    border-radius: 50%;
    left: 15px;
    transform: rotate(180deg);
  }
`

class Switch extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.bool,
  }

  onChange = () => {
    this.props.onChange(!this.props.value)
  }

  render() {
    const { children, value } = this.props

    return (
      <Container onClick={this.onChange}>
        <label>{ children }</label>
        <Widget className={value ? "on" : ""} />
      </Container>
    )
  }
}

export default Switch
