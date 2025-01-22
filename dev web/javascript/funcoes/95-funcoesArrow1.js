// a funcao arrow tem o seu this associado ao contexto no qual a função foi escrita
// a funcao arrow e sempre anonima

let dobro = function(a) {  
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro
console.log(ola())

