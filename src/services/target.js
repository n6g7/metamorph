import path from 'path';

export function deduce(sourcePath, oldExts, newExt) {
  const parsed = path.parse(sourcePath);

  const oldExt = oldExts.find(ext => `.${ext}` === parsed.ext);
  parsed.base = path.basename(parsed.base, oldExt) + newExt;

  return path.format(parsed);
}
