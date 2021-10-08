const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

// Using .flat()
// const flatten = () => (
//   arrays.flat()
// )

// Using .reduce()
const flatten = () => (
  arrays.reduce((acc, curr) => acc.concat(curr))
)

console.log(flatten())

// From:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat