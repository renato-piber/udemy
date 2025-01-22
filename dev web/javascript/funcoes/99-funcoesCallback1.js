// funcao callback == é uma funcao que e passada como argumento, executada em dps qnd determinado evento acontecer, ela vai ser chamada, qnts vezes for necessario

const fabricantes = ['mercedes', 'audi', 'bmw'];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir); // funcao passada como arg, o evento nesse caso, sao os diversos itens iterados
fabricantes.forEach(fabricante => {
    console.log(fabricante)
})