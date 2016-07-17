import { fromJS, Map } from 'immutable';

export const INITIAL_STATE = fromJS({
  files: [],
  autoCompile: false
});

export function addFile(state, file) {
  const files = state.get('files').push(Map(file));
  return state.set('files', files);
}

export function removeFile(state, file) {
  return state;
}

export function toggleAutoCompile(state) {
  const previousValue = state.get('autoCompile');
  return state.set('autoCompile', !previousValue);
}
