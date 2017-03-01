import m from 'mithril'
import {getJs} from '../../utils'
import layout from '../../components/layout'
import {boundGetHome} from '../../data/scenes/dispatch/home'

export default {
  onmatch () {
    var resolver = this
    return Promise.all([
      getJs(() => import('./view.js')),
      window.__STATE_IS_PRELOADED__ || boundGetHome()
    ]).then((data) => {
      resolver.component = data[0]
      window.__STATE_IS_PRELOADED__ = false
    })
  },
  render (vnode) {
    this.title = 'VNGUY.COM'
    this.description = 'My personal blog about programing'
    document.title = this.title
    return m(layout, vnode.attrs, m(this.component, vnode.attrs))
  }
}
