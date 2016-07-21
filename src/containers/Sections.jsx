import { connect } from 'react-redux';

import Sections from '../components/Sections';
import { compileFile } from '../redux/actions';

const mapStateToProps = (state) => ({
  files: state.get('files')
});

const SectionsContainer = connect(
  mapStateToProps,
  { compile: compileFile }
)(Sections);

export default SectionsContainer;
