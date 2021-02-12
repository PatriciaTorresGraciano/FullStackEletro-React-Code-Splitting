const ProdutoModel = require('../model/ProdutoModel');

class ProdutoController {

async create(req, res){
    const produto = new ProdutoModel(req.body);
    await produto
          .save()
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }

  async all(req, res){
    
    await ProdutoModel.find()
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }
}
module.exports = new ProdutoController();