import { combineReducers } from 'redux'
import counter from './counter'
import players from './players'

export default combineReducers({
  counter,
  players,
})
