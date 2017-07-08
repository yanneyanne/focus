import { List, Map } from 'immutable'
import * as types from '../actions/types'
import { tick, isTimerDone } from '../lib/time_helper'

function initiateBlock(state, tickerId) {
  let newState = state.set('tickerId', tickerId)
  return newState.set('blockerActive', true)
}

function setInitialTime(state, newTime) {
  return state.set('time', newTime)
}

function performTick(state) {
  let newTime = tick(state.get('time'))
  let newState = state
  if (isTimerDone(newTime)) {
    let tickerId = state.get('tickerId')
    clearInterval(tickerId)
    newState = state.set('blockerActive', false)
    newState = newState.set('tickerId', undefined)
    newTime = ""
  }
  return newState.set('time', newTime)
}

export default function(state = Map(), action) {
  switch (action.type) {
    case types.INITIATE_BLOCK:
      return initiateBlock(state, action.tickerId)
    case types.SET_INITIAL_TIME:
      return setInitialTime(state, action.newTime)
    case types.TICK:
      return performTick(state)
  }
  return state
}
