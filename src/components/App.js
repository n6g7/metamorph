import React, { PureComponent } from "react"

import Header from "../containers/Header"
import Dropbox from "../containers/Dropbox"
import Sections from "../containers/Sections"
import Footer from "../containers/Footer"

export default () => (
  <div>
    <Header />
    <Dropbox />
    <Sections />
    <Footer />
  </div>
)
