let checkedNumber = 241;
let divisores = 1;

for (let number = 2; number <= checkedNumber; number++) {
    if (checkedNumber % number === 0) {
        divisores++;
    }
}

if (divisores === 2) {
    console.log(`${checkedNumber} é primo`);
} else {
    console.log(`${checkedNumber} não é primo`);
}