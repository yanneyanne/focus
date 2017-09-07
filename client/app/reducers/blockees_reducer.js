import { List, Map } from 'immutable'
import * as types from '../actions/types'
import error_map from './error_map'

function defaultFunction(state) {
  console.log("Calling default function in reducer")
  return state
}

function addItem(state, item) {
  const blockees = state.get('blockees', List())
  let alreadyAdded = false
  blockees.forEach((b) => {
    if (b['name']===item['name'] && b['uri']===item['uri'] ) {
      alreadyAdded = true
    }
  })
  if (alreadyAdded) {
    return state
  }
  const newBlockees = blockees.insert(0, item)
  return state.set('blockees', newBlockees)
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

function loadBlockees(state, blockees) {
  let newBlockees = state.get('blockees', List())
  blockees.forEach((blockee) => {
    newBlockees = newBlockees.push({
      name: blockee.name,
      uri: blockee.uri
    })
  })
  return state.set('blockees', newBlockees)
}

function setInputError(state, statusCode) {
  let newState = state.set('inputErrorActive', true)
  newState = newState.set('errorMessage', error_map[statusCode])
  return newState
}

function removeInputError(state) {
  let newState = state.set('inputErrorActive', false)
  newState = newState.set('errorMessage', '')
  return newState
}

export default function(state = Map(), action) {
  switch (action.type) {
    case types.TOGGLE_ADDING:
      return toggleAdding(state)
    case types.DELETE:
      return deleteItem(state, action.item)
    case types.ADD_ITEM:
      return addItem(state, action.item)
    case types.LOAD_BLOCKEES:
      return loadBlockees(state, action.blockees)
    case types.SET_INPUT_ERROR:
      return setInputError(state, action.statusCode)
    case types.REMOVE_INPUT_ERROR:
      return removeInputError(state)
  }
  return state
}
