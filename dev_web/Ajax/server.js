const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) // esse middleware serve arquivos estáticos da pasta atual. “Tudo que estiver nesta pasta pode ser acessado direto pelo navegador como se fosse um site.”
// esses bodyParsers convertem qualquer requisicao para objeto
app.use(bodyParser.urlencoded({ extended: true })) // interpreta dados vindos de formulários HTML.
app.use(bodyParser.json()) // interpreta requisições com corpo em JSON.

const multer = require('multer') // interpreta os arquivos que vem do upload do forms, é um middleware do express

const storage = multer.diskStorage({ // configura o local do armazenamento e permite editar o nome dos arquivos que serao enviados
    destination: function (req, file, callback) {
        callback(null, './upload') // o segundo parametro é o local de destino 
    },
    filename: function (req, file, callback) { // essa funcao é invocada qnd o nome do arquivo é requisitado
        callback(null, `${Date.now()}_${file.originalname}`)

    }
})

const upload = multer({ storage })// usa a configuracao do storage
    .single // espera um unico arquivo
    ('arquivo') // é o nome do input, "o campo que contem o arquivo, se chama arquivo"

app.post('/upload', (req, res) => {
    upload(req, res, err => { 
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

// aqui é necessario o bodyParser
// simulando um tratamento de dados
app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, // td que veio por upload
        id: 1
    })
})

/*
formas de receber dados no server:
req.body
req.query
req.params
*/
app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.get('/teste', (req, res) => res.send('ok'))
app.listen(8080, () => console.log('Executando...'))