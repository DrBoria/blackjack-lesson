import { combineReducers } from 'redux'
import conterReducer from './counter';
import conter2 from './counter';

export default combineReducers({
  counter: conterReducer,
  conter2: conter2,
})
