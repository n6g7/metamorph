import { types } from './actions';
import {
  INITIAL_STATE,
  addFile,
  compileFile,
  removeFile,
  toggleAutoCompile
} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.ADD_FILE:
      return addFile(state, action.file);
    case types.COMPILE_FILE:
      return compileFile(state, action.file);
    case types.REMOVE_FILE:
      return removeFile(state, action.file);
    case types.TOGGLE_AUTO_COMPILE:
      return toggleAutoCompile(state);
  }

  return state;
}
