import * as types from '../../actionTypes'
import * as api from './../api'
import {store} from '../../../store'

export function boundGetHome () { return store.dispatch(loadHome()) }

export function loadHomeSuccess (data, requireList) {
  return { type: types.LOAD_HOME_SUCCESS, data, requireList }
}

function requireData () {
  var data = []
  const state = store.getState()
  if (state.categories.needUpdate || !state.categories.ok) {
    data.push({
      t: 1,
      v: 'c1'
    })
  }
  if (state.home.needUpdate || !state.home.ok) {
    data.push({
      t: 1,
      v: 'a1'
    })
  }
  if (state.hotArticles.needUpdate || !state.hotArticles.ok) {
    data.push({
      t: 1,
      v: 'a2'
    })
  }
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
