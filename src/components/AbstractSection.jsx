import React from 'react';
import { List } from 'immutable';

import FileRow from './FileRow';

export default (displayName, name, className) => React.createClass({
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
          <button>compile</button>
          <span className="status"></span>
        </div>
      </div>
      {files.map((file, key) =>
        <FileRow filepath={file} key={key} />
      )}
    </div>;
  }
});
