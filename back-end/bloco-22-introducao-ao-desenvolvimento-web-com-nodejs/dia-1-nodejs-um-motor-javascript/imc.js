const readlineSync = require('readline-sync');

const peso = readlineSync.questionFloat('Qual o seu peso em quilos? ');
const altura = readlineSync.questionInt('Qual a sua altura em centimetros? ');

const imc = () => {
    const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    console.log(imc)
    if (imc < 18.5) {
        console.log('Situação: Abaixo do peso (magreza)')
        return
    }

    if (imc >= 18.5 && imc < 25) {
        console.log('Situação: Peso normal')
        return
    }

    if (imc >= 25 && imc < 30) {
        console.log('Situação: Acima do peso (sobrepeso)')
        return
    }

    if (imc >= 30 && imc < 35) {
        console.log('Situação: Obesidade grau I')
        return
    }

    if (imc >= 35 && imc < 40) {
        console.log('Situação: Obesidade grau II');
        return
    } 

    if (imc > 40) {
        console.log('Situação: Obesidade graus III e IV');
        return
    }    
}

imc();

module.exports = imc;