import { fromJS, Map } from 'immutable';

export const INITIAL_STATE = fromJS({
  files: [],
  autoCompile: false
});

function findFile(state, file) {
  if (Map.isMap(file)) {
    return state
      .get('files')
      .findKey(f => f.equals(file));
  }
  else {
    return state
      .get('files')
      .findKey(f => f.get('source') === file);
  }
}

const setFileState = newState => (state, file) => {
  return state.setIn(
    [
      'files',
      findFile(state, file),
      'upToDate'
    ],
    newState
  );
}

export function addFile(state, file) {
  const files = state.get('files').push(Map(file));
  return state.set('files', files);
}

export function removeFile(state, file) {
  return state.deleteIn(['files', findFile(state, file)]);
}

export function toggleAutoCompile(state) {
  const previousValue = state.get('autoCompile');
  return state.set('autoCompile', !previousValue);
}

export const compileFile = setFileState(true);

export function compileAll(state) {
  return state.update(
    'files',
    files => files.map(file => file.set('upToDate', true))
  );
}

export const staleFile = setFileState(false);
