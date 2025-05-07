const porta = 3003 // as portas sao caminhos destinados a cada processo, para que as aplicacoes possam se comunicar entre si

const express = require('express') // importa o modulo express
const app = express() // cria uma instancia do express, a variavel app agora representa uma instancia do meu servidor
const bodyParser = require('body-parser') // importa o modulo body-parser, que analisa o corpo da requisição

const path = require('path') // importa o modulo path, que fornece utilitários para trabalhar com caminhos de arquivos e diretórios
const caminho = path.join(__dirname, '../banco_deDados') 
const bancoDeDados = require(caminho) // importa o modulo banco_deDados

app.use(bodyParser.urlencoded({ extended: true })) // usa o middleware body-parser para analisar o corpo da requisição, permitindo o envio de dados em formato URL-encoded

app.get('/produtos', (req, res, next) => { 
    console.log('middleware 1...')
    next() // executa o próximo middleware registrado para a mesma rota e método
    
})

app.get('/produtos', (req, res, next) => { 
    res.send(bancoDeDados.getProdutos()) // envia uma resposta em formato JSON
    
})

// o :id é um parâmetro de rota, pd ser um numero
app.get('/produtos/:id', (req, res, next) => { // cria uma rota para obter um produto específico
    res.send(bancoDeDados.getProduto(req.params.id)) // envia o produto correspondente ao id fornecido na URL
    // req.params.id é e local onde o express armazena os parâmetros de rota, nesse caso o id do produto
})

app.post('/produtos', (req, res, next) => { // cria uma rota para adicionar um novo produto
    const produto = bancoDeDados.salvarProduto({ // chama a função salvarProduto do banco de dados e passa o produto recebido na requisição
        nome: req.body.nome, // parametros do corpo da requisicao
        preco: req.body.preco
    })
    res.send(produto) // envia o produto, em json, adicionado como resposta
})

app.put('/produtos/:id', (req, res, next) => { // cria uma rota para atualizar um produto existente
    const produto = bancoDeDados.salvarProduto({ // chama a função salvarProduto do banco de dados e passa o produto recebido na requisição
        id: req.params.id, // id do produto a ser atualizado
        nome: req.body.nome, // parametros do corpo da requisicao
        preco: req.body.preco
    })
    res.send(produto) // envia o produto atualizado como resposta
})

app.delete('/produtos/:id', (req, res, next) => { // cria uma rota para atualizar um produto existente
    const produto = bancoDeDados.excluirProduto(req.params.id) // chama a função excluirProduto do banco de dados e passa o id do produto a ser excluido
    res.send(produto) // json
})

app.listen(porta, () => { // inicia o servidor na porta 3003
    console.log(`Servidor executando na porta ${porta}.`) // imprime uma mensagem no console informando que o servidor esta rodando
})