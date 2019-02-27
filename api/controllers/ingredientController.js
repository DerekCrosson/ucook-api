'use strict';
var mongoose = require('mongoose'),
  Ingredients = mongoose.model('Ingredients');

exports.listIngredients = function (req, res) {
  Ingredients.find({}, function (err, ingredients) {
    if (err)
      res.send(err);
    res.json(ingredients);
  });
};

exports.createIngredient = function (req, res) {
  var newIngredient = new Ingredients(req.body);
  newIngredient.save(function (err, ingredient) {
    if (err)
      res.send(err);
    res.json(ingredient);
  });
};

exports.updateIngredient = function (req, res) {
  Ingredients.findOneAndUpdate({ _id: req.params.ingredientId }, req.body, { new: true }, function (err, ingredient) {
    if (err)
      res.send(err);
    res.json(ingredient);
  });
};

exports.deleteIngredient = function (req, res) {
  Ingredients.remove({
    _id: req.params.id
  }, function (err, ingredient) {
    if (err)
      res.send(err);
    res.json({ message: 'Ingredient successfully deleted' });
  });
};