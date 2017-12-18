import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import listReducer from './ducks/listDuck';

const rootReducer = combineReducers({
  listReducer
  // form: formReducer
});

export default rootReducer;
