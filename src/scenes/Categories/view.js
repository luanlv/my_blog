
/* eslint-disable */
import m from 'mithril'
/* eslint-enable */
// import {getArticlesForCategory} from '../../data/scenes/access'
import {getCategories} from '../../data/scenes/access'

export default {
  oninit (vnode) {
    // if (!window.showSidebar) window.showSidebar = false
  },

  view (vnode) {
    return [
      <div className="category-info">
           CATEGORIES
      </div>,
      <div className='categoriesWr mh500'>
        {getCategories().map((category) => {
          return (
            <div className="categoryWr flipInX animated">
              <a href={'/category/' + category.slug}
                oncreate={m.route.link}
              >
                {/*<span>1 Post</span>*/}
                <h3>{category.title}</h3>
                <p>{category.description}</p>

              </a>
            </div>
          )
        })}
      </div>
    ]
  }
}
