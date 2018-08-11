import { connect } from "react-redux"

import Header from "../components/Header"
import { toggleAutoCompile } from "../redux/actions"

const mapStateToProps = state => ({
  autoCompile: state.get("autoCompile"),
})

const HeaderContainer = connect(
  mapStateToProps,
  { toggleAutoCompile },
)(Header)

export default HeaderContainer
