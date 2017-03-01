import { store } from '../../store'

export function getState () {
  return store.getState()
}

export function getCategories () {
  return store.getState().categories.value
}

export function getArticlesForHome () {
  return store.getState().home.articles.value
}

export function getArticlesForCategory () {
  return store.getState().articlesInCategory.value
}

export function getHotArticles () {
  return store.getState().hotArticles.value
}

export function getPost () {
  return store.getState().post.value
}

export function getInfoCategory () {
  return store.getState().categoryInfo.value
}
