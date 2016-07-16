import React from 'react';
import { List } from 'immutable';
import path from 'path';

import FileRow from './FileRow';
import CompileButton from './common/CompileButton';

export default (displayName, name, className, compiler) => React.createClass({
  displayName,
  propTypes: {
    files: React.PropTypes.instanceOf(List).isRequired
  },
  compileFile: function(data) {
    compiler(path.join(data.dir, data.base));
  },
  compileAll: function() {
    this.props.files.forEach(this.compileFile);
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
          filepath={file}
          key={key}
          compile={this.compileFile}
        />
      )}
    </div>;
  }
});
