import {List, Map} from 'immutable'
import * as types from '../actions/types'

function defaultFunction(state) {
  console.log("Calling default function in reducer")
  return state
}

function toggleAdding(state) {
  const status = state.get('isAddingItem', undefined)   
  var nextStatus = true
  if (status===true) {
    nextStatus = false
  }
  return state.set('isAddingItem', nextStatus)
}

function addItem(state, item) {
  const blockees = state.get('blockees', List())
  if (!blockees.includes(item)) {
    const newBlockees = blockees.push(item)
    console.log(newBlockees.toJS())
    return state.set('blockees', newBlockees)
  }
  return state
}

function deleteItem(state, item) {
  const blockees = state.get('blockees', List())
  const index = blockees.indexOf(item)
  if (index>=0) {
    const newBlockees = blockees.delete(index)
    console.log(newBlockees.toJS())
    return state.set('blockees', newBlockees)
  }
  return state
}

export default function(state = Map(), action) {
  switch (action.type) {
    case types.TOGGLE_ADDING:
      return toggleAdding(state)
    case types.DELETE:
      return deleteItem(state, action.item)
    case types.ADD_ITEM:
      return addItem(state, action.item)
  }
  return state
  
}
