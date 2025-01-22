// this referencia o objeto que está sendo executado naquele momento
// a referencia do this pode variar, dependendo de onde a função foi chamada
// this lexico = ele pega o this do contexto onde a função foi escrita
// a funcao arrow é uma funcao mais enxuta, e o this dela não varia, tem um contexto lexico bem definido
// assim, a funcao bind foi criada, ela amarra o this a um objeto à ela informado

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // Bom dia!
const falar = pessoa.falar // conflito entre paradigmas: funcional e OO
falar() // undefined --> o Node esta em outro contexto, e o this não aponta para pessoa

const falarDePessoa = pessoa.falar.bind(pessoa) // bind amarra o this ao objeto pessoa
falarDePessoa() // Bom dia!