const { series, parallel} = require('gulp')
const gulp = require('gulp')

const { appHtml, appCSS, appJS, appIMG } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { servidor, monitorarArquivos  } = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHtml, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor, // como o servidor precisa dos dados ja carregados, ele fica no final e em serie => regra de ouro: oq tiver dependencia vai em serie, q oq n tiver vai em paralelo
    monitorarArquivos
) 