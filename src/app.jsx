import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import makeStore from './redux/store';
import App from './components/App';
import './assets/style.styl';

const store = makeStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
