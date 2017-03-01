let express    = require('express')
let app        = express()
let router = express.Router()


router.get('/', (req, res, next) => {
  res.sendFile('views/admin.html', {root: __dirname })
});

module.exports = router;
