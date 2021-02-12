const CategoriaModel = require('../model/CategoriaModel');

class CategoriaController {

async create(req, res){
    const Categoria = new CategoriaModel(req.body);
    await Categoria
          .save()
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }

  async all(req, res){
    
    await CategoriaModel.find()
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }
}
module.exports = new CategoriaController();