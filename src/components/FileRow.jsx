import React from 'react';

import Status from './common/Status';

export default React.createClass({
  displayName: 'FileRow',
  propTypes: {
    filepath: React.PropTypes.string.isRequired
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
  render: function() {
    return <div className="row" onClick={this.toggle}>
      <p>{this.props.filepath}</p>
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
