import fs from "fs"

export function readFile(filepath, encoding = "utf-8") {
  return new Promise((fulfill, reject) => {
    fs.readFile(filepath, encoding, (err, data) => {
      if (err) reject(err)
      else fulfill(data)
    })
  })
}

export function writeFile(filepath, data) {
  return new Promise((fulfill, reject) => {
    fs.writeFile(filepath, data, err => {
      if (err) reject(err)
      else fulfill()
    })
  })
}
