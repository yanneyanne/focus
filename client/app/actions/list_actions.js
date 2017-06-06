import * as types from './types'

export function toggleAdding() {
  console.log("Toggle adding in list action")
  return {
  	type: types.TOGGLE_ADDING
  }
}

export function addItem(item) {
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
