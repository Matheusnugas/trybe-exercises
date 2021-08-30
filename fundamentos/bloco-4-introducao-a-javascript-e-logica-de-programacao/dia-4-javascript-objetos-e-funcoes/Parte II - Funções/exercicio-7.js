
// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.

function findEnding (str, str2) {
    if (str.length < str2.length) {
        console.log ("String inválida")
    } else if (str.endsWith(str2)) {
        return true
    } else {
        return false
    }
}

console.log(findEnding("trybe", "oo"));