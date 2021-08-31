// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function findLow(arr) {
    let lowest = 0;
    for (let i = 0; i < arr.length; i+=1) {
        if (arr[i] < lowest) {
            lowest = arr[i]
        }
    }
    return (arr.indexOf(lowest))
}

console.log (findLow([2, 4, 6, 7, 10, 0, -3]));