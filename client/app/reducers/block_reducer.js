import { List, Map } from 'immutable'
import * as types from '../actions/types'

function initiateBlock(state, blocker_active) {
  console.log("Calling initiateBlock in reducer")
  return state.set('blocker_active', blocker_active)
}

export default function(state = Map(), action) {
  switch (action.type) {
    case types.INITIATE_BLOCK:
      return initiateBlock(state, action.blocker_active)
  }
  return state
}
