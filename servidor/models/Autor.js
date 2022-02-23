const mongoose = require('mongoose');

const AutorSchema = mongoose.Schema({

    cedula: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    nacionalidad: {
        type: String,
        required: true
    },
    libro: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Autor', AutorSchema);