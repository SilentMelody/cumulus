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
let connection = mysql.createConnection(dbConfig)
connection.on('error', function(err) {
    console.log('mysql connection error ==> ', err.code, err.message);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.log('db error执行重连:' + err.message);
        connection = mysql.createConnection(dbConfig)
    } else {
        console.log('其他异常 ====> ' + err.message);
    }
});

app.use((req, res, next) => {
    console.log('req ====>', req.path)
    next()
})
app.use(history())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../static')))

bindUserController(app, connection)
bindNoteController(app, connection)
bindFileController(app, connection)

app.listen(80)
