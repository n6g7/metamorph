import { deduce } from './target';

class Language
{
  constructor(name, extensions, destExt) {
    this.name = name;
    this.extensions = extensions;
    this.destinationExtension = destExt;

    this.deducer = deduce(this.extensions, this.destinationExtension);
  }

  findTarget(source) {
    return this.deducer(source);
  }
}

export const Stylus = new Language(
  'Stylus',
  ['styl'],
  'css'
);

export const Jade = new Language(
  'Jade',
  ['jade', 'pug'],
  'html'
);

export const languages = [Stylus, Jade];

export function findLanguage(ext) {
  if (ext[0] === '.') ext = ext.substring(1);
  return languages.find(lang => lang.extensions.includes(ext));
}
