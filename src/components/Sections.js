import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { List } from "immutable"

import StylusSection from "./StylusSection"
import JadeSection from "./JadeSection"
import { Stylus, Jade } from "../services/languages"

class Sections extends PureComponent {
  static propTypes = {
    compile: PropTypes.func.isRequired,
    files: PropTypes.instanceOf(List).isRequired,
    remove: PropTypes.func.isRequired,
  }

  getFiles(type) {
    return this.props.files.filter(file => file.get("type") === type)
  }

  render() {
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
  }
}

export default Sections
