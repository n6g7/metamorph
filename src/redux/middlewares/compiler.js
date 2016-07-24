import { types } from '../actions';
import { Jade, Stylus } from '../../services/languages';
import { compileFile as jadeCompile } from '../../services/jade';
import { compileFile as stylusCompile } from '../../services/stylus';

function compile(file) {
  const source = file.get('source');
  const dest = file.get('dest');

  switch(file.get('type')) {
    case Jade.name:
      return jadeCompile(source, dest);
    case Stylus.name:
      return stylusCompile(source, dest);
  }
}

export default store => next => action => {
  const state = store.getState();

  switch(action.type) {
    case types.COMPILE_FILE:
      compile(action.file);
      break;
    case types.COMPILE_ALL:
      state.get('files')
        .forEach(compile);
      break;
  }

  return next(action);
};
