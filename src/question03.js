import leia from 'readline-sync' 

var abastecimentos = leia.questionInt("INFORME QUANTOS ABASTECIMENTOS: ");

var gasto = 0;

for(var i = 1; i <= abastecimentos; i++) {

    console.log("=======" + i + "° abastecimento=====")

    var g = leia.keyInSelect([`1 - Gasolina`,
  `2 - Etanol`, `3 - Diesel`])

  var litros = leia.questionInt("INFORME A QUANTIDADE DE LITROS: ");

    if(g === 1) {
        a = litros * 6.20
        
    }
}