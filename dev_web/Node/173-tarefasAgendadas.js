const { shuffle } = require('lodash');
const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () { // a cada 5 segundos
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () { // depois de 20 segundos
    tarefa1.cancel() // cancela a tarefa 1
    console.log('Cancelando Tarefa 1!')
}, 20000)

// funcoes de tempo no JS
// setImmediate
// setInterval;
const regra = new schedule.RecurrenceRule() ; // cria uma regra de recorrência
regra.dayOfWeek = [new schedule.Range(0, 6)] // define os dias da semana (0 a 6)
regra.hour = 15 // define a hora
regra.second = 30 // define os segundos

const tarefa2 = schedule.scheduleJob(regra, function () { // cria uma tarefa com a regra definida
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})