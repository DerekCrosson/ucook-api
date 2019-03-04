'use strict'
var mongoose = require('mongoose'),
    IngredientSchema = require('./schemas/ingredientSchema');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  ingredients: {
    type: [IngredientSchema],
    required: 'Enter the ingredient name'
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);