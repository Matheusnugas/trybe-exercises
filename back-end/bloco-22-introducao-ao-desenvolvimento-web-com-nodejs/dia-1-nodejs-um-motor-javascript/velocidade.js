const readlineSync = require('readline-sync');

const dist = readlineSync.questionInt('Qual a distancia percorrida em metros? ');
const time =  readlineSync.questionInt('Qual o tempo gasto em segundos? ');

const averageSpeed = () => {
    console.log(`A velocidade média é de ${(dist/time).toFixed(2)} m/s`);
}
averageSpeed();

module.exports = averageSpeed;