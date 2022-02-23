const express = require ('express');
const conectarDB = require('./config/db')
const cors = require("cors")

const app= express();

conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/citas', require('./routes/cita'))
app.use('/api/libros', require('./routes/libro'))
app.use('/api/autores', require('./routes/autor'))
app.use('/api/user', require('./routes/user'))

app.get('/', (req,res) =>{
    res.send('Hola Mundo Backend')
})

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfecto')
})