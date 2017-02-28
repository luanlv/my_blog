let express    = require('express')
let app        = express()
let router = express.Router()
var path = require('path')
var formidable = require('formidable')
var fs = require('fs')
const mongoose = require('mongoose')
const Image = mongoose.model('Image')

function randomString(length) {
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

router.post('/upload', function(req, res){
  console.log("image upload route !!")
  // create an incoming form object
  var form = new formidable.IncomingForm();
  var uid = randomString(10)
  var filename
  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/images/');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    filename = uid + '-' + file.name
    fs.rename(file.path, path.join(form.uploadDir, filename));
  });

  // log any errors that occur
  form.on('error', function(err) {
    res.sendStatus(400)
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    Image.create({uid: uid, path: filename}, (err, image) => {
      if (err) res.sendStatus(400)
      res.send(image);
    })
  });

  // parse the incoming request containing the form data
  form.parse(req);

});

router.use(express.static(__dirname + '/images'));

router.get('/:path', (req, res, next) => {
  Image.findOne({uid: req.params.path.split('-')[0]}, (err, image) => {
    if (err) res.send('Not found!')
    if(image) {
      res.redirect('/image/' + image.path)
    } else {
      res.send('Not found!')
    }
  })
})

router.get('/get/:page', (req, res, next) => {
  Image.find({}).limit( 10 )
    .sort( 'createAt' ).exec( (err, imgs) => {
      if(err) res.sendStatus(400)
      res.send(imgs)
    })
})

module.exports = router;
