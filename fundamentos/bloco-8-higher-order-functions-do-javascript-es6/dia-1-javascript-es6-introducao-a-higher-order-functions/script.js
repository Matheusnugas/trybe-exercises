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