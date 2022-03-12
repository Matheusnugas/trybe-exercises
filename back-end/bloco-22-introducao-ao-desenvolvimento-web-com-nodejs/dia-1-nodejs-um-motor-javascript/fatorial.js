const readlineSync = require('readline-sync');

function factorial() {
    const numQuestion = readlineSync.questionInt('Digite um número ');
    let answer = 1;
    if (numQuestion == 0 || numQuestion == 1){
      return answer;
    }else{
      for(var i = numQuestion; i >= 1; i--){
        answer *= i;
      }
      return console.log(answer);
    }  
  }

  factorial();

  module.exports = factorial;