import * as types from '../actionTypes'

const initialState = {
  categories: {
    ok: false,
    needUpdate: false,
    value: []
  },
  hotArticles: {
    ok: false,
    needUpdate: false,
    value: []
  },
  home: {
    articles: {
      ok: false,
      needUpdate: false,
      value: []
    }
  },
  post: {
    ok: false,
    needUpdate: true,
    value: {}
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

function newState (state, data) {
  var result = Object.assign({}, state, {})
  data.forEach((el) => {
    const key = el.req.v
    if (key === 'a1') {
      result = Object.assign({}, result, {
        home: {
          articles: {
            needUpdate: result.home.articles.needUpdate,
            ok: el.ok,
            value: el.value
          }
        }
      })
    } else if (key === 'c1') {
      result = Object.assign({}, result, {
        categories: {
          needUpdate: result.categories.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'a2') {
      result = Object.assign({}, result, {
        hotArticles: {
          needUpdate: result.hotArticles.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'p1') {
      result = Object.assign({}, result, {
        post: {
          needUpdate: result.post.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    }
  })
  return result
}
