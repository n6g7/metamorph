let jade = require('jade');

angular.module('Stylay.jade')
.service('Jade', (fs, target) => {
  function compileFile(filepath) {
    let targetFile = target.deduce(filepath, 'jade', 'html');

    return fs.writeFile(targetFile, jade.renderFile(filepath));
  }

  return {
    compileString: jade.render,
    compileFile
  };
});
