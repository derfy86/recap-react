import {
  CHANGE_INPUT,
} from '../actions';
import Data from '../data/repos';

const initialState = {

  data: Data,
  inputUser: '',

};

const reducer = (stateActuel = initialState, action = {}) => {
  // Je souhaite examiner le .type de chaque action
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...stateActuel,
        inputUser: action.payload,
      };
    default:
      return stateActuel;
  }
};
export default reducer;
