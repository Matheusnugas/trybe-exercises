// Desafio 1 
const array = [1,2,3,4,5,6,7,8,9,10];

let array = [2,5,6,8,9,11,14];
let evenNumbers = array => {
    let evenArray = [];
    for (let i = 0; i < array.length; i+=1) {
        if (array[i] % 2 ===0) {
            evenArray.push(array[i])
        }
    }
    return evenArray;
}
console.log (evenNumbers(array));

// Resolução por filter 

let array = [2,5,6,8,9,11,14];
const evenNum = arr => {
    let evenArray = arr.filter(n => n % 2 === 0)
    return evenArray
}
console.log (evenNum(array));


// Desafio 2

const citiesAndStates = [
    {
      city: 'Belo Horizonte',
      state: 'Minas Gerais',
    },
    {
      city: 'Salvador',
      state: 'Bahia',
    },
    {
      city: 'Porto Alegre',
      state: 'Rio Grande do Sul',
    },
    {
      city: 'Manaus',
      state: 'Amazonas',
    }
  ]

  let citiesPlusStates = array => {
      let resultado = [];
      for (let i = 0; i < array.length; i+=1) {
          resultado.push(`${array[i].city} - ${array[i].state}`);
      }
      return resultado;
  }
console.log(citiesPlusStates(citiesAndStates));


// Desafio 3


// let allGreaterThan = (array, num) => {
//     for (let i = 0; i < array.length; i+=1) {
//         if (array[i] > num) {
//             return true;
//         } else {
//             false
//         }
//     }
// }


const arrayGreater = [20, 30, 19, 1];
let allGreaterThan = (array, num) => array.every(number => number < num)

console.log(allGreaterThan(arrayGreater, 50));