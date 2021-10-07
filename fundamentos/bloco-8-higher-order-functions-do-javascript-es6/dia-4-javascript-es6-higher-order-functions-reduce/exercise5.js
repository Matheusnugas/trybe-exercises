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

console.log(containsA())
