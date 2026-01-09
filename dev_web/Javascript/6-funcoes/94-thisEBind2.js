function Pessoa() {
    this.idade = 0

    const self = this // uma forma de burlar essa variacao do this, atraves da criacao de uma constante que armazena o this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa