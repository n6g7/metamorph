import { connect } from 'react-redux';

import Sections from '../components/Sections';
import { compileFile, removeFile } from '../redux/actions';

const mapStateToProps = (state) => ({
  files: state.get('files')
});

const SectionsContainer = connect(
  mapStateToProps,
  {
    compile: compileFile,
    remove: removeFile
  }
)(Sections);

export default SectionsContainer;
