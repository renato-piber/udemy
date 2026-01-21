// o principal.js é o arquivo de inicio do qual o webpack comecara a rastrear todas as dependencias do projeto => se nao referencia, o webpack nao tem como chegar naquele arquivo
// para cada tipo de arquivo tem um loader
// const Pessoa = require('./pessoa')
import Pessoa from './pessoa'
import './modulos/moduloA' // o webpack é baseado em modulos. se um modulo nao esta referenciado em nenhum lugar acessivel à arvore do arquivo entry, ele nao sera executado
import './assets' // por padrao, o webpack procura dentro da pasta um arquivo index.js

const atendente = new Pessoa
console.log(atendente.cumprimentar())