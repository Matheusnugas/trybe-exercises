let salarioBruto = 3000
let impostoDeRenda = 0
let impostoSeguroSocial = 0


if (salarioBruto <= 1556.94) {
    impostoSeguroSocial = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    impostoSeguroSocial = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    impostoSeguroSocial = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
    impostoSeguroSocial = 570.88
}

let salarioBase = salarioBruto - impostoSeguroSocial

if (salarioBase <= 1903.98) {
    impostoDeRenda = 0
} else if (salarioBase <= 2826.65) {
    impostoDeRenda = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    impostoDeRenda = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    impostoDeRenda = (salarioBase * 0.225) - 636.13;
} else if (salarioBase > 4664.68) {
    impostoDeRenda = (salarioBase * 0.275) - 896.36;
}

let salarioLiquido = salarioBase - impostoDeRenda

console.log(salarioLiquido);