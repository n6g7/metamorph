import React from 'react';

export default React.createClass({
  displayName: 'Status',
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element
    ]),
    late: React.PropTypes.bool
  },
  render: function() {
    const { children, late } = this.props;
    const classes = ['status-block'];

    if (late) classes.push('late');

    return <span className={ classes.join(' ') }>
      {children}
      <span className="status"></span>
    </span>
  }
});
