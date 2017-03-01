export const initialState = {
  categories: {
    ok: false,
    needUpdate: false,
    value: []
  },
  articlesInCategory: {
    ok: false,
    needUpdate: true,
    value: []
  },
  categoryInfo: {
    ok: false,
    needUpdate: true,
    value: {}
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
