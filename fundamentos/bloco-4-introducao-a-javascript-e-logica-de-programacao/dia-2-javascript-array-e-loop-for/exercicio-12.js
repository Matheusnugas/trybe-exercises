let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let multNumbers = [];

for (let index = 0; index < numbers.length; index+=1) {
    multNumbers.push (numbers[index] * (numbers[index + 1] || 2))
}


// for (let index = 0; index < numbers.length; index+=1) {
//     if (numbers[index] === undefined) {
//         multNumbers.push(numbers[index] * 2);
//     } else if (numbers[index] === "Number") {
//         multNumbers.push (numbers[i] * numbers[i+1])
//     }
// }

console.log(multNumbers)
