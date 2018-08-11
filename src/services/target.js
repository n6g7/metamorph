import path from "path"

export const deduce = (oldExts, newExt) => sourcePath => {
  const parsed = path.parse(sourcePath)

  const oldExt = oldExts.find(ext => `.${ext}` === parsed.ext)
  parsed.base = path.basename(parsed.base, oldExt) + newExt

  return path.format(parsed)
}
