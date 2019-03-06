'use strict';
var mongoose = require('mongoose'),
  Recipes = mongoose.model('Recipes'),
  axios = require('axios'),
  NodeCache = require( "node-cache" ),
  config = require('../config');

const myCache = new NodeCache();

const spoon = axios.create({
  baseURL: config.spoonacularUrl,
  headers: {'X-RapidAPI-Key': config.spoonacularKey}
});

const getRecipes = async ingredients => {
  // returns recipes by ingredient and shows missing and used
  try {
    const encodeIng = encodeURIComponent(ingredients);
    return await spoon.get("/recipes/findByIngredients?number=5&ranking=1&ingredients=" + encodeIng);
  } catch(err) {
    console.error(err);
  }
};

exports.getByIngredients = async (req, res) => {
  try {
    const ingredients = req.body.ingredients || '';
    const cache = myCache.get(ingredients);
    if (cache) {
      // important cache return to limit api calls
      res.json(cache);
    }
    
    const recipesRes = await getRecipes(ingredients);
    const recipes = recipesRes.data || [];
    myCache.set(ingredients, recipes);
    res.json(recipes);
  } catch(err) {
    console.log(err)
    res.send(err)
  }
};

exports.listRecipes = function (req, res) {
  // could get user recipes as well
  Recipes.find({}, function (err, recipes) {
    if (err)
      res.send(err);
    res.json(recipes);
  });
};

exports.createRecipe = function (req, res) {
  if (req.body && req.body.ingredients) {
    req.body.ingredients = req.body.ingredients.map(i => ({ name: i }));;
  }
  var newRecipe = new Recipes(req.body);
  newRecipe.save(function (err, recipe) {
    if (err)
      res.send(err);
    res.json(recipe);
  });
};

exports.updateRecipe = function (req, res) {
  Recipes.findOneAndUpdate({ _id: req.params.recipeId }, req.body, { new: true }, function (err, recipe) {
    if (err)
      res.send(err);
    res.json(recipe);
  });
};

exports.deleteRecipe = function (req, res) {
  Recipes.remove({
    _id: req.params.id
  }, function (err, recipe) {
    if (err)
      res.send(err);
    res.json({ message: 'Recipe successfully deleted' });
  });
};