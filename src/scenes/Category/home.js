/* eslint-disable */
import m from 'mithril'
/* eslint-enable */
import {getCategories} from '../../data/scenes/access'

export default {
  oninit (vnode) {
    if (!window.showSidebar) window.showSidebar = false
  },
  view (vnode) {
    return (
    <div className={ (window.showSidebar ? 'showSidebar' : '')}>
      <div className={'container ' + (window.showSidebar ? 'showSidebar' : '')}>
        <header className='mh1000 bg-navy'>
          <div className="site-branding bg-green">
            <a href="/"
               oncreate={m.route.link}
            >Logo</a>
          </div>
        </header>

        <div className='content mh1000 bg-blue'>
          <nav className='bg-lime shadow1'>
            <div className='menu-icon'
              onclick={function () {
                window.showSidebar = !window.showSidebar
              }}
            >Menu</div>
          </nav>
          <div className='nav bg-fuchsia'></div>
          <div className='left bg-gray mh1000'>

          </div>
          <div className='right bg-olive  mh1000'>
            {
              getCategories().map((el) => {
                return (<div>
                  <a href={'/category/' + el.slug}
                     oncreate={m.route.link}
                  >{el.title}</a>
                </div>)
              })
            }
          </div>
        </div>

      </div>
      <div className='overlaySidebar'
           onclick={function () {
             window.showSidebar = !window.showSidebar
           }}
      ></div>
    </div>
    )
  }
}
