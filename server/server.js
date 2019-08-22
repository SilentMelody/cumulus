const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  console.log('----- hello express -----')
  res.send('hello world')
})

app.post('/login', function (req, res) {
  console.log('----- hello express -----')
  res.send(req.toString())
})

app.post('/cumulus/login', function (req, res) {
  console.log('----- hello express -----')
  console.log(req.body)
  console.log(req)
  res.send({code: 0, data: {a: 111, b: 222, body: req.body}})
})

app.listen(3001)
