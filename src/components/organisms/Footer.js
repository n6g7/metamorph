import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { List } from "immutable"
import { connect } from "react-redux"

import { Row } from "../molecules"
import { compileAll } from "../../redux/actions"

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
        <Row title late={!upToDate} compile={compileAll} />
      </footer>
    )
  }
}

const mapStateToProps = state => ({
  files: state.get("files"),
})

const mapDispatchToProps = { compileAll }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer)
