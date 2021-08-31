// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function findBigName(arr) {
    let bigName = "";
    for (let index = 0; index < arr.length; index+=1) {
        if (arr[index].length > bigName.length) {
            bigName = arr[index]
        }
    }
    return bigName
}

console.log(findBigName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))