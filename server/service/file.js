module.exports = (connection) => {
  return {
    uploadImg: (req, res) => {
      let file = req.file
      console.log(file)
      res.send({code: 0, data: file.filename})
    },
  }
}
