import * as types from './types'
import api from '../lib/api'

export function initiateBlock() {
  console.log("Initiating block")
  return (dispatch, getState) => {
    const route = 'blocker'
    const params = {"state": "active"}
    return api.put(route, params).then((resp) => {
      console.log("In actions: response: ")
      console.log(resp.new_state)
      let blocker_active = resp.new_state === 'active'
      dispatch(fireInitiateBlock(blocker_active))
    })
  }
}

export function fireInitiateBlock(blocker_active) {
  return {
    type: types.INITIATE_BLOCK,
    blocker_active
  }
}
