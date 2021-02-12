const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema({
  nome: {type: String},
  mensagem: {type: String},
  data_cadastro: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Comentario', ComentarioSchema);