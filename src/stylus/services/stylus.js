let stylus = require('stylus');

angular.module('Stylay.stylus')
.service('Stylus', (fs, target) => {
  function compileString(string) {
    return new Promise((fulfill, reject) => {
      stylus(string).render((err, data) => {
        if (err) reject(err);
        else fulfill(data);
      });
    });
  }

  function compileFile(filepath) {
    let targetFile = target.deduce(filepath, 'stylus', 'css');

    return fs.readFile(filepath)
    .then(compileString)
    .then(css => fs.writeFile(targetFile, css));
  }

  return { compileString, compileFile };
});
