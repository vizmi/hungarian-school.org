import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import language from './language';

const rootReducer = combineReducers({
  counter,
  language,
  routing
});

export default rootReducer;
