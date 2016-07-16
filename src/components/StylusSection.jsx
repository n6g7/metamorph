import AbstractSection from './AbstractSection';
import { compileFile } from '../services/stylus';

export default AbstractSection(
  'StylusSection',
  'Stylus',
  'stylus',
  compileFile
);
