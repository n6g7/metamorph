import React from "react"
import { List } from "immutable"

import StylusSection from "./StylusSection"
import JadeSection from "./JadeSection"
import { Stylus, Jade } from "../services/languages"

export default React.createClass({
  displayName: "Sections",
  propTypes: {
    compile: React.PropTypes.func.isRequired,
    files: React.PropTypes.instanceOf(List).isRequired,
    remove: React.PropTypes.func.isRequired,
  },
  getFiles: function(type) {
    return this.props.files.filter(file => file.get("type") === type)
  },
  render: function() {
    return (
      <div className="langs">
        <StylusSection
          compile={this.props.compile}
          remove={this.props.remove}
          files={this.getFiles(Stylus.name)}
        />
        <JadeSection
          compile={this.props.compile}
          remove={this.props.remove}
          files={this.getFiles(Jade.name)}
        />
      </div>
    )
  },
})
