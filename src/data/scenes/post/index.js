import * as types from '../../actionTypes'
import * as api from './../api'
import {store} from '../../../store'

export function boundGetPost (slug) { return store.dispatch(loadPost(slug)) }

export function loadPostSuccess (data, requireList) {
  return { type: types.LOAD_HOME_SUCCESS, data, requireList }
}

function requireData (slug) {
  var data = []
  const state = store.getState()
  if (state.post.needUpdate || !state.post.ok) data.push('p1|' + slug)
  if (!state.hotArticles.ok) data.push('a2')
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