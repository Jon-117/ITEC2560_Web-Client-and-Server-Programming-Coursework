let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next) {
        res.json({'message': 'Greetings from the center of the universe!'})
        })

module.exports = router