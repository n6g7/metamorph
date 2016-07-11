import React from 'react';
import logo from '../assets/images/logo.svg';

export default React.createClass({
  displayName: 'Header',
  render: function() {
    return <header>
      <img src={logo} className="logo" />
      <label>
        Auto compilation
        <input type="checkbox" />
      </label>
    </header>;
  }
});
