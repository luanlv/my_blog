/* eslint-disable */
import m from 'mithril'
/* eslint-enable */

export default {
  oninit: function (vnode) {
    vnode.state.select = 0
  },
  view (vnode) {
    return (
      <nav className="navWr">
        <div class='wrapper'>
          <ul class='nav-list'>
            <li class={'download ' + ((vnode.state.select === 0) ? 'selected' : '')}
                onclick={function () {
                  vnode.state.select = 0
                }}
            ><a href='#'>Home</a></li>
            <li class={'features ' + ((vnode.state.select === 1) ? 'selected' : '')}
              onclick={function () {
                vnode.state.select = 1
              }}
            ><a href='#'>Blog</a></li>
            <li class={'method ' + ((vnode.state.select === 2) ? 'selected' : '')}
                onclick={function () {
                  vnode.state.select = 2
                }}
            ><a href='#'>About</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
