let n = 5;


for(let i = n; i >= 1; i -= 1) {
    let fileira = '';
    for (let j = 0; j < i ; j+=1) {
        fileira += ' '
    }
    for (let k = i; k <= n; k+=1) {
        fileira +='*';
    }
    console.log(fileira)
}