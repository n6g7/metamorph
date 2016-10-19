import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import { Map } from 'immutable';

import { compiler, watcher } from './middlewares/index';
import reducers from './reducers';

const logger = createLogger({
  duration: true,
  stateTransformer: state => state.toJS()
});

export default createStore(
  reducers,
  Map(),
  applyMiddleware(logger, compiler, watcher)
);
