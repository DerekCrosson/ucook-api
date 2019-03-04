'use strict';
var mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.getIngredients = function (req, res) {
  User.find({ _id: req.params.id }, (err, user) => {
    if (err)
      res.send(err);
    res.json(user.ingredients);
  });
};

exports.addIngredient = function (req, res) {
  User.findOneAndUpdate(
    { _id: req.params.id }, 
    { $push: { ingredients: req.body } },
    (err, ingredient) => {
      if (err)
        res.send(err);
      console.log(ingredient)
      res.json({ message: 'Ingredient successfully added' });
  });
};

exports.deleteIngredient = function (req, res) {
  User.update(
    { _id: req.params.id }, 
    { $pull: { _id: { _id: req.params.ingredientId } } },
    (err, ingredient) => {
      if (err)
        res.send(err);
      res.json({ message: 'Ingredient successfully deleted' });
  });
};