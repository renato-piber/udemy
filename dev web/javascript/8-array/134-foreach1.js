const aprovados = ['Bia', 'Carlos', 'Ana', 'Paulo'] 

aprovados.forEach(function(nome, indice, array, x) { // podemos passar funcao callback
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    console.log(x) // nao existe

})

aprovados.forEach(nome => console.log(nome)) // funcoes inline

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) // ou funcoes armazenadas em constantes
