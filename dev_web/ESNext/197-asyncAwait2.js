function gerarNumeroEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

// gerarNumeroEntre(1, 5, [1, 2, 3])
//     .then(console.log)
//     .catch(console.log) // o catch vai pegar o erro do reject
//     .finally(() => console.log('Fim!')) // o finally é chamado independente do resultado da promise


async function gerarMegaSena(qtdNumeros, tentativas = 1) { // toda funcao async retorna uma promise
    try { // a forma para tratar erros em uma funcao async é usar o try/catch
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) { // faz o for percorrer o tamanho do array
            numeros.push(await gerarNumeroEntre(1, 60, numeros)) // toda funcao que retorna um promise ou é assincrona deve receber o await
        }
        return numeros // a forma para resolver uma promise é retornar o valor
    }
    catch (e) {
        if (tentativas > 10) {
            throw 'Não deu certo!'
        }
        else {
            gerarMegaSena(qtdNumeros, tentativas + 1)// se der erro, o catch vai pegar o erro e jogar pra frente
        }
    }
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log) // o catch vai pegar o erro do reject