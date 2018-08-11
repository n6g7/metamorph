import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { List } from "immutable"

import CompileButton from "./common/CompileButton"

class Footer extends PureComponent {
  static propTypes = {
    files: PropTypes.instanceOf(List).isRequired,
    compileAll: PropTypes.func.isRequired,
  }

  render() {
    const { compileAll, files } = this.props

    const upToDate = files.reduce((utd, file) => utd && file.get("upToDate"), true)

    return (
      <footer>
        <CompileButton label="Compile All" late={!upToDate} onClick={compileAll} />
      </footer>
    )
  }
}

export default Footer
