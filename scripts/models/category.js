let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')

let CategorySchema = new Schema({
  title: {type: String,  validate: /\S+/,  require: true},
  slug: {type: String, require: true, unique: true},
  description: {type: String, require: true}
}, { collection: 'category'});

CategorySchema.plugin(autoIncrement.plugin, 'Category')

let Category = mongoose.model('Category', CategorySchema)

module.exports = Category
