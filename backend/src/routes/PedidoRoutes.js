const express = require('express');
const router = express.Router();

const PedidoController = require('../controller/PedidoController');


router.post('/', PedidoController.create);
router.get('/', PedidoController.all);


module.exports = router;