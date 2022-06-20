//conexão com o banco de dados
// No new Sequelize 1° o nome do banco, 2° o usuário(root), 3° a senha
const Sequelize = require('sequelize')
const sequelize = new Sequelize('curso', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})
// exportando elas
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
