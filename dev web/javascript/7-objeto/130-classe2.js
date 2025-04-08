class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome); // Chama o construtor da classe pai (Avo)
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva'); // Chama o construtor da classe Pai (Avo)
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    set nomeCompleto(nome) {
        [this.nome, this.sobrenome] = nome.split(' ');
    }
}