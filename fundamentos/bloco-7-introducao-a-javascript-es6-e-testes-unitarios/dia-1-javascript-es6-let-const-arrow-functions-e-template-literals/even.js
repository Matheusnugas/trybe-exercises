let array = [2,5,6,8,9,11,14];

const evenNum = arr => {
    let evenArray = arr.filter(n=> {
        return n % 2 === 0;
    })
    return evenArray
}

console.log (evenNum(array));