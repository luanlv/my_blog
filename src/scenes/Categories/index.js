import m from 'mithril'
import {getJs} from '../../utils'
import layout from '../../components/layout'
import {boundGetCategories} from '../../data/scenes/dispatch/categories'
// import {getInfoCategory} from '../../data/scenes/access'

export default {
  onmatch ({slug}) {
    var resolver = this
    return Promise.all([
      getJs(() => import('./view.js')),
      window.__STATE_IS_PRELOADED__ || boundGetCategories(slug)
    ]).then((data) => {
      resolver.component = data[0]
      window.__STATE_IS_PRELOADED__ = false
    })
  },
  render (vnode) {
    this.title = 'List of categories'
    this.description = 'Categories list for vnguy.com'
    document.title = this.title
    return m(layout, vnode.attrs, m(this.component, vnode.attrs))
  }
}
