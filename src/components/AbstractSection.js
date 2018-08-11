import React from "react"
import { List } from "immutable"

import FileRow from "./FileRow"
import CompileButton from "./common/CompileButton"

export default (displayName, name, className) =>
  React.createClass({
    displayName,
    propTypes: {
      compile: React.PropTypes.func.isRequired,
      files: React.PropTypes.instanceOf(List).isRequired,
      remove: React.PropTypes.func.isRequired,
    },
    compileAll: function() {
      this.props.files.forEach(this.props.compile)
    },
    render: function() {
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
    },
  })
