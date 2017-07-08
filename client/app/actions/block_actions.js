import * as types from './types'
import api from '../lib/api'

export function initiateBlock(time) {
  console.log("Initiating block")
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

export function setTime(newTime) {
  return {
    type: types.SET_TIME,
    newTime
  }
}
