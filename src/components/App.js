import React from "react"
import styled, { injectGlobal } from "styled-components"

import { Banner, Footer, Header, Sections } from "./organisms"
import theme from "../theme"

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Karla:400,700');

  body {
    background: ${theme.colours.black};
    color: ${theme.colours.white};
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    margin: 0;
  }
`

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
`

const App = () => (
  <Main>
    <Header />
    <Banner />
    <Sections />
    <Footer />
  </Main>
)

export default App
