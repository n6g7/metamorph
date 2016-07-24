import { types } from '../actions';
import { watch } from '../../services/watcher';

export default store => next => action => {
  /* eslint no-unused-vars: "off" */
  if (action.type === types.ADD_FILE) {
    watch(action.file.source);
  }

  return next(action);
};
