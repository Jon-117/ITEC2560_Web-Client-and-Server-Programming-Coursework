let express = require('express')

let db = require('../models') // when requiring a directory, it will automatically fetch the index.js file from that directory

let Student = db.Student

let router = express.Router()

router.get('/students', function (req, resp, next) {
    Student.findAll().then(students => {
        return res.json(students)
    })
})

router.post('/students', function (req, resp, next){
    Student.create(req.body) // req.body contains any JSON that the Vue client has sent
        .then( data => {
            return res.status(201).send('ok') // always send a respnse, ALWAYS!
            /*
            The standard for OK responses is a value in the 200s
            The convention for OK response when POSTING is 201
            */
        })
})

module.exports = router