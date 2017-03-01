/* eslint-disable */
import m from 'mithril'
/* eslint-enable */
import {getHotArticles} from '../../data/scenes/access'

let isNode = false
if (typeof process === 'object') {
  if (typeof process.versions === 'object') {
    if (typeof process.versions.node !== 'undefined') {
      isNode = true
    }
  }
}

export default {
  oninit (vnode) {

  },
  oncreate (vnode) {

  },
  view (vnode) {
    return (
      <div className={(window.showSidebar ? 'showSidebar' : '')} id={isNode ? '' : 'enableAnimate'} >
        <div className={'container'}>
          <header className='shadow1'>
            <div>
              <div className='site-branding'>
                <a href='/'
                   oncreate={m.route.link}
                >
                  <div className="top-stick bg-teal"></div>
                  <img src='/assets/logo3.png' alt='logo vnguy.com' width='200' height='140'/>
                  <p class="site-description">Programming Blog</p>
                </a>
              </div>
              <div style='position: relative'>
                <div className='topic-title has-triangle-after'>TOPICS</div>
                <ul className='topicWr'>
                  <li><a href='/category/nodejs'
                    oncreate={m.route.link}
                  >Node Js</a></li>
                  <li><a href='/category/playframework'
                    oncreate={m.route.link}
                  >Play Framework</a></li>
                  <li><a href='/category/reactjs'
                    oncreate={m.route.link}
                  >React Js</a></li>
                  <li><a href='/category/vuejs'
                    oncreate={m.route.link}
                  >Vue Js</a></li>
                </ul>
              </div>
              <div className='sidebar-bottom has-triangle-before '></div>
            </div>
          </header>

          <div className='content home'>
            <nav className='searchWr shadow2'>
              <div className='menu-icon'
                   onclick={function () {
                     window.showSidebar = !window.showSidebar
                   }}
              ><a href='#' className='menu example1'><span></span></a>
              </div>
              <form style='float:right'>
                <input type='search' placeholder='Search' />
              </form>
            </nav>
            <div className='nav searchWr shadow2'>
              <form style='display: inline-block'>
                <input type='search' placeholder='Search' />
              </form>
              <div className='nav-right' style='float: right'>
                <a href='/'
                  oncreate={m.route.link}
                >Home</a>
                <a href='/categories'
                  oncreate={m.route.link}
                >Categories</a>
              </div>
            </div>
            <div className='left'>
              {vnode.children}
            </div>
            <div className='right sidebar2'
                 oncreate={function (el) {
                   var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                   var runOnScroll = function (evt) {
                     if (height >= 630) {
                       if (document.body.scrollTop > 50) {
                         el.dom.classList.add('stick')
                       } else {
                         el.dom.classList.remove('stick')
                       }
                     }
                   }
                   window.addEventListener('scroll', runOnScroll)
                 }}
            >
              <div className='scrollStick'>

                <div className='subscribe' id='korfu'>
                  <form id='login'>
                    <h4>Subscribe</h4>
                    <hr />
                    <input className='mar' type='text' placeholder='Your name' />
                    <input className='mar' placeholder='Your email' type='text' />
                    <br />
                    <button type='submit'>Submit</button>
                  </form>
                </div>

                <div className='topViews'>
                  <div className='widget' id='korfu'>
                    <ol className='widget-list' id='developers'>
                      {getHotArticles().map((article) => {
                        return (
                          <li>
                            <a className='widget-list-link'
                              href={'/post/' + article.slug}
                              oncreate={m.route.link}
                            >
                              <img src='http://www.gravatar.com/avatar/6?f=y&amp;s=64&amp;d=identicon'/>
                              {article.title} <span>{article.view} views</span>
                            </a>
                          </li>
                        )
                      })}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <div className="footer-1">
              <a href="/"
                oncreate={m.route.link}
              ><img src='/assets/logo3.png' alt='logo vnguy' width='200' height='140'/></a>
            </div>
            <div className="footer-2">

            </div>
            <div className="footer-3">

            </div>
            <div className="footer-4">

            </div>
          </footer>

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
