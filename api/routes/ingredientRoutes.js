'use strict';
module.exports = function (app) {
  var ingredientList = require('../controllers/ingredientController');

  app.route('/ingredient')
    .get(ingredientList.listIngredients)
    .post(ingredientList.createIngredient);


  app.route('/ingredient/:id')
    .put(ingredientList.updateIngredient)
    .delete(ingredientList.deleteIngredient);
};