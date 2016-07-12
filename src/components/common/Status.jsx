import React from 'react';

export default React.createClass({
  displayName: 'Status',
  propTypes: {
    children: React.PropTypes.element,
    late: React.PropTypes.bool
  },
  render: function() {
    const { late } = this.props;
    const classes = ['status-block'];

    if (late) classes.push('late');

    return <span className={ classes.join(' ') }>
      {this.props.children}
      <span className="status"></span>
    </span>
  }
});
