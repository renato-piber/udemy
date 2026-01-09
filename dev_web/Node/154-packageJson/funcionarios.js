const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // é um client que faz requisicoes de algo que esta remoto

axios.get(url).then(response => {
    const funcionarios = response.data // aqui estamos pegando os dados que vieram da requisicao, que estao no formato json
    // console.log(funcionarios) // aqui estamos imprimindo os dados no console

    // desafio de achar a chinesa com o menor salario
    let chineses = funcionarios.filter(f => f.pais === 'China')
    let mulheres = chineses.filter(c => c.genero === "F")
    let mulherMenorSalario = mulheres.reduce((x, y) => x.salario < y.salario ? x : y)
    console.log(mulherMenorSalario)
})
