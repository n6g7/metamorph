import jade from 'jade';

import { writeFile } from './fs';
import { Jade } from './languages';
import { deduce } from './target';

export function compileFile(filepath) {
  if (filepath === undefined) return Promise.reject('No file provided');

  let targetFile = deduce(
    filepath,
    Jade.extensions,
    Jade.destinationExtension
  );

  return writeFile(targetFile, jade.renderFile(filepath));
}
