import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import makeStore from './redux/store';
import Header from './containers/Header';
import Dropbox from './containers/Dropbox';
import Sections from './components/Sections';
import './assets/style.styl';

const store = makeStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Header />
      <Dropbox />
      <Sections />
    </div>
  </Provider>,
  document.getElementById('app')
);
