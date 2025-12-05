// setTimeout(() => {
//     console.log('Executando Promise1...')

//     setTimeout(function () {
//         console.log('Executando Promise2...')

//         setTimeout(function () {
//             console.log('Executando Promise3...')

//         }, 2000)
//     }, 2000)
// }, 2000);

// evitando callback hell
function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log('Executando Promise...')
            resolve('Vishhh') // isso faz com que o then seja executado
        }, tempo)
    })
}

esperarPor().then(esperarPor).then(esperarPor)