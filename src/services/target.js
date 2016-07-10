import path from 'path';

export function deduce(sourcePath, oldExt, newExt) {
  const parsed = path.parse(sourcePath);
  parsed.base = path.basename(parsed.base, oldExt) + newExt;
  return path.format(parsed);
}
