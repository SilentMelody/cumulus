module.exports = (app, connection) => {
  const noteService = require('../service/note')(connection)
  app.get('/cumulus/note/selectAll', noteService.selectAll)
  app.get('/cumulus/note/selectClassify', noteService.selectClassify)
  app.post('/cumulus/note/add', noteService.add)
}
