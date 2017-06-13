import * as types from './types'
import { List } from 'immutable'
import api from '../lib/api'

export function toggleAdding() {
  return {
    type: types.TOGGLE_ADDING
  }
}

export function addItem(name) {
  console.log("Adding item")
  return (dispatch, getState) => {
    const route = 'blockees'
    const params = { "name": name }
    return api.post(route, params).then((resp) => {
      let item = {
        name: resp.blockee.name,
        uri: resp.blockee.uri
      }
      dispatch(fireAddItem(item))
    })
  }
}

function fireAddItem(item) {
  return {
    type: types.ADD_ITEM,
    item
  }

}

export function deleteItem(item) {
  console.log("Deleting item")
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
    })
  }
}

function fireLoadBlockees({ blockees }) {
  return {
    type: types.LOAD_BLOCKEES,
    blockees
  }
}
