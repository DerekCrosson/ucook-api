'use strict';
module.exports = function (app) {
  var user = require('../controllers/userController');

  app.route('/user')
    .post(user.createUser);

  app.route('/user/:id/ingredient')
    .post(user.addIngredient)
    .get(user.getIngredients);
  
  app.route('/user/:id/ingredient/:ingredientId')  
    .delete(user.deleteIngredient);
};