import React from 'react';
import electron from 'electron';

import files from '../assets/images/files.svg';

const {dialog} = electron.remote;

export default React.createClass({
  displayName: 'Dropbox',
  propTypes: {
    addFile: React.PropTypes.func.isRequired
  },
  handlePick: function() {
    const paths = dialog.showOpenDialog({
      properties: ['openFile', 'multiSelections']
    });

    if (!paths) return;
    paths.forEach(this.props.addFile);
  },
  render: function() {
    return <div className="dropbox">
      <img src={files} />
      <p>Drop your files here or <button onClick={this.handlePick}>pick a file</button></p>
      <div className="action">
        <button>Compile All</button>
        <span className="status"></span>
      </div>
    </div>;
  }
});
