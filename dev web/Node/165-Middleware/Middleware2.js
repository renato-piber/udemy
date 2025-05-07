// middleware pattern (chain of responsability)
// os projetos tem 3 partes: requisicao, resposta e o next (proximo passo)

/*
o padrao de projeto é uma solucao para um problema recorrente, mas ao implementa-lo, vc precisa ter em mente o contexto do problema (adaptar a resposta), o que pode fazer com que a solucao seja diferente do padrao.
*/

const passo1 = (ctx, nxt) => {
    ctx.value1 = 'mid1' // ctx é o objeto de contexto que sera passado entre as funcoes
    nxt()
}

const passo2 = (ctx, nxt) => {
    ctx.value2 = ' mid2'
    nxt()
}

const passo3 = ctx => ctx.value3 = ' mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => { // funcao recursiva
        middlewares && indice < middlewares.length && // verifica se o indice é menor que o tamanho do array de middlewares
            middlewares[indice](ctx, () => execPasso(indice + 1)) // chama a funcao do middleware e passa o contexto e a funcao para o proximo passo
    }
    execPasso(0) // inicia a execucao do primeiro passo
}   

const ctx = {} // objeto de contexto que sera passado entre as funcoes
exec(ctx, passo2, passo1, passo3) // chama a funcao exec passando o contexto e os middlewares
console.log(ctx) // imprime o objeto de contexto com o resultado final