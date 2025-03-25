// IIFE -> Immediately Invoked Function Expression
// evita o escopo global, tudo que for criado dentro da funcao so pode ser acessado dentro dela 

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})() // () -> invova a IIFE 

/*
seria a mesma coisa, mas dessa forma o codigo esta disponivel globalmente

console.log('Será executado na hora!')
console.log('Foge do escopo mais abrangente!')
*/