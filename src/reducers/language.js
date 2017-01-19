import { createReducer } from 'redux-create-reducer';
import { SET_LANGUAGE } from '../actions/language';

const initialState = 'hu';

export default createReducer(initialState, {
  [SET_LANGUAGE](state, action) {
    return action.language;
  }
});
