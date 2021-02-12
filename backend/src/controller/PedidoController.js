const PedidoModel = require('../model/PedidoModel');



class PedidoController {

async create(req, res){
    const Pedido = new PedidoModel(req.body);
    await Pedido
          .save()
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }

  async all(req, res){
    
    await PedidoModel.find()
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }
}
module.exports = new PedidoController();