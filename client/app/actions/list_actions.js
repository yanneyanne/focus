import * as types from './types'
import { List } from 'immutable'
import api from '../lib/api'

export function addItem(name) {
  return (dispatch, getState) => {
    const route = 'blockees'
    const params = { "name": name }
    return api.post(route, params).then((resp) => {
      if (resp.ok) {
        dispatch(fireRemoveInputError())
        let item = {
          name: resp.blockee.name,
          uri: resp.blockee.uri
        }
        dispatch(fireAddItem(item))
      } else {
        dispatch(fireInputError(resp.status))
      }
    })
  }
}

function fireAddItem(item) {
  return {
    type: types.ADD_ITEM,
    item
  }
}

function fireInputError(statusCode) {
  return {
    type: types.SET_INPUT_ERROR,
    statusCode
  }
}

function fireRemoveInputError() {
  return {
    type: types.REMOVE_INPUT_ERROR
  }
}

export function deleteItem(item) {
  return (dispatch, getState) => {
    return api.delete(item.uri).then((resp) => { 
      dispatch(fireDeleteItem(item))
    })
  }
}

function fireDeleteItem(item) {
  return {
    type: types.DELETE,
    item
  }
}

export function loadBlockees() {
  console.log("Loading list from db action")
  return (dispatch, getState) => {
    const route = 'blockees'
    return api.get(route).then((resp) => {
      let blockees = List(resp.blockees)
      dispatch(fireLoadBlockees({blockees}))
    }).catch((err) => {
      console.log("Error connecting to backend application")
      console.log(err)
      console.log("Retrying...")
      loadBlockees()
    })
  }
}

function fireLoadBlockees({ blockees }) {
  return {
    type: types.LOAD_BLOCKEES,
    blockees
  }
}
