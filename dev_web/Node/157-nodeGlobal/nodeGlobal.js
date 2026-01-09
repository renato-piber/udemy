// console.log(global) // print do obj global (do modulo)
// como utilizar da forma "correta"

global.MinhaApp = Object.freeze({
    saudacao() {
        return 'estou em todos os lugares'
    },
    nome: 'sistema legal'
})