import { store } from '../../store'

export function getState () {
  return store.getState()
}

export function getCategories () {
  console.log(store.getState().categories.value)
  return store.getState().categories.value
}

