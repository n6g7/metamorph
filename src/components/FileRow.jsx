import React from 'react';

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
    const status = this.state.utd ? 'row' : 'row late';

    return <div className={status} onClick={this.toggle}>
      <p>{this.props.filepath}</p>
      <div className="extra">
        { this.state.utd ?
          '06.05.16 at 13:04:27':
          'Not up to date'
        }
        <span className="status"></span>
      </div>
    </div>;
  }
});
