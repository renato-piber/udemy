/*
passar isso pra funcao:

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

*/

function PessoaFactory (nome) {
    return {
        nome,
        falar: () => {
            console.log(`meu nome e ${nome}`)
        }
    }
}

const p1 = PessoaFactory('renato')
p1.falar()