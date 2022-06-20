const db = require('./db') // pegar os arquivos na msm página

// coloca os campos e os tipos de campo q ele vai criar
const Post = db.sequelize.define('teste', {
    nome:{
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.TEXT
    }
})

//Post.sync({force: true}) //Só utliza quando for criar a tabela

// depois q criar export o modulo
module.exports = Post