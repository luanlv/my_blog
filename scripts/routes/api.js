let express    = require('express')
let app        = express()
let router = express.Router()
let bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Article = mongoose.model('Article')
const Category = mongoose.model('Category')
let unirest = require('unirest')
var async    = require('async')
var map = require('./mapUrl').default
let axios = require('axios')

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

let jsonParser = bodyParser.json()

function listAxios(listData){
  let result = []
  listData.forEach((el, index) => {
    let url
    if(el.t === 1){
      url = map[el.v].url
    } else {
      url = map[el.v].url + el.e
    }
    if (url) {
      result.push(axios.get(url).then((res) => { return {
        ok: true, value: res.data, req: el
      }}).catch(() => { return {
        ok: false, value: [], req: el
      }}))
    }
  });
  return result
}


router.post('/get', jsonParser ,(req, res) => {
  if(!req.body) res.sendStatus(400)
  let listData = req.body
  axios.all(listAxios(listData))
    .then(axios.spread((...args) => {
      res.send(args)
    }))
});

router.post('/category/new', jsonParser, (req, res, next) => {
  if (!req.body)
    return res.sendStatus(400);
  else {
    Category.create(req.body, (err, category) => {
      if (err) res.sendStatus(400)
      res.send(category)
    })
  }
});

router.get('/category/get', (req, res) => {
  Category.find({}).sort({_id: -1}).exec((err, categories) => {
    if(err) res.send(err)
    res.send(categories)
  })
});

router.put('/category/:id', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  Category.update({_id: req.body._id}, req.body, (err, category) => {
    if(err) res.sendStatus(400)
    res.send(category)
  })
})

router.get('/category/:slug', (req, res) => {
  Category.findOne({slug: req.params.slug}, (err, category) => {
    if(err) res.sendStatus(400)
    res.send(category)
  })
})


router.delete('/category/delete/:id', (req, res) => {
  Category.remove({_id: req.params.id}, (err) => {
    if(err) res.sendStatus(400)
    res.send(true)
  })
});


// Article
router.post('/article/new', jsonParser, (req, res, next) => {
  if (!req.body)
    return res.sendStatus(400);
  else {
    req.body.categories = req.body.categories.map(function (el) {
      return el.slug
    })
    Article.create(req.body, (err, article) => {
      if (err) res.sendStatus(400)
      res.send(article)
    })
  }
});

router.get('/article/get', (req, res) => {
  Article.find({}).sort({_id: -1}).exec((err, articles) => {
    if(err) res.send(err)
    res.send(articles)
  })
});

router.get('/article/:id', (req, res) => {
  Article.aggregate([
    {
      $match: {_id: req.params.id}
    },
    {
      $limit: 1
    },
    {
      $lookup: {
        from: 'category',
        localField: 'categories',
        foreignField: '_id',
        as: 'categories'
      }
    }
  ], (err, data) => {
    if(err || data.length < 1){
      res.sendStatus(400)
    } else {
      res.send(data)
    }
  })
})

router.get('/articlesByCategory/:slug', (req, res) => {
  Article.aggregate([
    {
      $match: {categories: req.params.slug}
    },
    {
      $limit: 1
    },
    {
      $lookup: {
        from: 'category',
        localField: 'categories',
        foreignField: 'slug',
        as: 'categories'
      }
    }
  ], (err, data) => {
    if(err){
      res.sendStatus(400)
    } else {
      res.send(data)
    }
  })
})

router.put('/article/:id', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)
  req.body.categories = req.body.categories.map(function(el){
    return el._id
  })
  Article.update({_id: req.body._id}, req.body, (err, article) => {
    if(err) res.sendStatus(400)
    res.send(article)
  })
})

router.get('/articlesForHome', (req, res) => {
  Article.aggregate([
    {
      $match: {}
    },
    {
      $limit: 12
    },
    {
      $lookup: {
        from: 'category',
        localField: 'categories',
        foreignField: '_id',
        as: 'categories'
      }
    }
    ], (err, data) => {
    res.send(data)
  })
})


router.get('/hotArticles', (req, res) => {
  Article.aggregate([
    {
      $match: {}
    },
    {
      $sort: {
        view: -1
      }
    },
    {
      $limit: 5
    },
    {
      $lookup: {
        from: 'category',
        localField: 'categories',
        foreignField: '_id',
        as: 'categories'
      }
    }
  ], (err, data) => {
    res.send(data)
  })
})

router.get('/getPost/:slug', (req, res) => {
  Article.aggregate([
    {
      $match: { slug: req.params.slug}
    },
    {
      $limit: 1
    },
    {
      $lookup: {
        from: 'category',
        localField: 'categories',
        foreignField: 'slug',
        as: 'categories'
      }
    }
  ], (err, data) => {
    if(data.length>0) {
      Article.update({ _id: data[0]._id }, { $inc: { view: 1 }}, () => {});
      res.send(data[0])
    } else {
      res.sendStatus(400)
    }
  })
})

module.exports = router;
