import styled, { css } from "styled-components"

export default styled.button`
  background: ${p => p.theme.colours.red};
  border: none;
  border-radius: ${p => p.theme.spacing.mult(0.5)}px;
  color: ${p => p.theme.colours.white};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: ${p => css`${p.theme.spacing.mult(2)}px ${p.theme.spacing.mult(3)}px`};
`
