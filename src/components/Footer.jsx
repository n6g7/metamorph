import React from 'react';

import CompileButton from './common/CompileButton';

export default React.createClass({
  displayName: 'Footer',
  render: function() {
    return <footer>
      <CompileButton label="Compile All" />
    </footer>;
  }
});
