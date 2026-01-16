// nao é um servidor final, é apenas um servidor voltado a automatizar o gulp

const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')
//const { appHtml } = require('./app.js') // sem ./ o node acha que é um pacote instalado, não um arquivo local. essa forma é importando a task appHtml ao inves de nomea-la. isso é meio redundante, ja que essa task ja esta armazenada na "lista de tasks" do gulp
function servidor() {

    return gulp.src('build')
        .pipe(webserver({ 
            port: 8080,
            open: true,
            livereload: true // faz com que a pagina seja atualizada apos as alteracoes de arquivos feita pelo watch
        }))
}

function monitorarArquivos(cb) {
    // watch('src/**/*.html', gulp.series(appHtml)) // observa as pastas de arquivos e, caso tenha alguma mudanca, ele chama as tasks que gerenciam esses tipos de arquivos e recarrega a pagina
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}