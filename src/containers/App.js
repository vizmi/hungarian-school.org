import { connect } from 'react-redux';
import Main from '../components/Main';

function mapStateToProps(state) {
  return { language: state.language };
}

export default connect(mapStateToProps)(Main);
