// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr);

console.log(sum(1,3,7,9))