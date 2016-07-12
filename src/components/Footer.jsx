import React from 'react';

import CompileButton from './common/CompileButton';
import Status from './common/Status';

export default React.createClass({
  displayName: 'Footer',
  render: function() {
    return <footer>
      <CompileButton label="Compile All" />
    </footer>;
  }
});
