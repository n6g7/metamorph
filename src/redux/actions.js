import path from 'path';

import { findLanguage } from '../services/languages';

export const types = {
  ADD_FILE: 'ADD_FILE',
  COMPILE_FILE: 'COMPILE_FILE',
  REMOVE_FILE: 'REMOVE_FILE',
  TOGGLE_AUTO_COMPILE: 'TOGGLE_AUTO_COMPILE'
};

export function addFile(filePath) {
  const fileData = path.parse(filePath);
  const lang = findLanguage(fileData.ext);

  return {
    type: types.ADD_FILE,
    file: {
      source: filePath,
      dest: lang.findTarget(filePath),
      type: lang.name,
      upToDate: false
    }
  };
}

export function compileFile(file) {
  return {
    type: types.COMPILE_FILE,
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
