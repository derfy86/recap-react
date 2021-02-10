import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { onChangeInput } from '../actions';

const mapStateToProps = (state) => ({
  inputUser: state.inputUser,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInput: (text) => {
    dispatch(onChangeInput(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
