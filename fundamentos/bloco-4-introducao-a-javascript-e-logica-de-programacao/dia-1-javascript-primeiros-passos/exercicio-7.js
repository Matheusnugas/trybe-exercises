let nota = 58;
let notaConvertida = ""

if (nota < 0 || nota > 100) {
    console.log("Nota impossível!")
} else if (nota >= 90) {
    notaConvertida = "A";
} else if (nota >= 80) {
    notaConvertida = "B"
} else if (nota >= 70) {
    notaConvertida = "C"
} else if (nota >= 60) {
    notaConvertida = "D"
} else if (nota >= 50) {
    notaConvertida = "E"
} else if (nota < 50) {
    notaConvertida = "F"
}

console.log(notaConvertida);
