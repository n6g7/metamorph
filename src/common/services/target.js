let path = require('path');

angular.module('Stylay.common')
.service('target', () => {
  function deduce(sourcePath, oldExt, newExt) {
    let parsed = path.parse(sourcePath);
    parsed.base = path.basename(parsed.base, oldExt) + newExt;
    return path.format(parsed);
  }

  return {
    deduce
  };
});
