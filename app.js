const Sequelize = require('sequelize')
const sequelize = new Sequelize('formulario-matheus', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})

const posta = sequelize.define('posts', {
    email: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.TEXT
    }
})

// INSERIR ITENS NO CAMPO
/*posta.create({
    email: "matheusvictorhenrique@gmail.com",
    senha: "tufofinha15"
})*/


//posta.sync({force: true}) = POSTAR TABELAS



// CRIAR TABELAS
// Usuário
/*const Usuario = sequelize.define('usuario', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    Email:{
        type: Sequelize.STRING
    }
}) 

Usuario.sync({force: true})*/