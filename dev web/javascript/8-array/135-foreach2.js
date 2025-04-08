const aprovados = ['Bia', 'Carlos', 'Ana', 'Paulo']

Array.prototype.forEach2 = function (func) {
    for (let i in this) {
        if (this.includes(this[i]))
            func(this[i], i, this)
    }
}

aprovados.forEach2((nome, indice) => {
    console.log(`${Number(indice) + 1}) ${nome}`)
})