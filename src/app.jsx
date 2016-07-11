import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Dropbox from './components/Dropbox';
import Sections from './components/Sections';
import './assets/style.styl';

ReactDOM.render(
  <div>
    <Header />
    <Dropbox />
    <Sections />
  </div>,
  document.getElementById('app')
);
