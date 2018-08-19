import styled, { css } from "styled-components"

const getColour = props => {
  switch(props.colour) {
    case "purple":
      return props.theme.colours.purple
    case "red":
      return props.theme.colours.red
    case "yellow":
      return props.theme.colours.yellow
    default:
      return props.theme.colours.red
  }
}

export default styled.button`
  background: ${getColour};
  border: none;
  border-radius: ${p => p.theme.spacing.mult(0.5)}px;
  color: ${p => p.theme.colours.white};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: ${p => css`${p.theme.spacing.mult(2)}px ${p.theme.spacing.mult(3)}px`};
`
