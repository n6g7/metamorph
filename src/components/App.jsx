import React from 'react';

import Header from '../containers/Header';
import Dropbox from './Dropbox';
import Sections from './Sections';

export default React.createClass({
  displayName: 'App',
  render: function() {
    return <div>
      <Header />
      <Dropbox />
      <Sections />
    </div>;
  }
});
