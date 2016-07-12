export const types = {
  ADD_FILE: 'ADD_FILE',
  REMOVE_FILE: 'REMOVE_FILE',
  TOGGLE_AUTO_COMPILE: 'TOGGLE_AUTO_COMPILE'
};

export function addFile(file) {
  return {
    type: types.ADD_FILE,
    file
  };
}

export function removeFile(file) {
  return {
    type: types.REMOVE_FILE,
    file
  }
}

export function toggleAutoCompile() {
  return {
    type: types.TOGGLE_AUTO_COMPILE
  }
}
