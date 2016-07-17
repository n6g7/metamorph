import stylus from 'stylus';

import { readFile, writeFile } from './fs';
import { Stylus } from './languages';

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

  const targetFile = Stylus.findTarget(filepath);

  return readFile(filepath)
  .then(compileString)
  .then(css => writeFile(targetFile, css));
}
