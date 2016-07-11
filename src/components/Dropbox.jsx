import React from 'react';

import files from '../assets/images/files.svg';

export default React.createClass({
  displayName: 'Dropbox',
  render: function() {
    return <div className="dropbox">
      <img src={files} />
      <p>Drop your files here or <a href="#">pick a file</a></p>
      <div className="action">
        <button>Compile All</button>
        <span className="status"></span>
      </div>
    </div>;
  }
});
