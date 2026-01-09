// a funcao no js é chamada de cidadao de primeira linha (high order function, first class object), ou seja, a funaçao pode ser tratada como um dado
// ou seja, pode ser passada como parametro, retornada de uma funcao, armazenada em uma variavel

// criar de forma literal
function fun1() {}

// armazenar em uma variavel
const fun2 = function() {} // funcao anonima

// armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

// passar funcao como parametro
function run(fun) {
    fun()
}

run(function() { console.log('Executando...') })

// uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
// soma(2, 3) vira uma funcao que recebe um parametro
soma(2, 3)(4)

// ou
const cincoMais = soma(2, 3)
cincoMais(4)