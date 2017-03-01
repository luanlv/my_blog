export default {
  a1: {
    field: 'articles',
    url: 'http://localhost:3000/api/articlesForHome',
    extra: false
  },
  a2: {
    field: 'hotArticles',
    url: 'http://localhost:3000/api/hotArticles',
    extra: false
  },
  a3: {
    field: 'articles',
    url: 'http://localhost:3000/api/articlesByCategory/',
    extra: true
  },
  c1: {
    field: 'categories',
    url: 'http://localhost:3000/api/category/get',
    extra: false
  },
  c2: {
    field: 'categories',
    url: 'http://localhost:3000/api/category/',
    extra: true
  },
  p1: {
    field: 'post',
    url: 'http://localhost:3000/api/getPost/',
    extra: true
  }
}
