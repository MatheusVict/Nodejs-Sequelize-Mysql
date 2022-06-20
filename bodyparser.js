// ROTAS
const express = require('express')
const app = express();
const Sequelize = require('sequelize')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser');
const Post = require('./models/Post');

// config
    // template engine
app.engine('handlebars', handlebars.engine({defaultlayout: 'main'})) // main é o template padrão da aplicação
app.set('view engine', 'handlebars') //= usar ele como template
// ativar o bodyparser
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())
// Criar pasta views no projeto
// conectando com o mysql
/*const sequelize = new Sequelize('formulario-matheus', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})*/
// rota

    app.get('/cad', function(req, res){
        res.sendFile(__dirname +'/cadastro.html')
    })
    // capturar os dados
    // o post não acessa pela url e é usado quando o form é post
    app.post('/dados', function(req, res){
          // req.body.NOME DO CAMPO
        Post.create({
            nome: req.body.nome,
            senha: req.body.senha
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('errado:'+erro)
        })
    })
    app.get('/',function(req, res){
        res.sendFile(__dirname + '/index.html')
    })
// sempre na ultima linha
app.listen(5500, function(){
    console.log('Servidor ativado no: http://localhost:5500')
})
// localhost:5500