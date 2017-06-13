import { List, Map } from 'immutable'
import * as types from '../actions/types'

function initiateBlock(state) {
  console.log("Calling initiateBlock in reducer")
  return state
}

export default function(state = Map(), action) {
  switch (action.type) {
    case types.INITIATE_BLOCK:
      return initiateBlock(state)
  }
  return state
}
