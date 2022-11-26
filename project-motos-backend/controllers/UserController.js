const User = require('../models/UserModel')

//EndPoint para Crear Usuario
const createUser = ( req , res ) => {
    const { body } = req
    //const {firstname, lastname, email, password} = body

    const newUser = new User({
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email.toLowerCase(),
        password: body.password
    })
    
    //Guardando un usuario con el formato tipo promise
    // newUser.save()
    // el .then es el result o el resultado si sale con exito
    // .then( () => res.send( {message: 'Usuario guardado con exito'} ) )
    // .then( (result) => res.send( {message: 'Usuario guardado con exito', resp: result} ) )
    // El .cath es el error si sucede un problema con el servidor
    // .cath((err) => res.send( {message: err} ))
    
    //Guardando un usuario con el formato undefined
    // newUser.save()

    //Guardando un usuario con el async y await
    // router.post('/createUser',async ( req , res ) => {
    //     const { body } = req
    //     const {firstname, lastname, email, password} = body
    
    //     const newUser = new User({
    //         firstname: firstname,
    //         lastname: lastname,
    //         email: email,
    //         password: password
    //     })
    
    //     const result = await newUser.save()
    //     res.send(result)

    User.findOne({ email: newUser.email }, (err, userFinded) => {
        if(userFinded){
            res.send({ message : 'Usuario ya existe'})
        }else{
            
            newUser.save( (err, userStored) => {
                if(userStored){
                    res.send({
                        message: 'El usuario se ha guardado con exito',
                        status: 200
                    })
                }
                if(err){
                    res.send({
                        message: 'Error del servidor'
                    })
                }
            } )
        }
        if(err) {
            res.send({message: 'Error del servidor'})
        }
    } )
    //Guardando un usuario con el formato tipo callback

    //     // console.log(req.body)
    //     // res.send (req.body)
    //     // res.send({message: 'End Point CreateUser'})
}

//End Point para Editar/Actualizar Usuario
const editUser = (req, res) => {
    //res.send({message: 'Edit'}) Prueba del EndPoint o API
    const idToUpdate = req.params.id
    const { body } = req
    const userToUpdate = {
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email.toLowerCase(),
        password: body.password
    }

    User.findOne( {email: userToUpdate.email} , (err, userFinded) => {
        if(err){
            res.send({message:`Error del servidor: ${err}`})
        }else if (userFinded){
            if (userFinded.id !== idToUpdate){
            res.send({message: `Email ya se encuentra en uso`})
            }else{
                userIsUpdate(idToUpdate, userToUpdate, res)
            // User.findByIdAndUpdate(idToUpdate, userToUpdate, (err, userUpdated) => {
            //     if(userUpdated){
            //         res.send({message: 'Usuario actualizado'})
            //     } else if(!userUpdated){
            //         res.status(404).send({message: 'Usuario no encontrado'})
            //     }else{
            //         res.status(500).send({message: `Error del servidor ${err}`})
            //     }
            // })
        }
        }else{
            userIsUpdate(idToUpdate, userToUpdate, res)
            // User.findByIdAndUpdate(idToUpdate, userToUpdate, (err, userUpdated) => {
            //     if(userUpdated){
            //         res.send({message: 'Usuario actualizado'})
            //     } else if(!userUpdated){
            //         res.status(404).send({message: 'Usuario no encontrado'})
            //     }else{
            //         res.status(500).send({message: `Error del servidor ${err}`})
            //     }
            // })
        }
    })
}

//End Point para Eliminar un Usuario
const deleteUser = (req, res) => {
    const idToDelete = req.params.id
    User.findByIdAndRemove ({ _id : idToDelete}, (err, userDelete) => {
        if(err){
            res.send({message:'Error del servidor' + err})
        }else if(userDelete){
            res.send({message: 'Usuario eliminado'})
        }else{
            res.send({message:'Usuario no encontrado'})
        }
    })
    // res.send({message:'delete'}) Probando el api
}


// End Point para Obtener Todos los Usuarios
const getAllUsers = (req, res) => {
    User.find({}, (err, userDocs) => {
        if(err){
            res.status(500).send({message: 'Error del servidor: '+ err})
        }else if(!userDocs){
            res.status(404).send({message: 'Coleccion sin documentos'})
        }else{
            res.status(200).send({userDocs})
        }
    })
    //res.send({message: 'Obtener dato xd'})
}

const userLogin = (req, res) => {
    const idToDelete = req.params.id
    User.findById({ _id : idToDelete }, (err, userFinded) => {
        if(err){
            res.send({ message : 'Error del servidor'} + err)
        }else if(userFinded) {
            res.send({message: 'Usuario Encontrado'})
        }else{
            res.send({message:'Usuario no encontrado'})
        }
    } )
}


//funcion para mejorar el proceso de Actualizacion de Usuario
const userIsUpdate = (id, update, res) => {
    User.findByIdAndUpdate(id, update, (err, userUpdated) => {
        if(userUpdated){
            res.send({message: 'Usuario actualizado'})
        } else if(!userUpdated){
            res.status(404).send({message: 'Usuario no encontrado'})
        }else{
            res.status(500).send({message: `Error del servidor ${err}`})
        }
    })
}


module.exports = {
    createUser,
    editUser,
    deleteUser,
    getAllUsers,
    userLogin
}