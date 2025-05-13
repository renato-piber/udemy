function gerarNumeroEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, 1000)
    })
}

gerarNumeroEntre(1, 60).then(console.log)