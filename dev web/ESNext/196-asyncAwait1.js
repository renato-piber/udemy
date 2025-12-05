function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log('Executando Promise...')
            resolve('Vishhh') // isso faz com que o then seja executado
        }, tempo)
    })
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        }, 5000)
    })
}

function retornarValorRapido() {
    return 20
}

// transformar algo assincrono em sincrono
async function executar() {

    let valor = await retornarValorRapido() // o await faz com que o valor seja atribuido a variavel
    await esperarPor(2000)
    console.log(`Async/Await ${valor}...`)
    await esperarPor(2000)
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor(2000)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

// const v = executar() // como nao pode colocar o await fora de uma funcao async, o valor retornado é uma promise
// essa é a maneira correta de fazer
executar()
    .then(console.log) // qnd se sai do assincronismo, o jeito é usar o then

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}