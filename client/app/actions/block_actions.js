import * as types from './types'
import api from '../lib/api'

export function initiateBlock() {
  console.log("Calling initiateBlocking action")
  return {
    type: types.INITIATE_BLOCK 
  }
}
