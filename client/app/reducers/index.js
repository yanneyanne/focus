import { combineReducers } from 'redux'
import * as listReducer from './list_reducer'

export default combineReducers(Object.assign(
  listReducer
))
