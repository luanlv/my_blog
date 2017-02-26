import m from 'mithril'
import Home from './scenes/Home'
import Category from './scenes/Category'
// import About from './scenes/Category'
// import Users from './scenes/Users'
// import User from './scenes/User'
// import UserCreate from './scenes/UserCreate'
import {store, initialiseStore, setAccessibleStore} from '../src/store'

setAccessibleStore(initialiseStore(window.__PRELOADED_STATE__))
store.subscribe(m.redraw)

export default {
  '/': Home,
  '/category/:slug': Category
  // '/about': About,
  // '/users': Users,
  // '/users/create': UserCreate,
  // '/users/:key': User
}
