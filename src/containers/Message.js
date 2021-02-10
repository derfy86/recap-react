import { connect } from 'react-redux';
import Message from '../components/Message';

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Message);
