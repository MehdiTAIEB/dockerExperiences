const express = require('express')
const app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var MONGO_DB;
var DOCKER_DB = process.env.DB_PORT;

if ( DOCKER_DB ) {
  MONGO_DB = DOCKER_DB.replace( 'tcp', 'mongodb' ) + '/app';
} else {
  MONGO_DB = process.env.MONGODB;
}
mongoose.connect(MONGO_DB);


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})