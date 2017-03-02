import m from 'mithril'
import Home from './scenes/Home'
import Category from './scenes/Category'
import Categories from './scenes/Categories'
import Post from './scenes/Post'
// import About from './scenes/Category'
// import Users from './scenes/Users'
// import User from './scenes/User'
// import UserCreate from './scenes/UserCreate'
import {store, initialiseStore, setAccessibleStore} from '../src/store'

setAccessibleStore(initialiseStore(window.__PRELOADED_STATE__))
// store.subscribe(m.redraw)
store.subscribe(function () {
  m.redraw()
  window.scrollTo(0, 0)
})

export default {
  '/': Home,
  '/categories': Categories,
  '/category/:slug': Category,
  '/post/:slug': Post
  // '/about': About,
  // '/users': Users,
  // '/users/create': UserCreate,
  // '/users/:key': User
}
