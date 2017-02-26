import m from 'mithril'
import {getJs} from '../../utils'
import layout from '../../components/layout'
import {boundGetPost} from '../../data/scenes/post/index'

export default {
  onmatch ({slug}) {
    var resolver = this
    return Promise.all([
      getJs(() => import('./view.js')),
      window.__STATE_IS_PRELOADED__ || boundGetPost(slug)
    ]).then((data) => {
      resolver.component = data[0]
      window.__STATE_IS_PRELOADED__ = false
    })
  },
  render (vnode) {
    this.title = 'Home - Mithril'
    this.description = 'test the meta description'
    document.title = this.title
    return m(layout, vnode.attrs, m(this.component, vnode.attrs))
  }
}
