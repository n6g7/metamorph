import AbstractSection from './AbstractSection';
import { compileFile } from '../services/jade';

export default AbstractSection(
  'JadeSection',
  'Jade',
  'jade',
  compileFile
);
