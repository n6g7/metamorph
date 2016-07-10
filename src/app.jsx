import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import StylusCompiler from './components/StylusCompiler';
import JadeCompiler from './components/JadeCompiler';
import './assets/style.styl';

ReactDOM.render(
  <div>
    <Header />
    <div className="langs">
      <StylusCompiler />
      <JadeCompiler />
    </div>
  </div>,
  document.getElementById('app')
);
