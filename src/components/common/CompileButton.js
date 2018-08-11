import React from "react"

import Status from "./Status"

export default React.createClass({
  displayName: "CompileButton",
  propTypes: {
    label: React.PropTypes.string,
    late: React.PropTypes.bool,
    onClick: React.PropTypes.func,
  },
  render: function() {
    const { label, late, onClick } = this.props

    return (
      <Status late={late}>
        <button onClick={onClick}>{label}</button>
      </Status>
    )
  },
})
