import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

import reducer from './reducer';
import { INITIAL_STATE } from './core';

const logger = createLogger({
  duration: true,
  stateTransformer: state => state.toJS()
});

export default () => createStore(
  reducer,
  INITIAL_STATE,
  applyMiddleware(logger)
);
