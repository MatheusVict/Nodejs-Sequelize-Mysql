// ROTAS
var express = require('express');
const Post = require('./models/Post');
const at = express();

at.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
})

at.get('/cadastro', function(req, res){
    res.sendFile(__dirname + "/cadastro.html")
})

// retorna um json
at.get('/oi', function(req, res){
    res.send(req.params)
})
at.post('/dados', function(req, res){
    // criar usuário pelo form chamando o modulo post que conetm o sequilize
    Post.create({
        nome: req.params.nome,
        senha: req.params.senha
    }).then(function(){
        res.redirect('/') // redirect é pra onde você quer ir dps q enviar o form
    }).catch(function(erro){
        res.send('ERRO: '+ erro)
    })// .then pra capturar o sucesso e p .catch pra capturar o erro
})

// os parametros digitado no link
at.get('/aeh/:nome/:sobrenome', function(req, res){
    res.send('oi '+ req.params.nome +'  seu sobre nome eh: '+req.params.sobrenome);
    // não use mais de 1 send

})

// sempre na ultima linha
at.listen(5500, function(){
    console.log('Servidor ativado no: http://localhost:5500')
})
// localhost:5500