import React from 'react';

import Header from '../containers/Header';
import Dropbox from '../containers/Dropbox';
import Sections from '../containers/Sections';
import Footer from '../containers/Footer';

export default React.createClass({
  displayName: 'App',
  render: function() {
    return <div>
      <Header />
      <Dropbox />
      <Sections />
      <Footer />
    </div>;
  }
});
