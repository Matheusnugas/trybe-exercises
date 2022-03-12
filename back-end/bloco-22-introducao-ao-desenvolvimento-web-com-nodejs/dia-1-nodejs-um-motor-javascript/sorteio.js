const readlineSync = require('readline-sync');

const resultLogger = (myNum, randomNum) => {
    if (myNum === randomNum) {
        return console.log("Parabens! Numero correto");
    }
    return console.log("Tente outra vez!");
}

const randomLuck = () => {
    const numInput = readlineSync.questionInt('Digite um número de 0 a 10 ');
    const randomNum = Math.floor(Math.random() * 10) + 1;
    resultLogger(numInput, randomNum);
    const playAgain = readlineSync.question('Deseja jogar outra vez? Digite s para sim, e qualquer outra coisa para não ');
    if (playAgain !== 's') {
        return console.log('Beleza! Até a próxima');
    };
    randomLuck();
}

randomLuck();