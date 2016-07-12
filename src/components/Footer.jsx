import React from 'react';

export default React.createClass({
  displayName: 'Footer',
  render: function() {
    return <footer>
      <button onClick={this.compileAll}>Compile All</button>
      <span className="status"></span>
    </footer>;
  }
});
