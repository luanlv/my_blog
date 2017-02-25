var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')

var TagSchema = new Schema({
  slug: String,
  name: String
})

var ArticleSchema = new Schema({
  title: {type: String, required: true},
  slug: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  user: {type: Number, require: true},
  edit: [
    {
      user: {type: Number},
      editAt: {type: Date, default: Date.now},
      reason: String
    }
  ],
  content: {type: String, required: true},
  createAt: { type: Date, default: Date.now },
  publicAt: { type: Date, default: Date.now },
  categories: [Number],
  tags: { type: {
    slug: String,
    name: String
  }, default: []},
  vote : [{
    average: {type: Number, default: 0},
    total: {type: Number, default: 0},
    users: {
      type: [{
        id: Number,
        voteAt: {type: Date, default: Date.now}
      }],
      default : []
    },
  }],
  like: {
    total: {type: Number, default: 0},
    users: [
      {
        id: Number,
        likeAt: {type: Date, default: Date.now}
      }
    ]
  },
  view: {type: Number, default: 0}
}, { collection: 'article' });

ArticleSchema.statics.findByTitle = function (name, cb) {
  this.find({
    title: name
  }, cb);
}

ArticleSchema.plugin(autoIncrement.plugin, 'Article');

let Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
