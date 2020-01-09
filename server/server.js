const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const mysql = require('mysql')
const dbConfig = require('./dbConfig')
const history = require('connect-history-api-fallback')
const compression = require('compression')

const bindUserController = require('./controller/user')
const bindNoteController = require('./controller/note')
const bindFileController = require('./controller/file')

app.use((req, res, next) => {
    console.log('req ====>', req.path)
    next()
})

app.use(compression()); // 尽量在其他中间件前使用compression
app.use(history())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../static')))

const handleConnection = () => {
    let connection = mysql.createConnection(dbConfig)
    //连接错误，2秒重试
    connection.connect(function(err) {
        if (err) {
            console.log('error when connecting to db:', err)
            setTimeout(handleConnection , 2000)
        }
    })
    connection.on('error', function(err) {
        console.log('mysql connection error ==> ', err.code, err.message)
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('db error执行重连:' + err.message)
            handleConnection()
        } else {
            console.log('其他异常 ====> ' + err.message)
        }
    })
    bindUserController(app, connection)
    bindNoteController(app, connection)
    bindFileController(app, connection)
}
handleConnection()

app.listen(80)
