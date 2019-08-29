const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')
const dbConfig = require('./dbConfig')

const bindUserController = require('./controller/user')
const connection = mysql.createConnection(dbConfig)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

bindUserController(app, connection)

app.listen(3001)
