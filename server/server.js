const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const mysql = require('mysql')
const dbConfig = require('./dbConfig')
const history = require('connect-history-api-fallback')

const bindUserController = require('./controller/user')
const bindNoteController = require('./controller/note')
const bindFileController = require('./controller/file')
const connection = mysql.createConnection(dbConfig)

app.use((req, res, next) => {
    console.log('req ====>', req.path)
    next()
})
app.use(history())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../dist')))

bindUserController(app, connection)
bindNoteController(app, connection)
bindFileController(app, connection)

app.listen(80)
