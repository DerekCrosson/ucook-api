'use strict';
var mongoose = require('mongoose'),
  Recipes = mongoose.model('Recipes');

exports.listRecipes = function (req, res) {
  Recipes.find({}, function (err, recipes) {
    if (err)
      res.send(err);
    res.json(recipes);
  });
};

exports.createRecipe = function (req, res) {
  if (req.body && req.body.ingredients) {
    req.body.ingredients = req.body.ingredients.map(i => ({ name: i }));;
  }
  var newRecipe = new Recipes(req.body);
  newRecipe.save(function (err, recipe) {
    if (err)
      res.send(err);
    res.json(recipe);
  });
};

exports.updateRecipe = function (req, res) {
  Recipes.findOneAndUpdate({ _id: req.params.recipeId }, req.body, { new: true }, function (err, recipe) {
    if (err)
      res.send(err);
    res.json(recipe);
  });
};

exports.deleteRecipe = function (req, res) {
  Recipes.remove({
    _id: req.params.id
  }, function (err, recipe) {
    if (err)
      res.send(err);
    res.json({ message: 'Recipe successfully deleted' });
  });
};