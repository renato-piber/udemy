const { parallel, src, dest, } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const { servicesVersion } = require('typescript')

function transformacaoCSS() {
    return  src('src/sass/index.scss') // como o arquivo index tem a referencia pros demais arquivos, basta referenciar ele aqui
        .pipe(sass().on('error', sass.logError)) // aqui ja pega o sass e converte pra css
        .pipe(uglifycss({"uglyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(dest('build/css'))
}

function copiarHtml() {
    return src('src/index.html')
        .pipe(dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarHtml)