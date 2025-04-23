/*
como uma aplicacao é organizada?
    é parecido com o protocolo TCP/IP: onde cada camada tem uma funcao diferente, mas todas se comunicam entre si

    a resposta é: depende se a aplicacao sera feita no back ou no front

    no node, um arquivo representa um modulo (um modulo tem a sua "interioridade"), para utilizar-se de codigos de um modulo em outro, é necessario exporta-lo/importa-lo
*/

// como importar um modulo (todos sao objetos)
this.ola = 'Fala Pessoal!'
exports.bemVindo = 'Bem Vindo ao Node!'
module.exports.ateLogo = 'Até Logo!'