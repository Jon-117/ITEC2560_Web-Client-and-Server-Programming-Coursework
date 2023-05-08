let express = require('express')
let api_routes = require('./routes/api')

// Create the web application
let app = express()

// make the app aware of and able to use JSON data
// in other words, make app able to handle JSON requests and convert that data to JavaScript.
app.use(express.json())

// enable the server to respond to the API requests.
app.use('/api', api_routes)

// run general error handler only if above api_routes doesn't work
app.use(function (req, res, next){
        // respond with not found error
        res.status(404).send("Not found")
})

app.use(function (err, req, res, next){
        console.erro(err.stack)
        res.status(500).send("Server Error")
})


// start the server
let server = app.listen(process.env.PORT || 3000, function(){
        console.log('Express is running on port ', server.address().port)
})