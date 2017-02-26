import * as types from '../../actionTypes'
import * as api from './../api'
import {store} from '../../../store'

export function boundGetHome () { return store.dispatch(loadHome()) }

export function loadHomeSuccess (data, requireList) {
  console.log('run loadHomeSuccess')
  return { type: types.LOAD_HOME_SUCCESS, data, requireList }
}

function requireData () {
  var data = []
  const state = store.getState()
  if (!state.categories.ok) data.push('c1')
  if (!state.home.ok) data.push('a1-1')
  return data
}

export function loadHome () {
  return function (dispatch) {
    const requireList = requireData()
    return api.getData(requireList)
      .then(home => {
        dispatch(loadHomeSuccess(home, requireList))
      })
      .catch(e => {
        // dispatch(throwRequest())
        throw Error(e)
      })
  }
}
