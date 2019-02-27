var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Ingredient = require('./api/models/ingredientModel'),
  ShoppingList = require('./api/models/shoppingListModel'),
  Recipes = require('./api/models/recipeModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var ingredientRoutes = require('./api/routes/ingredientRoutes');
var shoppingListRoutes = require('./api/routes/shoppingListRoutes');
var recipeRoutes = require('./api/routes/recipeRoutes');
ingredientRoutes(app);
shoppingListRoutes(app);
recipeRoutes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('uCook RESTful API server started on: ' + port);
