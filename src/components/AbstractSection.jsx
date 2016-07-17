import React from 'react';
import { List } from 'immutable';

import FileRow from './FileRow';
import CompileButton from './common/CompileButton';

export default (displayName, name, className, compiler) => React.createClass({
  displayName,
  propTypes: {
    files: React.PropTypes.instanceOf(List).isRequired
  },
  compileAll: function() {
    this.props.files.forEach(compiler);
  },
  render: function() {
    const { files } = this.props;

    return <div className={`lang ${className}`}>
      <div className="row title">
        <p>{name}</p>
        <div className="extra">
          <CompileButton
            label="Compile"
            onClick={this.compileAll}
          />
        </div>
      </div>
      {files.map((file, key) =>
        <FileRow
          file={file}
          key={key}
          compile={compiler}
        />
      )}
    </div>;
  }
});
