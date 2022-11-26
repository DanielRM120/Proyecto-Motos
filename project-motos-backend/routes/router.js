const express = require('express')
const router = express.Router()
const {createUser, editUser, deleteUser, getAllUsers, userLogin} = require('../controllers/UserController')

//Ruta de Prueba
//req(request) es la peticion de frontend a backend y res(response) es la respuesta de backend a frontend
router.get("/", ( req , res ) => {
    res.send('Hello world!!! My First API Rest')
})

//Operaciones CRUD Usuario

//Crear Usuario - Create EndPoint
router.post('/createUser', createUser)
//Leer Usuario - Read - EndPoint
router.get('/getAllUsers', getAllUsers)
//Editar Usuario - Update - End Point
router.put('/updateUser/:id', editUser)
//Eliminar Usuario - Delete - EndPoint
router.delete('/deleteUser/:id', deleteUser)

//Ruta para el Login
router.get('/login', userLogin)

module.exports = router