import { combineReducers } from 'redux'
import counter from './counter'
import photo from './photo'
import players from './players'
import ui from './ui'

export default combineReducers({
  counter,
  players,
  photo,
  ui
})
