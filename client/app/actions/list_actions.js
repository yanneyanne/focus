import * as types from './types'
import { List } from 'immutable'
import api from '../lib/api.js'

export function toggleAdding() {
  return {
  type: types.TOGGLE_ADDING
  }
}

export function addItem(item) {
  console.log("Adding item")
  return {
    type: types.ADD_ITEM,
    item
  }
}

export function deleteItem(item) {
  console.log("Deleting item")
  return {
    type: types.DELETE,
    item
  }
}

export function fetchBlockees() {
  console.log("Loading list from db action")
  return (dispatch, getState) => {
    const route = 'blockees'
    return api.get(route).then((resp) => {
      let blockees = List(resp.blockees)
      dispatch(loadBlockees({blockees}))
    }).catch((err) => {
      console.log("Error connecting to backend application")
      console.log(err)
    })
  }
}

function loadBlockees({ blockees }) {
  return {
    type: types.LOAD_BLOCKEES,
    blockees
  }
}
