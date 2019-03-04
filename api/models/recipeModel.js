'use strict'
var mongoose = require('mongoose'),
    IngredientSchema = require('./schemas/ingredientSchema');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the recipe name'
  },
  imgUrl: {
    type: String
  },
  ingredients: {
    type: [IngredientSchema]
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