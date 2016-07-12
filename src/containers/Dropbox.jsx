import { connect } from 'react-redux';

import Dropbox from '../components/Dropbox';
import { addFile } from '../redux/actions';

const mapStateToProps = () => ({});

const DropboxContainer = connect(
  mapStateToProps,
  { addFile }
)(Dropbox);

export default DropboxContainer;
