import leia from 'readline-sync' 

var abastecimentos = leia.questionInt("INFORME QUANTOS ABASTECIMENTOS: ");

var gasto = 0;
var gasolina = 0
var Etanol = 0;
var Diesel = 0;

for(var i = 1; i <= abastecimentos; i++) {

    console.log("=======" + i + "° abastecimento=====")

    var g = leia.keyInSelect([`1 - Gasolina`,
  `2 - Etanol`, `3 - Diesel`])

  var litros = leia.questionInt("INFORME A QUANTIDADE DE LITROS: ");

    if(g === 1) {
        a = litros * 6.20
        gasto += a
        gasolina += 1
    } else if (g === 2) {
        b = litros * 4.30
        gasto += b
        Etanol += 1
    } else if (g === 3) {
        c = litros * 4.30
        gasto += c
        Diesel += 1
    } 

}

console.log("quantidade de abastecimentos Gasolina: " + gasolina)
console.log("quantidade de abastecimentos Etanol: " + Etanol)
console.log("quantidade de abastecimentos Diesel: " + Diesel)
console.log("valor total arrecadado pelo posto: " + gasto)
