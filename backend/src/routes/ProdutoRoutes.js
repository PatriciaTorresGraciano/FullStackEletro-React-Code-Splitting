const express = require('express');
const router = express.Router();

const ProdutoController = require('../controller/ProdutoController');

router.post('/', ProdutoController.create);
router.get('/', ProdutoController.all);

module.exports = router;