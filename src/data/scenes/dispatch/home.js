import * as types from '../../actionTypes'
import * as api from './../api'
import {store} from '../../../store'
import * as dataRequire from '../dataRequire'

export function boundGetHome () { return store.dispatch(loadHome()) }

export function loadHomeSuccess (data, requireList) {
  return { type: types.LOAD_HOME_SUCCESS, data, requireList }
}

function requireData () {
  var data = []
  data = dataRequire.categories(data)
  data = dataRequire.home(data)
  data = dataRequire.hotArticles(data)
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
