import { types } from "../actions"
import { Pug, Stylus } from "../../services/languages"
import { compileFile as pugCompile } from "../../services/pug"
import { compileFile as stylusCompile } from "../../services/stylus"

function compile(file) {
  const source = file.get("source")
  const dest = file.get("dest")

  switch (file.get("type")) {
    case Pug.name:
      return pugCompile(source, dest)
    case Stylus.name:
      return stylusCompile(source, dest)
  }
}

export default store => next => action => {
  const state = store.getState()

  switch (action.type) {
    case types.COMPILE_FILE:
      compile(action.file)
      break
    case types.COMPILE_ALL:
      state.get("files").forEach(compile)
      break
    case types.STALE_FILE:
      if (state.get("autoCompile")) {
        const file = state.get("files").find(f => f.get("source") === action.file)
        compile(file)
        action.autoCompiled = true
      }
      break
  }

  return next(action)
}
