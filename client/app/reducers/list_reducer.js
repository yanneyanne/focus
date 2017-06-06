import createReducer from './create_reducer'
import * as types from '../actions/'
import { List, Map } from 'immutable'

export const list = createReducer(Map(), {
  [types.TOGGLE_ADDING](state, action) {
    console.log("Toggle adding in reducer")
    const status = state.getIn('isAddingItem', undefined)   
    var nextStatus = true
    if (status===true) {
      nextStatus = false
    }
    return state.setIn('isAddingItem', nextStatus)
  },
  
  [types.DELETE](state, action) {
    const blockees = state.getIn(['blockList', 'blockees'], List())
    const index = blockees.indexOf(item)
    if (index>=0) {
      const newBlockees = blockees.delete(index)
      console.log(newBlockees.toJS())
      return state.setIn(['blockList', 'blockees'], newBlockees)
    }
    return state
  },

  [types.ADD_ITEM](state, action) {
    const blockees = state.getIn('blockees', List())
    if (!blockees.includes(item)) {
      const newBlockees = blockees.push(item)
      console.log(newBlockees.toJS())
      return state.setIn('blockees', newBlockees)
    }
    return state
  }
})
