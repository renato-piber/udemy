function inverso(valor) {
    const tipo = typeof valor; // devo criar uma variavel para ser testada ao de testar o teste
    if (tipo == 'boolean') return !valor
    else if (tipo == 'number') return -valor
    else
        return 'booleano ou numero esperados, mas o tipo é string'
}

console.log(inverso(-1))

