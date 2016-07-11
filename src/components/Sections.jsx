import React from 'react';

import StylusSection from './StylusSection';
import JadeSection from './JadeSection';

export default React.createClass({
  displayName: 'Sections',
  render: function() {
    return <div className="langs">
      <StylusSection />
      <JadeSection />
    </div>;
  }
});
