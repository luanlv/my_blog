import * as types from '../../actionTypes'
import * as api from './../api'
import {store} from '../../../store'
import * as dataRequire from '../dataRequire'

export function boundGetCategory (slug) { return store.dispatch(loadCategory(slug)) }

export function loadCategorySuccess (data, requireList) {
  return { type: types.LOAD_HOME_SUCCESS, data, requireList }
}

function requireData (slug) {
  var data = []
  data = dataRequire.articleInCategory(data, slug)
  data = dataRequire.categoryInfo(data, slug)
  data = dataRequire.hotArticles(data)
  return data
}

export function loadCategory (slug) {
  return function (dispatch) {
    const requireList = requireData(slug)
    return api.getData(requireList)
      .then(home => {
        dispatch(loadCategorySuccess(home, requireList))
      })
      .catch(e => {
        // dispatch(throwRequest())
        throw Error(e)
      })
  }
}
