/* eslint-disable */
import m from 'mithril'
/* eslint-enable */

export default {
  view (vnode) {
    return (
      <div class='wrapper'>
        <h1>YNAB Navigation in pure CSS</h1>
        <ul class='nav-list'>
          <li class='download selected'><a href='#'>Download</a></li>
          <li class='features'><a href='#'>Features</a></li>
          <li class='method'><a href='#'>Method</a></li>
          <li class='purchase'><a href='#'>Purchase</a></li>
        </ul>
      </div>
    )
  }
}
