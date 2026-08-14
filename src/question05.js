import leia from 'readline-sync' 

var quantidadeTotalGols = 0;
var pontos = 0;
var g = 0;

var partidas = leia.questionInt("INFORME O NUMERO DE PARTIDAS QUE SERAO ANALISADAS: ");

for(var i = 1; i <= partidas; i++) {

    console.log("partida " + i)
    
    var golsMarcados = leia.questionInt("informe quantos gols marcados: ");
    pontos += golsMarcados * 50
    quantidadeTotalGols += golsMarcados

    if(golsMarcados > 2) {
        g += 1
    }
}

console.log("Total gols marcados: " + quantidadeTotalGols);
console.log("Total pontos: " + pontos);
console.log("Média de gols por partida: " + (quantidadeTotalGols / partidas));
console.log("Total partidas que marcou mais que 2 gols: " + g)
