// usando a notacao literal (nao confundir com JSON)
const obj1 = {};

// Object em JS
const obj2 = new Object;

// funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome; // this mostra q o atributo vai ser publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc); // aqui os valores so estao disponiveis dentro da funcao
    }
}

const p1 = new Produto('caneta', 7.99, 0.15);
const p2 = new Produto('notebook', 2998.99, 0.25);
// console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// funcao factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('joao', 7980, 4);
const f2 = criarFuncionario('maria', 11400, 1);
//console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null);
filha.nome = 'ana';
//console.log(filha)

// uma funcao famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}'); // ao receber um JSON no backend, é mais facil trabalhar com um json obj do que um json str
// console.log(fromJSON.info)

