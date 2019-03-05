'use strict';
var mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.getIngredients = function (req, res) {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err)
      res.send(err);
    res.json(user ? user.ingredients : []);
  });
};

exports.createUser = function (req, res) {
  var newUser = new User(req.body);
  newUser.save(function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.addIngredient = function (req, res) {
  User.findOneAndUpdate(
    { _id: req.params.id }, 
    { $push: { ingredients: req.body } },
    (err, ingredient) => {
      if (err)
        res.send(err);
      res.json({ message: 'Ingredient successfully added' });
  });
};

exports.deleteIngredient = function (req, res) {
  User.update(
    { _id: req.params.id }, 
    { $pull: { ingredients: { _id: req.params.ingredientId } } },
    (err, ingredient) => {
      if (err)
        res.send(err);
      res.json({ message: 'Ingredient successfully deleted' });
  });
};