module.exports = (connection) => {
  return {
    selectAll: (req, res) => {
      const sql = `SELECT * FROM note ORDER BY id ASC`
      connection.query(sql, function(error, results, fields) {
        if (error) {
          console.log(error)
        }
        console.log(results)
        // results = JSON.stringify(results)
        res.send({code: 0, data: {body: results}})
      })
    },
    selectClassify: (req, res) => {
      const sql = `SELECT * FROM classify ORDER BY level ASC`
      connection.query(sql, function(error, results, fields) {
        if (error) {
          console.log(error)
        }
        console.log(results)
        // results = JSON.stringify(results)
        res.send({code: 0, data: {body: results}})
      })
    },
    add: (req, res) => {
      const {title, text, classifyId} = req.body
      const sql = `INSERT INTO note ( title, text, date, classify_id ) VALUES ( '${title}', '${text}', '2019-10-12 11:25:09', ${classifyId} );`
      connection.query(sql, function(error, results, fields) {
        if (error) {
          console.log(error)
        }
        console.log(results)
        // results = JSON.stringify(results)
        res.send({code: 0, data: {body: 'success'}})
      })
    }
  }
}
