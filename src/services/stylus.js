import stylus from 'stylus';

import { readFile, writeFile } from './fs';
import { Stylus } from './languages';
import { deduce } from './target';

function compileString(string) {
  return new Promise((fulfill, reject) => {
    stylus(string).render((err, data) => {
      if (err) reject(err);
      else fulfill(data);
    });
  });
}

export function compileFile(filepath) {
  if (filepath === undefined) return Promise.reject('No file provided');

  let targetFile = deduce(
    filepath,
    Stylus.extensions,
    Stylus.destinationExtension
  );

  return readFile(filepath)
  .then(compileString)
  .then(css => writeFile(targetFile, css));
}
