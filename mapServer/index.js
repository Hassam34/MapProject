let express = require('express')
let apiRoutes = require('./api-routes')
let bodyParserr = require('body-parser')
let mongoose = require('mongoose')

let app = express()

app.use(bodyParserr.urlencoded({
    extended: true
}))
app.use(bodyParserr.json())

mongoose.connect('mongodb://localhost/mapServer', {
    useNewUrlParser: true
})

var db = mongoose.connection

if (!db) {
    console.log('Not connected to mongodb')
}
else {
    console.log('Connected to mongodb')
}


app.use('/api', apiRoutes)

var port = process.env.PORT || 8080

app.get('/', (req, res) => res.send('Welcome to Map Server'));

app.listen(port, function () {
    console.log('Server is running on Port: ', port)
})