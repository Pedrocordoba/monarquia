const Cita = require("../models/Cita");

exports.crearCita = async (req, res) => {

    try {
        let cita;

        // Creamos nuestro Cita
        cita = new Cita(req.body);

        await cita.save();
        res.send(cita);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerCitas = async (req, res) => {

    try {

        const citas = await Cita.find();
        res.json(citas)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarCita = async (req, res) => {

    try {
        const { tipo_servicio, nombre_cliente,cedula, hora, fecha, barbero } = req.body;
        let cita = await Cita.findById(req.params.id);

        if(!cita) {
            res.status(404).json({ msg: 'No existe la cita' })
        }

        cita.tipo_servicio = tipo_servicio;
        cita.nombre_cliente = nombre_cliente;
        cita.cedula = cedula;
        cita.hora = hora;
        cita.fecha = fecha;
        cita.barbero = barbero;

        cita = await Cita.findOneAndUpdate({ _id: req.params.id },cita, { new: true} )
        res.json(cita);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerCita = async (req, res) => {

    try {
        let cita = await Cita.findById(req.params.id);

        if(!cita) {
            res.status(404).json({ msg: 'No existe la cita' })
        }
       
        res.json(cita);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCita = async (req, res) => {

    try {
        let cita = await Cita.findById(req.params.id);

        if(!cita) {
            res.status(404).json({ msg: 'No existe la Cita' })
        }
       
        await Cita.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'cita eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}