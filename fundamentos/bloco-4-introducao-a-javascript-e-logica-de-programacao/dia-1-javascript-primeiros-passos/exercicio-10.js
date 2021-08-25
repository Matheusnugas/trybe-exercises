const valorCusto = 100
const impostoSobreCusto = (valorCusto / 100) * 20;
const valorCustoTotal = valorCusto + impostoSobreCusto
const valorVenda = 150
let lucro;

if (valorCusto < 0 || valorVenda < 0) {
    console.log("Valor não pode ser menor que zero");
} else if (lucro = (valorVenda - valorCustoTotal) * 1000) {
    console.log(lucro);
}