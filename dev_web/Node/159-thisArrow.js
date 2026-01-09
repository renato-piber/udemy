const arrowFunctoin = () => {
    console.log('nao aponta para o global ->', this == global) // false: this aponta para module.exports
    console.log('aponta para o module.exports ->', this == module.exports) // true: this aponta para module.exports   
    console.log('aponta para o exports ->', this == exports) // true: this aponta para module.exports

    console.log('o this nesta funcao nao e o global ->', this == global) // false: this aponta para module.exports
    console.log('o this nesta funcao e o module.exports ->', this == module.exports) // true: this aponta para module.exports
}

arrowFunctoin()