// uma promessa,  uma funcao assincrona que retorna uma callback se a operacao foi bem sucedida ou nao

function falarDepois(segundos, frase) {
    return new Promise((resolve, reject) => { // retorna uma funcao anonima com dois parametros, resolve e reject: que correspondem a callbacks de sucesso e erro, respectivamente
        setTimeout(() => {
            //resolve(frase) // so aceita um argumento
            reject(frase)
        }, segundos * 1000)
    })

}

falarDepois(3, 'Que legal!')
    .then(frase => frase.concat('?!?')) // recebe a resposta da promise anterior, no caso a frase
    .then(outraFrase => console.log(outraFrase)) // encadeamento de promessas, o resultado da primeira promise é passado para a segunda promise
    .catch(erro => console.log('Erro:', erro)) // se der erro, ele vai para o catch, que recebe o argumento como erro