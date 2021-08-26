let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let multNumbers = [];

for (let index = 0; index < numbers.length; index+=1) {
    multNumbers.push (numbers[index] * (numbers[index + 1] || 2))
}

console.log(multNumbers)
