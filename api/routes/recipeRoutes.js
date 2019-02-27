'use strict';
module.exports = function (app) {
  var recipeList = require('../controllers/recipeController');

  app.route('/recipe')
    .get(recipeList.listRecipes)
    .post(recipeList.createRecipe);


  app.route('/recipe/:id')
    .put(recipeList.updateRecipe)
    .delete(recipeList.deleteRecipe);
};