/* eslint-disable */
import m from 'mithril'
import {getPost} from '../../data/scenes/access'
import marked from 'marked'
/* eslint-enable */

export default {
  oninit (vnode) {
    // if (!window.showSidebar) window.showSidebar = false
  },
  oncreate (vndode) {
    window.scrollTo(0, 0)
  },
  view (vnode) {
    return (
      <div className='post-postWr'>
        <div className="post-header">
          <div className="post-coverWr">
            <div className="post-cover">
            </div>
          </div>
          <div className="post-title">
            {getPost().title}
          </div>

          <div id="wrapper">
            <div id="share">
              <a href="#" class="container twitter">
                <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" class="circle">
                  <circle cx="100" cy="100" r="50"/>
                </svg>
                <div class="social">
                  <i class="fa fa-twitter"></i>
                </div>
              </a>
              <a href="#" class="container facebook">
                <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" class="circle">
                  <circle cx="100" cy="100" r="50"/>
                </svg>
                <div class="social">
                  <i class="fa fa-facebook"></i>
                </div>
              </a>
              <a href="#" class="container google">
                <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" class="circle">
                  <circle cx="100" cy="100" r="50"/>
                </svg>
                <div class="social">
                  <i class="fa fa-google-plus"></i>
                </div>
              </a>
            </div>
          </div>

        </div>

        <div className="post-contentWr">
          <div className="post-meta">
          </div>
          <div className="post-content markdown">
            {m.trust(marked(getPost().content))}
          </div>
        </div>
      </div>
    )
  }
}
