import * as types from './types'

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
