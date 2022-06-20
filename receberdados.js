// ROTAS
const express = require('express')
const app = express();
const Sequelize = require('sequelize')


const handlebars = require('express-handlebars')


// config
    // template engine
app.engine('handlebars', handlebars.engine({defaultlayout: 'main'})) // main é o template padrão da aplicação
app.set('view engine', 'handlebars') //= usar ele como template
// Criar pasta views no projeto
// conectando com o mysql
const sequelize = new Sequelize('formulario-matheus', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})
// rota

    app.get('/cad', function(req, res){
        res.render('form.handlebars')
    })
    // o post não acessa pela url e é usado quando o form é post
    app.post('/dados', function(req, res){
        res.send('funciona')
    })
// sempre na ultima linha
app.listen(5500, function(){
    console.log('Servidor ativado no: http://localhost:5500')
})
// localhost:5500