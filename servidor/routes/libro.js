const express = require ('express');
const router = express.Router();
const libroController = require('../controllers/libroController');


// api/libros
router.post('/', libroController.crearLibro);
router.get('/', libroController.obtenerLibros);
router.put('/:id', libroController.actualizarLibro);
router.get('/:id', libroController.obtenerLibro);
router.delete('/:id', libroController.eliminarLibro);

module.exports = router;