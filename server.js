var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Ingredient = require('./api/models/ingredientModel'),
  ShoppingList = require('./api/models/shoppingListModel'),
  Recipes = require('./api/models/recipeModel'),
  User = require('./api/models/userModel'),
  bodyParser = require('body-parser'),
  morgan = require('morgan');

app.use(morgan('tiny'));

const connectionString = process.env.MONGO_DB || 'mongodb://localhost:27017/ucook'
// mongodb+srv://admin:Kv6NZDEDfeazgNh@ucook-rdeiw.mongodb.net/ucook?retryWrites=true

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(connectionString, { useNewUrlParser: true })
  .then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
    err => { console.log(err) }
  );

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
