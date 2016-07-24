import path from 'path';

import { findLanguage } from '../services/languages';

export const types = {
  ADD_FILE: 'ADD_FILE',
  REMOVE_FILE: 'REMOVE_FILE',
  TOGGLE_AUTO_COMPILE: 'TOGGLE_AUTO_COMPILE',
  COMPILE_FILE: 'COMPILE_FILE',
  COMPILE_ALL: 'COMPILE_ALL',
  STALE_FILE: 'STALE_FILE'
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

export function compileFile(file) {
  return {
    type: types.COMPILE_FILE,
    file
  };
}

export function compileAll() {
  return {
    type: types.COMPILE_ALL
  };
}

export function staleFile(file) {
  return {
    type: types.STALE_FILE,
    autoCompiled: false,
    file
  };
}
