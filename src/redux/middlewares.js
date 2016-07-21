import { types } from './actions';
import { Jade, Stylus } from '../services/languages';
import { compileFile as jadeCompile } from '../services/jade';
import { compileFile as stylusCompile } from '../services/stylus';

export const compiler = store => next => action => {
  if (action.type === types.COMPILE_FILE) {
    const fileType = action.file.get('type');
    const source = action.file.get('source');
    const dest = action.file.get('dest');

    switch(fileType) {
      case Jade.name:
        jadeCompile(source, dest);
        break;
      case Stylus.name:
        stylusCompile(source, dest);
        break;
    }
  }

  return next(action);
};
