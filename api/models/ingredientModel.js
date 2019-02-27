'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the ingredient name'
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Ingredients', IngredientSchema);