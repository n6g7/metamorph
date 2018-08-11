import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { List } from "immutable"

import FileRow from "./FileRow"
import CompileButton from "./common/CompileButton"

export default (displayName, name, className) =>
  class extends PureComponent {
    static displayName = displayName

    static propTypes = {
      compile: PropTypes.func.isRequired,
      files: PropTypes.instanceOf(List).isRequired,
      remove: PropTypes.func.isRequired,
    }

    compileAll() {
      this.props.files.forEach(this.props.compile)
    }

    render() {
      const { compile, files, remove } = this.props

      const upToDate = files.reduce((utd, file) => utd && file.get("upToDate"), true)

      return (
        <div className={`lang ${className}`}>
          <div className="row title">
            <p>{name}</p>
            <div className="extra">
              <CompileButton label="Compile" late={!upToDate} onClick={this.compileAll} />
            </div>
          </div>
          {files.map((file, key) => (
            <FileRow file={file} key={key} compile={compile} remove={remove} />
          ))}
        </div>
      )
    }
  }
