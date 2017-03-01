import m from 'mithril'
import {getJs} from '../../utils'
import layout from '../../components/layout'
import {boundGetCategory} from '../../data/scenes/dispatch/category'
import {getInfoCategory} from '../../data/scenes/access'

export default {
  onmatch ({slug}) {
    var resolver = this
    return Promise.all([
      getJs(() => import('./view.js')),
      window.__STATE_IS_PRELOADED__ || boundGetCategory(slug)
    ]).then((data) => {
      resolver.component = data[0]
      window.__STATE_IS_PRELOADED__ = false
    })
  },
  render (vnode) {
    this.title = getInfoCategory().title
    this.description = getInfoCategory().description
    document.title = this.title
    return m(layout, vnode.attrs, m(this.component, vnode.attrs))
  }
}
