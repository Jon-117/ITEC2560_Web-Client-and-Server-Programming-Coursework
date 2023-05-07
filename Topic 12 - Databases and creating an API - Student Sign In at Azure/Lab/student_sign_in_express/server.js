let express = require('express')
let api_routes = require('./routes/api')

// Create the web application
let app = express()

// make the app aware of and able to use JSON data
// in other words, make app able to handle JSON requests and convert that data to JavaScript.
app.use(express.json())

// enable the server to respond to the API requests.
app.use('/api', api_routes)

// start the server
let server = app.listen(process.env.PORT || 3000, function(){
        console.log('Express is running on port ', server.address().port)
})