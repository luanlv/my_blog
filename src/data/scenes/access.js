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

