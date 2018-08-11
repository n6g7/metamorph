import React, { PureComponent } from "react"
import PropTypes from "prop-types"

class Status extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    late: PropTypes.bool,
  }

  render() {
    const { children, late } = this.props
    const classes = ["status-block"]

    if (late) classes.push("late")

    return (
      <span className={classes.join(" ")}>
        {children}
        <span className="status" />
      </span>
    )
  }
}

export default Status
