const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => {
    let count = 0;
    names.forEach(element => {
        count += element.match(/a/gi).length
    })
    return count;
}

// Using Reduce
// const containsA = () => names.reduce((acc, curr) => acc + curr.match(/a/gi).length, 0)

console.log(containsA())
