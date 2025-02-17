class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('joao')
p1.falar() // dependendo de onde a funcao e chamada, o THIS pode variar

const criarPessoa = nome => { // em um acesso mais abrangente
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('julia')
p2.falar()