const LojaModel = require('../model/LojaModel');

class LojaController {

async create(req, res){
    const Loja = new LojaModel(req.body);
    await Loja
          .save()
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }

  async all(req, res){
    
    await LojaModel.find()
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }
}
module.exports = new LojaController();