const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const PedidoSchema = new Schema({
  nome_cliente: {type: String},
  endereco: {type: String},
  telefone: {type: String},
  valor_unitario: {type: Number},
  quantidade: {type: Number},
  valor_total: {type: Number},
  categoria_fk: [{ type: Schema.Types.ObjectId, ref: 'Categoria' }],
  produto_fk: [{ type: Schema.Types.ObjectId, ref: 'Produto' }] 

});


module.exports = mongoose.model('Pedido', PedidoSchema);
