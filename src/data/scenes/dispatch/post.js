import * as types from '../../actionTypes'
import * as api from './../api'
import {store} from '../../../store'
import * as dataRequire from '../dataRequire'

export function boundGetPost (slug) { return store.dispatch(loadPost(slug)) }

export function loadPostSuccess (data, requireList) {
  return { type: types.LOAD_HOME_SUCCESS, data, requireList }
}

function requireData (slug) {
  var data = []
  data = dataRequire.post(data, slug)
  data = dataRequire.hotArticles(data)
  return data
}

export function loadPost (slug) {
  return function (dispatch) {
    const requireList = requireData(slug)
    return api.getData(requireList)
      .then(home => {
        dispatch(loadPostSuccess(home, requireList))
      })
      .catch(e => {
        // dispatch(throwRequest())
        throw Error(e)
      })
  }
}
