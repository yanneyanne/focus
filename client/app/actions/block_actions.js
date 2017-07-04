import * as types from './types'
import api from '../lib/api'

export function initiateBlock(time) {
  console.log("Initiating block")
  return (dispatch, getState) => {
    const route = 'blocker'
    const params = {"state": "active"}
    return api.put(route, params).then((resp) => {
      let timer = setInterval(() => dispatch(tick()), 1000);
      dispatch(fireInitiateBlock(time))
    })
  }
}

function fireInitiateBlock(time) {
  return {
    type: types.INITIATE_BLOCK,
    time
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
