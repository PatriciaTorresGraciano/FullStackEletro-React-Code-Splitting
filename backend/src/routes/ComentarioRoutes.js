const express = require('express');
const router = express.Router();

const ComentarioController = require('../controller/ComentarioController');


router.post('/', ComentarioController.create);
router.get('/', ComentarioController.all);


module.exports = router;