const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
  nome: {type: String},
});

module.exports = mongoose.model('Categoria', CategoriaSchema);