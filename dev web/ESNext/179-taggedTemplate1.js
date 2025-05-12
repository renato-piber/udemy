// processar uma Template string atraves de uma funcao
function tag(partes, ...valores) {
    console.log(partes) // string nao interpolada
    console.log(valores) // valores para interpolar
    return 'Outra string' // retorna uma string qualquer
}

const nome = 'Ana'
const situacao = 'Aprovada'
console.log(tag`${nome} está ${situacao}`) // Outra string, pois a funcao tag retorna uma string qualquer