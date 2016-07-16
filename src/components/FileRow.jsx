import React from 'react';
import path from 'path';

import Status from './common/Status';

export default React.createClass({
  displayName: 'FileRow',
  propTypes: {
    filepath: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      utd: false
    };
  },
  toggle: function() {
    this.setState({
      utd: !this.state.utd
    });
  },
  renderPath: function() {
    const parts = this.props.filepath.dir
      .split(path.sep)
      .slice(-2);
    parts.unshift('...');
    return parts.join(path.sep);
  },
  render: function() {
    const { filepath: file } = this.props;

    return <div className="row" onClick={this.toggle}>
      <p>
        <span className="path">{this.renderPath()}/</span>
        {file.base}
      </p>
      <div className="extra">
        <Status late={!this.state.utd}>
          { this.state.utd ?
            '06.05.16 at 13:04:27':
            'Not up to date'
          }
        </Status>
      </div>
    </div>;
  }
});
