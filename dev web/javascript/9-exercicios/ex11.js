function primeiroUltimo([primeiro, ...resto]) {
    return [primeiro, resto.pop()]
}

console.log(primeiroUltimo([0,1,2,3,4,5,6,7,8,9]))