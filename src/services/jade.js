import jade from 'jade';

import { writeFile } from './fs';
import { Jade } from './languages';

export function compileFile(filepath) {
  if (filepath === undefined) return Promise.reject('No file provided');

  const targetFile = Jade.findTarget(filepath);
  return writeFile(targetFile, jade.renderFile(filepath));
}
