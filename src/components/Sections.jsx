import React from 'react';
import { List } from 'immutable';

import StylusSection from './StylusSection';
import JadeSection from './JadeSection';
import { Stylus, Jade } from '../services/languages';

export default React.createClass({
  displayName: 'Sections',
  propTypes: {
    files: React.PropTypes.instanceOf(List).isRequired
  },
  getFiles: function(type) {
    return this.props.files.filter(file => file.type === type);
  },
  render: function() {
    return <div className="langs">
      <StylusSection files={this.getFiles(Stylus)} />
      <JadeSection files={this.getFiles(Jade)} />
    </div>;
  }
});
