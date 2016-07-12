import React from 'react';

export default React.createClass({
  displayName: 'Switch',
  propTypes: {
    children: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.bool
  },
  renderInput: function(active) {
    const { onChange, value } = this.props;
    const classes = ['switch'];

    if (value) classes.push('on');

    return <div
      className={classes.join(' ')}
      onClick={active ? onChange : null}
    >
      <span className="switch-btn"></span>
    </div>;
  },
  render: function() {
    const { children, onChange } = this.props;

    if (!children) return this.renderInput(true);

    return <div onClick={onChange}>
      {children}
      {this.renderInput(false)}
    </div>;
  }
});
