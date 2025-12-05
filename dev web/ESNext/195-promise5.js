// tratamento de erros em promises (usando o reject)

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{
            con.log('tempo')
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        }
        catch (e) {
            reject(e) // se der erro no try, o catch vai pegar o erro e chamar o primeiro reject
        }
    })
}
funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log('Erro: ' + err) // tratamento de erro, parametro de excecao para esse then. Isso faz com que o catch nao seja chamado
    )
    .then(() => console.log('Quase no Fim!')) // esse then é chamado independente do resultado do anterior
    .catch(erro => { // uma solucao é utilizar o catch SEMPRE NO FINAL, que é chamado pelo reject
        console.log('Erro: ' + erro)
    })
    .then(() => console.log('Fim!'))