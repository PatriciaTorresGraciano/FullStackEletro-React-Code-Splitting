const ComentarioModel = require('../model/ComentarioModel');

class ComentarioController {

async create(req, res){
    const comentario = new ComentarioModel(req.body);
    await comentario
          .save()
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }

  async all(req, res){
    
    await ComentarioModel.find()
          .then(response => {
            return res.status(200).json(response);
          })
          .catch(error => {
            return res.status(500).json(error);
          });
  }
}
module.exports = new ComentarioController();