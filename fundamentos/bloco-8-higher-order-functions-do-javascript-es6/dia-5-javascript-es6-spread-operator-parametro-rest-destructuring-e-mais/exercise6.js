const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

// const toObject = arr => {
//     return {
//         name: arr[0],
//         brand: arr[1],
//         year: arr[2]
//     }
// }

// OR

const toObject2 = ([name, brand, year]) => ({name, brand, year})

console.log(toObject2(chiron))