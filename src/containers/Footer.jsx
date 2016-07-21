import { connect } from 'react-redux';

import Footer from '../components/Footer';
import { compileAll } from '../redux/actions';

const mapStateToProps = (state) => ({
  files: state.get('files')
});

const FooterContainer = connect(
  mapStateToProps,
  { compileAll }
)(Footer);

export default FooterContainer;
