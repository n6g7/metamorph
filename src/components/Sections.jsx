import React from 'react';
import { List } from 'immutable';

import StylusSection from './StylusSection';
import JadeSection from './JadeSection';

export default React.createClass({
  displayName: 'Sections',
  propTypes: {
    files: React.PropTypes.instanceOf(List).isRequired
  },
  render: function() {
    return <div className="langs">
      <StylusSection files={this.props.files} />
      <JadeSection files={this.props.files} />
    </div>;
  }
});
