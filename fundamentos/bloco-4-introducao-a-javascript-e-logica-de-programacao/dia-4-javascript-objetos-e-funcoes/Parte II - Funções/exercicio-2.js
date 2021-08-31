// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function findLarg (arr) {
    let largest = 0;
    for (let i = 0; i < arr.length; i+=1) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return (arr.indexOf(largest))
}

console.log(findLarg([2, 3, 6, 7, 10, 1]))