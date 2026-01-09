// contexto lexico ==> contexto de onde as coisas foram declaradas
const valor = 'global'

function minhaFuncao() { // a funcao tem consciencia do local em que foi escrita, nao apenas o seu conteudo, mas tb do seu escopo lexico
    console.log(valor)
}

function exec () {
    const valor = 'local'
    minhaFuncao()
}

exec()