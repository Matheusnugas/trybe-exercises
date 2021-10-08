// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newPerson = (name) => {
    const email = name.toLowerCase().split(' ').join('_');
    return {
        name,
        email: `${email}@trybe.com`
    }
};


const newEmployees = (callBack) => {
  const employees = {
    id1: callBack('Pedro Guerra'),
    id2: callBack('Luiza Drumond'),
    id3: callBack('Carla Paiva')
  }
  return employees;
};

console.log(newEmployees(newPerson));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numberChecker = (myNumber, number) => myNumber === number;

const numberGen = (num, callback) => {
    let randomNumber = Math.floor(Math.random() * 5) + 1
    return callback(num, randomNumber) ? 'Voce ganhou!' : 'Tente de novo';
}

console.log(numberGen(3, numberChecker))

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkRightAmount = (rightAnswer, studentAnswer, callback) => {
  let count = 0;
  for (let i = 0; i < rightAnswer.length; i+=1) {
    const checkFunction = callback(rightAnswer[i], studentAnswer[i]);
    count += checkFunction;
  }
  return `You got ${count} questions right!`;
}

const callBackFunction = (param1, param2) => {
  if (param1 === param2) {
    return 1
  } if (param2 === 'N.A') {
    return 0;
  } else {
    return -0.5
  }
}

console.log(checkRightAmount(RIGHT_ANSWERS, STUDENT_ANSWERS, callBackFunction));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (array1, array2) => {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
      count += 1;
    } else if (array2[i] == 'N.A') {
      count = count
    } else {
      count += -0.5;
    }
  }
  return `You got ${count} right!`
}

console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS))
