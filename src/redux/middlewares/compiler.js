import { types } from '../actions';
import { Jade, Stylus } from '../../services/languages';
import { compileFile as jadeCompile } from '../../services/jade';
import { compileFile as stylusCompile } from '../../services/stylus';

function compileFile(file) {
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
  switch(action.type) {
    case types.COMPILE_FILE:
      compileFile(action.file);
      break;
    case types.COMPILE_ALL:
      store.getState()
        .get('files')
        .forEach(compileFile);
      break;
  }

  return next(action);
};
