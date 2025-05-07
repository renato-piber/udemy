// o node disponibiliza diversos objetos globais que estao a nossa disposicao, como o __dirname, __filename, process, global, module, require, exports e __filename
// tb podemos receber dados do terminal, como o process.argv, que retorna um array com os argumentos passados na linha de comando
// node 174-entradaSaida.js -a 

const anonimo = process.argv.indexOf('-a') !== -1 // verifica se o argumento -a foi passado na linha de comando, se sim, a variavel anonimo recebe true, caso contrario false
//console.log(anonimo) // imprime o valor da variavel anonimo no console

if (anonimo) { // se a variavel anonimo for verdadeira
    process.stdout.write('Fala Anonimo!\n') // standard out: escreve no console a mensagem 'Fala Anonimo!'
    process.exit() // encerra o processo atual
} else {
    process.stdout.write('Informe o seu nome:')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '') // converte o dado recebido em string e remove a quebra de linha
        process.stdout.write(`Fala ${nome}!!\n`) // escreve no console a mensagem 'Fala {nome}!!'
        process.exit() // encerra o processo atual
    }) // seria o teclado, o data funciona qnd digitamos alguma coisa e damos enter
}