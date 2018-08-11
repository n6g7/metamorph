import React from 'react';

import Switch from './common/Switch';
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
      <nav>
        <Switch
          value={autoCompile}
          onChange={toggleAutoCompile}
        >
          Auto compilation
        </Switch>
      </nav>
    </header>;
  }
});
