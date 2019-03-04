var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the ingredient name'
    },
    id: {
        type: Number,
        required: 'Enter the ingredient id'
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = IngredientSchema;