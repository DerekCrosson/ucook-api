'use strict'
var mongoose = require('mongoose'),
    IngredientSchema = require('./schemas/ingredientSchema');

module.exports = mongoose.model('Ingredients', IngredientSchema);