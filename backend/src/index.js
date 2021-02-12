const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());


const ComentarioRoutes = require('./routes/ComentarioRoutes');
server.use('/comentarios', ComentarioRoutes);


const ProdutoRoutes = require('./routes/ProdutoRoutes');
server.use('/produtos', ProdutoRoutes);

const LojaRoutes = require('./routes/LojaRoutes');
server.use('/lojas', LojaRoutes);

const CategoriaRoutes = require('./routes/CategoriaRoutes');
server.use('/categorias', CategoriaRoutes);

const PedidoRoutes = require('./routes/PedidoRoutes');
server.use('/pedidos', PedidoRoutes);

server.listen(5000, () => {
  console.log('Servidor Rodando !');
});