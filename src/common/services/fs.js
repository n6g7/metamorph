let fs = require('fs');

angular.module('Stylay.common')
.service('fs', () => {
  function readFile(filepath, encoding) {
    encoding = encoding || 'utf-8';

    return new Promise((fulfill, reject) => {
      fs.readFile(filepath, encoding, (err, data) => {
        console.log('R', data);
        if (err) reject(err);
        else fulfill(data);
      });
    });
  }

  function writeFile(filepath, data) {
    return new Promise((fulfill, reject) => {
      fs.writeFile(filepath, data, err => {
        console.log('W', data);
        if (err) reject(err);
        else fulfill();
      });
    });
  }

  return {
    readFile,
    writeFile
  };
});
