import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import List from './ducks/listDuck';

const rootReducer = combineReducers({
  List,
  form: formReducer
});

export default rootReducer;
