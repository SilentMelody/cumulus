const multer  = require('multer')
// const uploadSrc = multer({ dest: 'dist/uploads/'}) // 文件储存路径

// 通过 filename 属性定制
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'static/uploads/');    // 保存的路径，备注：需要自己创建
  },
  filename: function (req, file, cb) {
    // 将保存文件名设置为时间戳
    cb(null, Date.now() + '.png');
  }
});

// 通过 storage 选项来对 上传行为 进行定制化
const upload = multer({ storage: storage })

module.exports = (app, getConnection) => {
  const noteService = require('../service/file')(getConnection)
  app.post('/cumulus/file/uploadImg', upload.single('img'), noteService.uploadImg)
}
