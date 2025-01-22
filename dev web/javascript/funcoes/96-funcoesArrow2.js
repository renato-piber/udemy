// com arrow function não e necessario usar o bind para amarrar o this, ou utilizar de uma constante para armazernar o this

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa