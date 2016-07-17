import AbstractSection from './AbstractSection';
import { compileFile } from '../services/jade';

export default AbstractSection(
  'JadeSection',
  'Jade',
  'jade',
  file => compileFile(file.source)
);
