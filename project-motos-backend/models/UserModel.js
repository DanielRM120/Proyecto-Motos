//para crear un modelo, necesitamos una const tipo mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

//definicion del modelo
let UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    // rol: {
    //     type: Number,
    //     default: 2
    // }
})

module.exports = mongoose.model('User',UserSchema,'Users')