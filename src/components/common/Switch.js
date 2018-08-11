import React, { PureComponent } from "react"
import PropTypes from "prop-types"

class Switch extends PureComponent {
  static propTypes = {
    children: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool,
  }

  renderInput = active => {
    const { onChange, value } = this.props
    const classes = ["switch"]

    if (value) classes.push("on")

    return (
      <div className={classes.join(" ")} onClick={active ? onChange : null}>
        <span className="switch-btn" />
      </div>
    )
  }

  render() {
    const { children, onChange } = this.props

    if (!children) return this.renderInput(true)

    return (
      <div onClick={onChange}>
        {children}
        {this.renderInput(false)}
      </div>
    )
  }
}

export default Switch
