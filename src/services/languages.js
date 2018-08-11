import { deduce } from "./target"

class Language {
  constructor(name, extensions, destExt) {
    this.name = name
    this.extensions = extensions
    this.destinationExtension = destExt

    this.deducer = deduce(this.extensions, this.destinationExtension)
  }

  findTarget(source) {
    return this.deducer(source)
  }
}

export const Stylus = new Language("Stylus", ["styl", "stylus"], "css")

export const Pug = new Language("Pug", ["jade", "pug"], "html")

export const languages = [Stylus, Pug]

export function findLanguage(ext) {
  if (ext[0] === ".") ext = ext.substring(1)
  return languages.find(lang => lang.extensions.includes(ext))
}
