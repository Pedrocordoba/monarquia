const Autor = require("../models/Autor");

exports.crearAutor = async (req, res) => {

    try {
        let autor;

        // Creamos nuestro autor
        autor = new Autor(req.body);

        await autor.save();
        res.send(autor);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerAutores = async (req, res) => {

    try {

        const autores = await Autor.find();
        res.json(autores)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarAutor = async (req, res) => {

    try {
        const { cedula, nombre, nacionalidad, libro } = req.body;
        let autor = await Autor.findById(req.params.id);

        if(!autor) {
            res.status(404).json({ msg: 'No existe el autor' })
        }

        autor.cedula = cedula;
        autor.nombre = nombre;
        autor.nacionalidad = nacionalidad;
        autor.libro = libro;

        autor = await Autor.findOneAndUpdate({ _id: req.params.id },autor, { new: true} )
        res.json(autor);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerAutor = async (req, res) => {

    try {
        let autor = await Autor.findById(req.params.id);

        if(!autor) {
            res.status(404).json({ msg: 'No existe el autor' })
        }
       
        res.json(autor);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerAutorEmpleado = async (req, res) => {

    try {
        let autor = await Autor.findOne({"cedula": req.params.cedula});

        if(!autor) {
            res.status(404).json({ msg: 'No existe el autor' })
        }
       
        res.json(autor);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.eliminarAutor = async (req, res) => {

    try {
        let autor = await Autor.findById(req.params.id);

        if(!autor) {
            res.status(404).json({ msg: 'No existe el autor' })
        }
       
        await Autor.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Autor eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}