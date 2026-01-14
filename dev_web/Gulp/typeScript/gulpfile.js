const { series, dest } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json') // nesse arquivo estao as configuracoes para a conversao 

function transformacaoTS() {
    return tsProject.src() // aqui ele pega os caminhos
        .pipe(tsProject()) // aqui ele faz toda a conversao
        .pipe(dest('build'))
}

exports.default = series(transformacaoTS)