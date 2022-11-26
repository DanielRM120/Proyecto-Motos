//crear una const de tipo express que manejara los hilos de nuestro archivo server.js
const express = require('express')
const app = express() //app va llevar todos los metodos de express
const port = 3001 //puerto a utilizar
const mongoose = require('mongoose')

//importar el modelo del usuario
//const User = require('./models/UserModel')
//const { updateMany } = require('./models/UserModel')

//importacion de la variable de conexion
const {stringConnection} = require('./db/dbConnection')

//crear la conexion hacia la BD
mongoose.connect(stringConnection)
.then(() => console.log('Conexion a MongoDB exitosa'))
.catch((err) => console.log('Error del servidor: '+err))

//creamos el parseBody (decodificacion) de las peticiones HTTP, esto quiere decir hacer legibles las peticiones que se le hacen al servidor
app.use( express.urlencoded ({extended: true}) )
app.use( express.json() )

//importacion de rutas EndPoints
const router = require('./routes/router')

//enviar la const router para que app la ejecute
app.use('/api/v1',router);
//el /api/v1 es la ruta antecesora de la /createUser (rutas de los Endpoints)

//por medio de la const app activamos la escucha de nuestro server
app.listen(port, () => {
    console.log('servidor arriba')
})
