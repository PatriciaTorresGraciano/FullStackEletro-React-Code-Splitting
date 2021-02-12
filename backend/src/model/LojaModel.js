const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const LojaSchema = new Schema({
  cidade: {type: String},
  endereco: {type: String},
  complemento: {type: String},
  bairro: {type: String},
  telefone: {type: String}
});

module.exports = mongoose.model('Loja', LojaSchema);