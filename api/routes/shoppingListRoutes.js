'use strict';
module.exports = function (app) {
  var shoppingList = require('../controllers/shoppingListController');

  app.route('/shoppingList')
    .get(shoppingList.shoppingList)
    .post(shoppingList.createShoppingListItem);


  app.route('/shoppingList/:id')
    .put(shoppingList.updateShoppingListItem)
    .delete(shoppingList.deleteShoppingListItem);
};