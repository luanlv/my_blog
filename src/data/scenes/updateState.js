export const newState = function (state, data) {
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
    } else if (key === 'a3') {
      result = Object.assign({}, result, {
        articlesInCategory: {
          needUpdate: result.articlesInCategory.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'c2') {
      result = Object.assign({}, result, {
        categoryInfo: {
          needUpdate: result.categoryInfo.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    }
  })
  return result
}
