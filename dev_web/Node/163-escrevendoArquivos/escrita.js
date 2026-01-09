const fs = require('fs');

const produto = {
    nome: 'Celular Ultra Mega',
    preco: 4998.90,
    desconto: 0.15
}

// esse vai o conteudo que iremos persistir no arquivo
const produtoJson = JSON.stringify(produto); // transforma o objeto em um json

fs.writeFile(__dirname + '/arquivoGerado.json', produtoJson, (erro) => { // escreve o arquivo e transforma o conteudo dele em um objeto
    console.log(erro || 'Arquivo salvo!'); // imprime o erro ou a mensagem de sucesso
}) // escreve o arquivo e transforma o conteudo dele em um objeto