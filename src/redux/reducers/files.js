import { List, Map } from 'immutable';

import { types } from '../actions';

const INITIAL_STATE = List();

function findFile(state, file) {
  if (Map.isMap(file)) {
    return state
      .findKey(f => f.equals(file));
  }
  else {
    return state
      .findKey(f => f.get('source') === file);
  }
}

const setFileState = newState => (state, file) => {
  return state.setIn(
    [
      findFile(state, file),
      'upToDate'
    ],
    newState
  );
}

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.ADD_FILE:
      return state.push(Map(action.file));
    case types.REMOVE_FILE:
      return state.deleteIn([findFile(state, action.file)]);
    case types.COMPILE_FILE:
      return setFileState(true)(state, action.file);
    case types.COMPILE_ALL:
      return state.map(file => file.set('upToDate', true));
    case types.STALE_FILE:
      return setFileState(action.autoCompiled)(state, action.file);
  }

  return state;
}
