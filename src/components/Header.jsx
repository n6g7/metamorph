import React from 'react';
import logo from '../assets/images/logo.svg';

export default React.createClass({
  displayName: 'Header',
  propTypes: {
    autoCompile: React.PropTypes.bool.isRequired,
    toggleAutoCompile: React.PropTypes.func.isRequired
  },
  render: function() {
    const { autoCompile, toggleAutoCompile } = this.props;

    return <header>
      <img src={logo} className="logo" />
      <label>
        Auto compilation
        <input
          type="checkbox"
          checked={autoCompile}
          onChange={toggleAutoCompile}
        />
      </label>
    </header>;
  }
});
