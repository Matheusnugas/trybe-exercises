let n = 5;


for(let i = n; i >= 1; i -= 1) {
    let fileira = '';
    for (let j = i; j <= n; j+=1) {
        fileira += '*';
    }
    console.log(fileira)
}




// for(let i=0; i <= n; i++) {
//     console.log ("*".repeat(i));
// }