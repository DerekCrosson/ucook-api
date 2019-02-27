'use strict';
var mongoose = require('mongoose'),
  ShoppingList = mongoose.model('ShoppingList');

exports.shoppingList = function (req, res) {
  ShoppingList.find({}, function (err, shoppingList) {
    if (err)
      res.send(err);
    res.json(shoppingList);
  });
};

exports.createShoppingListItem = function (req, res) {
  var newIngredient = new ShoppingList(req.body);
  newIngredient.save(function (err, ingredient) {
    if (err)
      res.send(err);
    res.json(ingredient);
  });
};

exports.updateShoppingListItem = function (req, res) {
  ShoppingList.findOneAndUpdate({ _id: req.params.ingredientId }, req.body, { new: true }, function (err, ingredient) {
    if (err)
      res.send(err);
    res.json(ingredient);
  });
};

exports.deleteShoppingListItem = function (req, res) {
  ShoppingList.remove({
    _id: req.params.id
  }, function (err, ingredient) {
    if (err)
      res.send(err);
    res.json({ message: 'Shopping list item successfully deleted' });
  });
};