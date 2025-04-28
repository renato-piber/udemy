const fs = require('fs'); // iremos usar o file system

// forma de navegar de forma absoluta a partir do diretorio atual
const caminho = __dirname + '/arquivo.json'; // caminho do arquivo

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8'); // le o arquivo e retorna o conteudo dele
console.log(conteudo); // imprime o conteudo do arquivo

// assincrono...
fs.readFile(caminho, 'utf-8', (erro, conteudo) => { // le o arquivo e retorna o conteudo dele
    const config = JSON.parse(conteudo); // transforma o conteudo do arquivo em um objeto
    console.log(`${config.db.host}:${config.db.port}`); // imprime o host e a porta do banco de dados
})

// lendo o arquivo sem o fs, o json ja vem como obj
const config = require('./arquivo.json'); // le o arquivo e transforma o conteudo dele em um objeto
console.log(config.db); // imprime o objeto db do arquivo

// como ler o diretorio
// __dirname representa o diretorio atual
fs.readdir(__dirname, (erro, arquivos) => { // le o diretorio e retorna os arquivos dele
    console.log('Conteudo da pasta...'); // imprime o conteudo da pasta
    console.log(arquivos); // imprime os arquivos da pasta
})