import { fromJS, Map } from 'immutable';

export const INITIAL_STATE = fromJS({
  files: [],
  autoCompile: false
});

function findFile(state, file) {
  return state
    .get('files')
    .findKey(f => f === file);
}

export function addFile(state, file) {
  const files = state.get('files').push(Map(file));
  return state.set('files', files);
}

export function compileFile(state, file) {
  return state.setIn(['files', findFile(state, file), 'upToDate'], true);
}

export function removeFile(state, file) {
  return state.deleteIn(['files', findFile(state, file)]);
}

export function toggleAutoCompile(state) {
  const previousValue = state.get('autoCompile');
  return state.set('autoCompile', !previousValue);
}
