let express = require('express')
let db = require('../models')
const {response} = require("express"); // when requiring a directory, it will automatically fetch the index.js file from that directory
let Student = db.Student

let router = express.Router()

router.get('/students', function (req, res, next) {
    Student.findAll({order:['starID', 'name', 'presence']}).then(students => {
        return res.json(students)
    }).catch( err => next(err))
})

router.post('/students', function (req, res, next){
    Student.create(req.body).then( data => {
            return res.status(201).send('ok') // always send a response, ALWAYS!

        // req.body contains any JSON that the Vue client has sent

        // The standard for OK responses is a value in the 200s
            // The convention for OK response when POSTING is 201

        }).catch( err => {
            if (err instanceof db.Sequelize.ValidationError ) {
                // respond with 400 Bad Request error code, include error messages
                let messages = err.errors.map (e => e.message)
                return res.status(400).json(messages)
            }
            // otherwise something unexpected has occurred. (server error? code 500~)
        return next(err)
    })
})

// Edit student
router.patch('/students/:id',function (req, res, next){
    let studentID = req.params.id // assign id
    let updatedStudent = req.body // just like in router.post, we'll use the req.body for the newly updated info
    Student.update(updatedStudent, {where: {id: studentID}}) // use update method with updateStudent method defined in
        // App.vue and a modified database query structure (rather than "WHERE id IS studentID" because variable and
        // the update syntax)
        .then((rowsModified) => {
            let numberOfRowsModified = rowsModified[0]
            if (numberOfRowsModified === 1) { // ONLY 1 ROW - You're good.
                return res.send('ok')
            }
            else { // No rows - NOT FOUND
                return res.status(404).json(['Student not found with that id'])
            }
        }).catch( err => {
            // if validation error, say bad request
        if (err instanceof db.Sequelize.ValidationError) { // MODIFICATION VIOLATES RESTRAINTS (ie, modify to no-name)

            // respond with 400 Bad Request error code, include error messages
            let messages = err.errors.map (e => e.message)
            return res.status(400).json(messages)
        }
        // otherwise something unexpected has occurred. (server error? code ~500~ Send to error handler )
        return next(err)
    })
})

// Delete Student
router.delete('/students/:id', function (req, res, next){
    let studentID = req.params.id // assign id
    Student.destroy({where: {id: studentID}}).then((rowsDestroyed) => {
        if (rowsDestroyed === 1) {
            return res.send('ok')
        }
        else {
            return res.status(404).send('Not found')
        }

    }).catch(err => {next(err)})
})


module.exports = router