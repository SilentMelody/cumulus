module.exports = (app, connection) => {
  const userService = require('../service/user')(connection)
  app.post('/cumulus/login', userService.login)
}
