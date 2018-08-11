import { combineReducers } from "redux-immutable"
import autoCompile from "./auto-compile"
import files from "./files"

export default combineReducers({
  autoCompile,
  files,
})
