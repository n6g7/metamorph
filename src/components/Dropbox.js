import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { remote } from "electron"

import { languages } from "../services/languages"
import files from "../assets/images/files.svg"

const { dialog } = remote
const win = remote.getCurrentWindow()

class Dropbox extends PureComponent {
  static propTypes = {
    addFile: PropTypes.func.isRequired,
  }

  handlePick = () => {
    const paths = dialog.showOpenDialog(win, {
      properties: ["openFile", "multiSelections"],
      filters: languages,
    })

    if (!paths) return
    paths.forEach(this.props.addFile)
  }

  render() {
    return (
      <div className="dropbox">
        <img src={files} />
        <p>
          Drop your files here or <button onClick={this.handlePick}>pick a file</button>
        </p>
      </div>
    )
  }
}

export default Dropbox
