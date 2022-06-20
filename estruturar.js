// ROTAS
// import em constantes essas funções(handle opcional)
const express = require('express')
const app = express();
const Sequelize = require('sequelize')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Pots = require('./models/Post');
const Post = require('./models/Post');

// config
    // template engine
app.engine('handlebars', handlebars.engine({defaultlayout: 'main'})) // main é o template padrão da aplicação
app.set('view engine', 'handlebars') //= usar ele como template

// ativar o bodyparser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Criar pasta views no projeto
// conectando com o mysql
const sequelize = new Sequelize('curso', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})
// rota
    app.get('/cad', function(req, res){
        res.render('form.handlebars')
    })
    app.get('/', function(req, res){
        Post.findAll().then(function(posts){
            res.render('homepage', {posts: posts}/*{nome: "matheus", sobrenome: "victor"}*/) // essas chaves dps da homepage é pra passar qualquer dado pro front
        })
    })
    // capturar os dados
    // o post não acessa pela url e é usado quando o form é post
    app.post('/dados', function(req, res){
        // criar usuário pelo form chamando o modulo post que conetm o sequilize
        Pots.create({
            escrever: req.body.escrever,
            conetudo: req.body.conetudo
        }).then(function(){
            res.redirect('/') // redirect é pra onde você quer ir dps q enviar o form
        }).catch(function(erro){
            res.send('ERRO: '+ erro)
        })// .then pra capturar o sucesso e p .catch pra capturar o erro
    })

    app.get('/lixeira/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send('Apagado')
        }).catch(function(erro){
            res.send('ERRO: '+ erro)
        }) // função destroy para apagr dependendo do parametro escolhido
    })
    

// sempre na ultima linha
app.listen(5500, function(){
    console.log('Servidor ativado no: http://localhost:5500')
})
// localhost:5500