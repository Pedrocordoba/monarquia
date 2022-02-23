const express = require ('express');
const router = express.Router();
const autorController = require('../controllers/autorController');


// api/autores
router.post('/', autorController.crearAutor);
router.get('/', autorController.obtenerAutores);
router.get('/:cedula', autorController.obtenerAutorEmpleado);
router.put('/:id', autorController.actualizarAutor);
router.get('/:id', autorController.obtenerAutor);
router.delete('/:id', autorController.eliminarAutor);

module.exports = router;