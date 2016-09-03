let user = require('./user'),
    auth = require('./auth');

module.exports = (() => {
  let controllers = [
    user,
    auth
  ];

  let router = {};
  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });
  
  return router;
})();