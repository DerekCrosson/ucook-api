'use strict';
module.exports = function (app) {
  var recipe = require('../controllers/recipeController');

  // app.route('/recipe')
  //   .get(recipeList.listRecipes)
  //   .post(recipeList.createRecipe);

  app.route('/recipe/:id')
    .get(recipe.getRecipeInfo)
    //.put(recipeList.updateRecipe)
    //.delete(recipeList.deleteRecipe);

  app.route('/recipeByIngredients')
    .get(recipe.getByIngredients)
};