const gulp = require('gulp')
const { series, src, dest } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    // é possivel executar apenas a funcao
    return src('src/**/*.js')
        .pipe(babel({ // o babel transforma o codigo para um codigo mais compativel com os navegadores
            comments: false, // arquivos de comentario n seram mandados para o arquivo final
            presets: ["env"] // pega a versao mais moderna do js e converte para a versao mais antiga => hj em dia é assim: presets: ["@babel/preset-env"]\
        }))
        .pipe(uglify()) // vai converter o codigo para ser minificado
        .on('error', err => console.log(err)) // trata eventos que ocorrem durante o processamento 
        .pipe(concat("codigo.min.js")) // cria um arquivo com tudo junto
        .pipe(dest("build"))
}

function fim(cb) {
    console.log('Fim!!!')
    return cb() 
}

exports.default = series(transformacaoJS, fim)