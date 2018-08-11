import jade from "jade"

import { writeFile } from "./fs"

export function compileFile(sourcePath, destPath) {
  if (sourcePath === undefined) return Promise.reject("No file provided")

  return writeFile(destPath, jade.renderFile(sourcePath))
}
