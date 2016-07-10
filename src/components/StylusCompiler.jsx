import React from 'react';
import { compileFile } from '../services/stylus';

export default React.createClass({
  displayName: 'StylusCompiler',
  getInitialState: function() {
    return { filepath: null };
  },
  handleChange: function(e) {
    this.setState({
      filepath: e.target.files[0].path
    });
  },
  compile: function() {
    return compileFile(this.state.filepath);
  },
  render: function() {
    return <div className="lang stylus">
      <h2>Stylus</h2>
      <input type="file" onChange={this.handleChange} />
      <button onClick={this.compile}>Compile</button>
    </div>;
  }
});
