// CLOSURE == escopo criado quando uma funcao e declarada
// esse escopo permite a funcao acessar e manipular variaveis externar a funcao

const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}


const minhaFuncao = fora()
console.log(minhaFuncao())
