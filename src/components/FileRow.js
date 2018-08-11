import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import path from "path"
import { Map } from "immutable"

import CompileButton from "./common/CompileButton"
import SwipeContainer from "./SwipeContainer"

class FileRow extends PureComponent {
  static propTypes = {
    compile: PropTypes.func.isRequired,
    file: PropTypes.instanceOf(Map).isRequired,
    remove: PropTypes.func.isRequired,
  }

  renderSource = () => {
    const { file } = this.props
    const data = path.parse(file.get("source"))

    const parts = data.dir.split(path.sep).slice(-2)
    parts.unshift("...")

    return (
      <p>
        <span className="path">{parts.join(path.sep)}/</span>
        {data.base}
      </p>
    )
  }

  swipe = cb => {
    cb(true).then(() => this.props.remove(this.props.file))
  }

  render() {
    const { file, compile } = this.props

    return (
      <SwipeContainer onSwipeRight={this.swipe} onSwipeRightClass="swipe-remove">
        <div className="row">
          {this.renderSource()}
          <div className="extra">
            <CompileButton
              label="Compile"
              late={!file.get("upToDate")}
              onClick={() => compile(file)}
            />
          </div>
        </div>
      </SwipeContainer>
    )
  }
}

export default FileRow
