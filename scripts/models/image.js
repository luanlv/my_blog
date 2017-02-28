let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')

let ImageSchema = new Schema({
  uid: {type: String, validate: /\S+/, unique: true},
  path: {type: String, validate: /\S+/, unique: true},
  createAt: {type: Date, default: Date.now}
}, { collection: 'image'});

ImageSchema.plugin(autoIncrement.plugin, 'Image')

let Image = mongoose.model('Image', ImageSchema)

module.exports = Image
