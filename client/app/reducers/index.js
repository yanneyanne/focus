import { combineReducers } from 'redux'
import blockees from './blockees_reducer'
import blocker from './blocker_reducer'

export default combineReducers({
  blockees,
  blocker
})
