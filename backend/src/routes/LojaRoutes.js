const express = require('express');
const router = express.Router();

const LojaController = require('../controller/LojaController');


router.post('/', LojaController.create);
router.get('/', LojaController.all);


module.exports = router;