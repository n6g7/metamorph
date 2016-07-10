import stylus from 'stylus';
import { readFile, writeFile } from './fs';
import { deduce } from './target';

const FROM_EXT = 'styl';
const TO_EXT = 'css';

export function compileString(string) {
  return new Promise((fulfill, reject) => {
    stylus(string).render((err, data) => {
      if (err) reject(err);
      else fulfill(data);
    });
  });
}

export function compileFile(filepath) {
  if (filepath === undefined) return Promise.reject('No file provided');

  let targetFile = deduce(filepath, FROM_EXT, TO_EXT);

  return readFile(filepath)
  .then(compileString)
  .then(css => writeFile(targetFile, css));
}
