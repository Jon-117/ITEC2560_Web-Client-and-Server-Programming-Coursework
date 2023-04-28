let express = require('express')
let routes = require('./routes/routes')

let app = express()

app.use('/api', routes)

let server = app.listen(process.env.PORT || 3000, function(){
        console.log('Express server running on port ', server.address().port)
})