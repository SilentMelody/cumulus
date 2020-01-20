module.exports = (app, getConnection) => {
  const userService = require('../service/user')(getConnection)
  app.post('/cumulus/login', userService.login)
}
