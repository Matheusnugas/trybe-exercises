// Parte I
// Agora você vai fazer alguns exercícios de fixação.

// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

// Modifique a estrutura da função para que ela seja uma arrow function .

// Modifique as concatenações para template literals .

function testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

testingScope(true);


// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescentes = arr => {
    let sortedArray = arr.sort((a, b) => a - b);
    return sortedArray
}

console.log (`Os números ${crescentes(oddsAndEvens)} se encontram em ordem crescente`);

// Parte II
// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
// Crie uma função que receba uma frase e retorne qual a maior palavra.

let factorial = n => {
  let result = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (let i = 1; i <= n; i+=1) {
      result *= i
    }
  }
  return result;
}

console.log(factorial(6))

// TERNARY OPERATOR - RECURSIVE APPROACH // 

let ternFactorial = n => n == 0 ? 1 : n * (ternFactorial(n-1));

console.log (ternFactorial(6));


// Crie uma função que receba uma frase e retorne qual a maior palavra.

let longestWord = str => { 
  let bigWord = str.split(' ').sort((a, b) => b.length - a.length)
  return bigWord[0]; 
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".
