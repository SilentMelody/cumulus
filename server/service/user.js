module.exports = (connection) => {
  return {
    login: (req, res) => {

      const sql = `SELECT * FROM user WHERE user_name = "${req.body.u_name}"`
      connection.query(sql, function(error, results, fields) {
        if (error) {
          console.log(error)
        }
        console.log(fields)
        // results = JSON.stringify(results)
        res.send({code: 0, data: {a: 111, b: 222, body: results[0]}})
      })

    }
  }
}
