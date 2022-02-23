const mongoose = require('mongoose');

const LibroSchema = mongoose.Schema({
    ISBN: {
        type: String,
        required: true
    },
    editorial: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    fecha_Publicacion: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Libro', LibroSchema);