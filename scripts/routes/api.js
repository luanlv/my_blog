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

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

let jsonParser = bodyParser.json()

router.get('/get', (req, res) => {

  function sendValue(listData, result){
    if(listData.length === 0){
      res.send(result)
    } else {
      let mapped = map[listData[0].slice(0,2)]
      if (mapped) {
        unirest.get(mapped.url).end((res) => {
          result[mapped.field] = {
            ok: res.ok,
            value: res.body
          }
          listData.shift()
          return sendValue(listData, result)
        })
      } else {
        listData.shift()
        return sendValue(listData, result)
      }

    }
  }

  if(req.query.v){
    let listData = req.query.v.split(',')
    let resData = {}
    sendValue(listData, resData)
  } else {
    res.sendStatus(400)
  }

});

router.post('/category/new', jsonParser, (req, res, next) => {
  if (!req.body) return res.sendStatus(400);
  Category.create(req.body, (err, category) => {
    if(err) res.sendStatus(400)
    res.send(category)
  })
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

router.delete('/category/delete/:id', (req, res) => {
  Category.remove({_id: req.params.id}, (err) => {
    if(err) res.sendStatus(400)
    res.send(true)
  })
});


// Article
router.post('/article/new', jsonParser, (req, res, next) => {
  if (!req.body) return res.sendStatus(400);
  req.body.categories = req.body.categories.map(function(el){
    return el._id
  })
  Article.create(req.body, (err, article) => {
    if(err) res.sendStatus(400)
    res.send(article)
  })
});

router.get('/article/get', (req, res) => {
  Article.find({}).sort({_id: -1}).exec((err, articles) => {
    if(err) res.send(err)
    res.send(articles)
  })
});

router.get('/article/:id', (req, res) => {
  Article.findOne({_id: req.params.id}).lean().exec((err, article) => {
    if(err) res.send(err)
    Category.find({_id: {$in: article.categories}}).exec((err, categories) => {
      // console.log(categories)
      article.categories = categories
      res.send(article)
    })
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
      $lookup: {
        from: 'category',
        localField: 'categories',
        foreignField: '_id',
        as: 'categories'
      }
    },
    {
      $limit: 12
    }
    ], (err, data) => {
    res.send(data)
  })
})

module.exports = router;
