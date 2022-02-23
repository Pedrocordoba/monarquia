const express = require ('express');
const router = express.Router();
const userController = require('../controllers/userController');


// api/login
router.post('/', userController.crearUser);
router.get('/:id', userController.obtenerUser);

module.exports = router;