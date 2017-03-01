import m from 'mithril'
import {getJs} from '../../utils'
import layout from '../../components/layout'
import {boundGetPost} from '../../data/scenes/dispatch/post'
import {getPost} from '../../data/scenes/access'

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
    this.title = getPost().title
    this.description = getPost().description
    document.title = this.title
    return m(layout, vnode.attrs, m(this.component, vnode.attrs))
  }
}
