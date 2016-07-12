import { connect } from 'react-redux';

import Sections from '../components/Sections';

const mapStateToProps = (state) => ({
  files: state.get('files')
});

const SectionsContainer = connect(
  mapStateToProps
)(Sections);

export default SectionsContainer;
