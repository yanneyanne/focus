import * as types from './types'
import api from '../lib/api'

export function initiateBlock(time) {
  console.log("Initiating block")
  return (dispatch, getState) => {
    const route = 'blocker'
    const params = {"state": "active"}
    return api.put(route, params).then((resp) => {
      dispatch(fireInitiateBlock(time))
    })
  }
}

export function fireInitiateBlock(time) {
  return {
    type: types.INITIATE_BLOCK,
    time
  }
}

export function setTime(newTime) {
  return {
    type: types.SET_TIME,
    newTime
  }
}
