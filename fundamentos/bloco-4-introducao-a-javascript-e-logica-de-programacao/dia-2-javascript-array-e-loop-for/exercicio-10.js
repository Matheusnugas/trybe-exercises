let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i+=1) {
    for(let j = 0; j < i; j+=1) {
        if  (numbers[i] < numbers[j]) {
            let position = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}

console.log (numbers);

// Using method/function:

// let sortedNumbers = numbers.sort(function(a,b) {return a-b});

// console.log(sortedNumbers);

// let decNumbers = numbers.sort(function(a,b){return b-a});
// console.log(decNumbers);