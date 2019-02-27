'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShoppingListSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the ingredient name'
  },
  ticked: {
    type: Boolean,
    default: false
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ShoppingList', ShoppingListSchema);