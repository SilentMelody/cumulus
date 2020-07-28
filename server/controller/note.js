module.exports = (app, getConnection) => {
  const noteService = require('../service/note')(getConnection)
  app.get('/cumulus/note/selectAll', noteService.selectAll)
  app.get('/cumulus/note/selectClassify', noteService.selectClassify)
  app.post('/cumulus/note/add', noteService.add)
}
