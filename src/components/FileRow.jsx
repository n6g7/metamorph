import React from 'react';
import path from 'path';
import { Map } from 'immutable';

import CompileButton from './common/CompileButton';

export default React.createClass({
  displayName: 'FileRow',
  propTypes: {
    compile: React.PropTypes.func.isRequired,
    file: React.PropTypes.instanceOf(Map).isRequired
  },
  renderSource: function() {
    const { file } = this.props;
    const data = path.parse(file.get('source'));

    const parts = data.dir
      .split(path.sep)
      .slice(-2);
    parts.unshift('...');

    return <p>
      <span className="path">{parts.join(path.sep)}/</span>
      {data.base}
    </p>;
  },
  render: function() {
    const { file, compile } = this.props;

    return <div className="row">
      {this.renderSource()}
      <div className="extra">
        <CompileButton
          label="Compile"
          late={!file.get('upToDate')}
          onClick={() => compile(file)}
        />
      </div>
    </div>;
  }
});
