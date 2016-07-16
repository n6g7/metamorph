import React from 'react';
import path from 'path';

import CompileButton from './common/CompileButton';
import Status from './common/Status';

export default React.createClass({
  displayName: 'FileRow',
  propTypes: {
    compile: React.PropTypes.func.isRequired,
    filepath: React.PropTypes.object.isRequired
  },
  renderPath: function() {
    const parts = this.props.filepath.dir
      .split(path.sep)
      .slice(-2);
    parts.unshift('...');
    return parts.join(path.sep);
  },
  render: function() {
    const { filepath: file, compile } = this.props;

    return <div className="row">
      <p>
        <span className="path">{this.renderPath()}/</span>
        {file.base}
      </p>
      <div className="extra">
        <CompileButton
          label="Compile"
          onClick={() => compile(file)}
        />
      </div>
    </div>;
  }
});
