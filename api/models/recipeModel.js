'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeIngredientSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the recipe name'
  }
});

var RecipeSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the recipe name'
  },
  imgUrl: {
    type: String
  },
  ingredients: {
    type: [RecipeIngredientSchema]
  },
  rating: {
    type: Number,
    default: 0
  },
  source: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recipes', RecipeSchema);