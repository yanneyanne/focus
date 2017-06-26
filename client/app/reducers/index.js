import { combineReducers } from 'redux'
import list from './list_reducer'
import block from './block_reducer'

export default combineReducers({
  list,
  block
})
