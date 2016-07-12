import React from 'react';
import { remote } from 'electron';

import files from '../assets/images/files.svg';

const {dialog} = remote;
const win = remote.getCurrentWindow();

export default React.createClass({
  displayName: 'Dropbox',
  propTypes: {
    addFile: React.PropTypes.func.isRequired
  },
  handlePick: function() {
    const paths = dialog.showOpenDialog(win, {
      properties: ['openFile', 'multiSelections'],
      filters: [
        { name: 'Jade', extensions: ['jade', 'pug'] },
        { name: 'Stylus', extensions: ['styl'] }
      ]
    });

    if (!paths) return;
    paths.forEach(this.props.addFile);
  },
  render: function() {
    return <div className="dropbox">
      <img src={files} />
      <p>Drop your files here or <button onClick={this.handlePick}>pick a file</button></p>
    </div>;
  }
});
