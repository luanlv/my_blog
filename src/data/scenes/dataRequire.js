import {store} from '../../store'

export function categories (data = [], state = store.getState()) {
  if (state.categories.needUpdate || !state.categories.ok) {
    data.push({
      t: 1,
      v: 'c1'
    })
  }
  return data
}

export function home (data = [], state = store.getState()) {
  if (state.home.needUpdate || !state.home.ok) {
    data.push({
      t: 1,
      v: 'a1'
    })
  }
  return data
}

export function hotArticles (data = [], state = store.getState()) {
  if (state.hotArticles.needUpdate || !state.hotArticles.ok) {
    data.push({
      t: 1,
      v: 'a2'
    })
  }
  return data
}

export function articleInCategory (data = [], slug, state = store.getState()) {
  if (state.articlesInCategory.needUpdate || !state.articlesInCategory.ok) {
    data.push({
      t: 2,
      v: 'a3',
      e: slug
    })
  }
  return data
}

export function categoryInfo (data = [], slug, state = store.getState()) {
  if (state.categoryInfo.needUpdate || !state.categoryInfo.ok) {
    data.push({
      t: 2,
      v: 'c2',
      e: slug
    })
  }
  return data
}

export function post (data = [], slug, state = store.getState()) {
  if (state.post.needUpdate || !state.post.ok) {
    data.push({
      t: 2,
      v: 'p1',
      e: slug
    })
  }
  return data
}
