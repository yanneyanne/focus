import { List, Map } from 'immutable'
import * as types from '../actions/types'
import { nextTick } from '../lib/time_helper'

function initiateBlock(state, tickerId) {
  let newState = state.set('tickerId', tickerId)
  return newState.set('blockerActive', true)
}

function setInitialTime(state, newTime) {
  return state.set('time', newTime)
}

function performTick(state) {
  let currentTime = state.get('time') || "00:00"
  let newTime = nextTick(currentTime)
  return state.set('time', newTime)
}

function deactivateBlock(state) {
  let tickerId = state.get('tickerId')
  clearInterval(tickerId)
  let newState = state.set('blockerActive', false)
  newState = newState.set('tickerId', undefined)
  return newState.set('time', "")
}

export default function(state = Map(), action) {
  switch (action.type) {
    case types.INITIATE_BLOCK:
      return initiateBlock(state, action.tickerId)
    case types.SET_INITIAL_TIME:
      return setInitialTime(state, action.newTime)
    case types.TICK:
      return performTick(state)
    case types.DEACTIVATE_BLOCK:
      return deactivateBlock(state)
  }
  return state
}
