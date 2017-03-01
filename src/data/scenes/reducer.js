import * as types from '../actionTypes'
import {newState} from './updateState'
import {initialState} from './schema'


export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_HOME_SUCCESS:
      return newState(state, action.data)
    default:
      return state
  }
}
