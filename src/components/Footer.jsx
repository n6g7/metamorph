import React from 'react';
import { List } from 'immutable';

import CompileButton from './common/CompileButton';

export default React.createClass({
  displayName: 'Footer',
  propTypes: {
    files: React.PropTypes.instanceOf(List).isRequired,
    compileAll: React.PropTypes.func.isRequired
  },
  render: function() {
    const { compileAll, files } = this.props;

    const upToDate = files.reduce((utd, file) => utd && file.get('upToDate'), true);

    return <footer>
      <CompileButton
        label="Compile All"
        late={!upToDate}
        onClick={compileAll}
      />
    </footer>;
  }
});
