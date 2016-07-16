export const Stylus = 'Stylus';
export const Jade = 'Pug';

export const languages = [
  {
    name: Stylus,
    extensions: ['styl']
  },
  {
    name: Jade,
    extensions: ['jade', 'pug']
  }
];

export function findLanguage(ext) {
  if (ext[0] === '.') ext = ext.substring(1);
  return languages.find(lang => lang.extensions.includes(ext));
}
