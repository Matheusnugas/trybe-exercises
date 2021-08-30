// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindrome (str) {
    if (str !== str.split('').reverse().join('')) {
        return false;
    } else {
        return true;
    }
}

console.log(palindrome ("arara"))