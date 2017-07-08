import { List, Map } from 'immutable'
import * as types from '../actions/types'
import { tick, isTimerDone } from '../lib/time_helper'

function initiateBlock(state, tickerId) {
  let newState = state.set('tickerId', tickerId)
  return newState.set('blockerActive', true)
}

function setTime(state, newTime) {
  return state.set('time', newTime)
}

function performTick(state) {
  let newTime = tick(state.get('time'))
  if (isTimerDone(newTime)) {
    let ticker = state.get('ticker')
    clearInterval(ticker)
  }
  return state.set('time', newTime)
}

export default function(state = Map(), action) {
  switch (action.type) {
    case types.INITIATE_BLOCK:
      return initiateBlock(state, action.tickerId)
    case types.SET_TIME:
      return setTime(state, action.newTime)
    case types.TICK:
      return performTick(state)
  }
  return state
}
