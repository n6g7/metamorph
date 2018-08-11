import stylus from "stylus"

import { readFile, writeFile } from "./fs"

function compileString(string) {
  return new Promise((fulfill, reject) => {
    stylus(string).render((err, data) => {
      if (err) reject(err)
      else fulfill(data)
    })
  })
}

export function compileFile(sourcePath, destPath) {
  if (sourcePath === undefined) return Promise.reject("No file provided")

  return readFile(sourcePath)
    .then(compileString)
    .then(css => writeFile(destPath, css))
}
