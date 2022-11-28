const UserName = '(usuario)'
const Password = '(password)'
const DataBase = 'DBProjectMotos'
//Se puede mejorar con variables de torno

const stringConnection = `mongodb+srv://${UserName}:${Password}@clustermisiontic.e9acyqc.mongodb.net/${DataBase}?retryWrites=true&w=majority`

module.exports = {stringConnection}