import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
    if (!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) {
    if (!parent) parent = 'body' // caso o parent venha vazio, vamos setá-lo para procurar no body inteiro
    $(parent).find('[wm-include]').each(function (i, e) { // o "e" é tag pura do HTML
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include') // remove o atributo para evitar injecoes redundantes

                loadHtmlSuccessCallbacks.forEach(callback => callback(data)) // ajusta o timing entre a funcao dos botoes e a existencia dos elementos a serem alterados por ela
                loadIncludes(e) // aqui fazemos uma funcao recursiva para procurar dentro de cada elemento todos os elementos possiveis com o atributo "wm-include"
            }
        })
    })
}


loadIncludes()