/* eslint-disable */
import m from 'mithril'
/* eslint-enable */
import {getArticlesForHome} from '../../data/scenes/access'

export default {
  oninit (vnode) {
    // if (!window.showSidebar) window.showSidebar = false
  },

  view (vnode) {
    return (
      <div className='home-postWr mh500'>
        {getArticlesForHome().map((article) => {
          return (
            <div className='home-post fadeIn animated'>
              <a href={'/post/' + article.slug}
                 oncreate={m.route.link}
              >
                <div className='home-postWr2'>
                  <div>
                    <div className='home-coverWr'>
                      <div className='home-post-cover'>
                        <img src={'/image/' + article.cover} alt={article.cover}/>
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
    )
  }
}
