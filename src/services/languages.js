export const Stylus = {
  name: 'Stylus',
  extensions: ['styl'],
  destinationExtension: 'css'
};

export const Jade = {
  name: 'Jade',
  extensions: ['jade', 'pug'],
  destinationExtension: 'html'
};

export const languages = [Stylus, Jade];

export function findLanguage(ext) {
  if (ext[0] === '.') ext = ext.substring(1);
  return languages.find(lang => lang.extensions.includes(ext));
}
