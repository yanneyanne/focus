import { List, Map } from 'immutable'
import * as types from '../actions/types'

function initiateBlock(state, time) {
  console.log("Calling initiateBlock in reducer")
  console.log("The current time is...")
  console.log(time)
  return state.set('blockerActive', true)
}

function setTime(state, newTime) {
  return state.set('time', newTime)
}

export default function(state = Map(), action) {
  switch (action.type) {
    case types.INITIATE_BLOCK:
      return initiateBlock(state, action.time)
    case types.SET_TIME:
      return setTime(state, action.newTime)
  }
  return state
}
