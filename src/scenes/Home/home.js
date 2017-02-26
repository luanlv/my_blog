/* eslint-disable */
import m from 'mithril'
/* eslint-enable */
import {getArticlesForHome} from '../../data/scenes/access'

export default {
  oninit (vnode) {
    if (!window.showSidebar) window.showSidebar = false
  },

  view (vnode) {
    return (
    <div className={ (window.showSidebar ? 'showSidebar' : '')}>
      <div className={'container'}>
        <header className='shadow1'>
          <div>
            <div className='site-branding'>
              <a href='/'
                oncreate={m.route.link}
              >Logo</a>
            </div>
            <div style='position: relative'>
              <div className='topic-title has-triangle-after'>TOPICS</div>
              <ul className='topicWr'>
                <li><a href=''>Node Js</a></li>
                <li><a href=''>Play Framework</a></li>
                <li><a href=''>React Js</a></li>
                <li><a href=''>Vue Js</a></li>
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
              <a href='#'>Home</a>
              <a href='#'>Category</a>
              <a href='#'>Login</a>
              <a href='#'>About</a>
            </div>
          </div>
          <div className='left'>
            <div className='home-postWr'>
            {getArticlesForHome().map((article) => {
              return (
                <div className='home-post'>
                  <a href={'/post/' + article.slug}
                    oncreate={m.route.link}
                  >
                    <div className='home-postWr2'>
                      <div>
                        <div className='home-coverWr'>
                          <div className='home-post-cover'>

                          </div>
                        </div>

                        <div className='home-post-title'>
                          <h3>
                            {article.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
            </div>
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
                 } else {
                   if (document.body.scrollTop > 680 - height) {
                     el.dom.classList.add('stick2')
                   } else {
                     el.dom.classList.remove('stick2')
                   }
                 }
               }
               window.addEventListener('scroll', runOnScroll)
             }}
          >
            <div className='scrollStick'>

                <div className="subscribe" id='korfu'>
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
                <div class="widget" id="korfu">
                  <ol class="widget-list" id="developers">
                    <li>
                      <a class="widget-list-link">
                        <img src="http://www.gravatar.com/avatar/6?f=y&amp;s=64&amp;d=identicon"/>
                          Developer #1 <span>481 views</span>
                      </a>
                    </li>
                    <li>
                      <a class="widget-list-link">
                        <img src="http://www.gravatar.com/avatar/6?f=y&amp;s=64&amp;d=identicon"/>
                          Developer #2 <span>5162 views</span>
                      </a>
                    </li>
                    <li>
                      <a class="widget-list-link">
                        <img src="http://www.gravatar.com/avatar/6?f=y&amp;s=64&amp;d=identicon"/>
                          Developer #3 <span>342 views</span>
                      </a>
                    </li>
                    <li>
                      <a class="widget-list-link">
                        <img src="http://www.gravatar.com/avatar/6?f=y&amp;s=64&amp;d=identicon"/>
                        Developer #5 <span>342 views</span>
                      </a>
                    </li>
                    <li>
                      <a class="widget-list-link">
                        <img src="http://www.gravatar.com/avatar/6?f=y&amp;s=64&amp;d=identicon"/>
                        Developer #4 <span>342 views</span>
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
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
