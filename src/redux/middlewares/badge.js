import { remote } from "electron"

import { types } from "../actions"

const { app } = remote

export default store => next => action => {
  const res = next(action)

  const stales = store
    .getState()
    .get("files")
    .reduce((acc, file) => acc + (file.get("upToDate") ? 0 : 1), 0)

  switch (action.type) {
    case types.ADD_FILE:
    case types.COMPILE_FILE:
    case types.COMPILE_ALL:
    case types.STALE_FILE:
      app.setBadgeCount(stales)
      break
  }

  return res
}
