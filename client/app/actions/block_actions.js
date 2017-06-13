import * as types from './types'
import api from '../lib/api'

export function initiateBlock() {
  console.log("Initiating block")
  return {
    type: types.INITIATE_BLOCK 
  }
}
