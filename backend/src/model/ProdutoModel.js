const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ProdutoSchema = new Schema({
  categoria: {type: String},
  descricao: {type: String},
  preco: {type: Number},
  preco_venda: {type: Number},
  imagem: {type: String},
  nome_produto: {type: String},

});

module.exports = mongoose.model('Produtos', ProdutoSchema)