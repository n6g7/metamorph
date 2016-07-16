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
  render: function() {
    const { files } = this.props;

    return <div className={`lang ${className}`}>
      <div className="row title">
        <p>{name}</p>
        <div className="extra">
          <CompileButton label="Compile" />
        </div>
      </div>
      {files.map((file, key) =>
        <FileRow
          filepath={file}
          key={key}
          compile={(data) => compiler(path.join(data.dir, data.base))}
        />
      )}
    </div>;
  }
});
