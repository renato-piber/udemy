const gulp = require('gulp')
const { series, parallel } = require('gulp') // usando destructuring
//const series = gulp.series

// o gulp sempre trabalha com funcoes (tasks)

const antes1 = cb => {
    console.log("Tarefa Antes 1")
    return cb()
}

const antes2 = cb => {
    console.log("Tarefa Antes 2")
    return cb()
}

function copiar(cb) { // usaremos a callback para notificar o gulp q determinada tarefa foi finalizada (o proprio gulp envia essa cb)
    gulp.src([ // quais arquivos de entrada serao utilizados
        // 'pastaA/arquivo1.txt', 
        // 'pastaA/arquivo2.txt'
        'pastaA/**/*.txt' // => qualquer arquivo com .txt sera copiado para a pasta B
    ])
        .pipe(gulp.dest('pastaB')) // usar ou aplicar transformacoes ao arquivos. elas podem ser sequenciadas => pipe line. Aqui esta pedindo para que ele coloque esses arquivos no destino determinado
    return cb()
}

const fim = cb => {
    console.log("Tarefa Fim")
    return cb()
}

// o gulp precisa de um gulpfile pra iniciar => dps é so digitar gulp no cmd
// o series executa as tasks em sequencia/serie (de forma sincrona)
module.exports.default = series(
    parallel(antes1, antes2), // aqui executa em paralelo
    copiar,
    fim) // o gulp precisa de uma funcao default como "porta de entrada" para comecar a operar