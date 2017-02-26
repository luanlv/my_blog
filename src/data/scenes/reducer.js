import * as types from '../actionTypes'

const initialState = {
  categories: {
    ok: false,
    needUpdate: false,
    value: []
  },
  home: {
    articles: {
      ok: false,
      needUpdate: true,
      value: []
    }
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_HOME_SUCCESS:
      return newState(state, action.data, action.requireList)

    default:
      return state
  }
}

function newState (state, data, requireList) {
  var result = Object.assign({}, state, {})
  requireList.forEach((el) => {
    var key = el.slice(0, 2)
    if (key === 'a1') {
      result = Object.assign({}, result, {
        home: {
          articles: {
            needUpdate: result.home.articles.needUpdate,
            ok: data.articles.ok,
            value: data.articles.value
          }
        }
      })
    } else if (key === 'c1') {
      result = Object.assign({}, result, {
        categories: {
          needUpdate: result.categories.needUpdate,
          ok: data.categories.ok,
          value: data.categories.value
        }
      })
    }
  })
  return result
}
