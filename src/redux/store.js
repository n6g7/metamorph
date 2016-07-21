import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

import { INITIAL_STATE } from './core';
import { compiler } from './middlewares';
import reducer from './reducer';

const logger = createLogger({
  duration: true,
  stateTransformer: state => state.toJS()
});

export default () => createStore(
  reducer,
  INITIAL_STATE,
  applyMiddleware(logger, compiler)
);
