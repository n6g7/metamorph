import { types } from "../actions"

const INITIAL_STATE = false

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.TOGGLE_AUTO_COMPILE:
      return !state
  }

  return state
}
