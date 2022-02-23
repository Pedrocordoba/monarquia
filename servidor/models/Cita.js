const mongoose = require('mongoose');

const CitaSchema = mongoose.Schema({

    tipo_servicio: {
        type: String,
        required: true
    },
    nombre_cliente: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    barbero: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Cita', CitaSchema);