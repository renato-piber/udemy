// a classe diferencia-se da funcao na questao sintatica
// a classe é convertida para uma funcao construtora

class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        });
        return valorConsolidado;
    }
}

function Teste(x, y){
    this.x = x;
    mostrarY = () => console.log(y);
}

let a = new Teste(1, 2);