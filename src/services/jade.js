import { writeFile } from './fs';
import { deduce } from './target';
import jade from 'jade';

const FROM_EXT = 'jade';
const TO_EXT = 'html';

export function compileFile(filepath) {
  if (filepath === undefined) return Promise.reject('No file provided');

  let targetFile = deduce(filepath, FROM_EXT, TO_EXT);

  return writeFile(targetFile, jade.renderFile(filepath));
}
