const express = require('express');
const router = express.Router();

const CategoriaController = require('../controller/CategoriaController');


router.post('/', CategoriaController.create);
router.get('/', CategoriaController.all);


module.exports = router;