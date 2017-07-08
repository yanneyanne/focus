import * as types from './types'
import api from '../lib/api'

export function initiateBlock(time) {
  return (dispatch, getState) => {
    const route = 'blocker'
    const params = {'state': 'active'}
    return api.put(route, params).then((resp) => {
      let tickerId = setInterval(() => dispatch(tick()), 1000);
      dispatch(fireInitiateBlock(tickerId))
    })
  }
}

function fireInitiateBlock(tickerId) {
  return {
    type: types.INITIATE_BLOCK,
    tickerId
  }
}

function tick() {
  console.log("A tick!")
  return {
    type: types.TICK
  }
}

export function setInitialTime(newTime) {
  return {
    type: types.SET_INITIAL_TIME,
    newTime
  }
}
