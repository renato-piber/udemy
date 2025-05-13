const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (_, dado) => resolve(dado.toString()))
    }
)}

lerArquivo(caminho)
    .then(console.log)