import styled, { css } from "styled-components"

export default styled.div`
  border: solid ${p => p.theme.spacing.unit}px ${p => p.theme.colours.white};
  box-sizing: border-box;
  height: ${p => p.theme.spacing.mult(5)}px;
  width: ${p => p.theme.spacing.mult(5)}px;
  transition: .5s;

  ${p => p.late
    ? css`
      border-radius: ${p => p.theme.spacing.mult(0.5)}px;
      transform: rotate(0deg);
    `
    : css`
      border-radius: 50%;
      transform: rotate(360deg);
    `
  }
`
