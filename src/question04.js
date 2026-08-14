import leia from 'readline-sync'

var totalDaCompra = 0;
var item = 0;


while(numeroPedido !== 0) {

console.log("======= MENU LANCHONETE =======")
var numeroPedido = leia.keyInSelect([`1 - Hambúrguer - R$ 20,00`, `2 - Cachorro-quente - R$ 15,00`,
         `3 - Refrigerante - R$ 7,00`, `4 - Batata frita - R$ 12,00`]);

    if(numeroPedido === 1) {
        totalDaCompra += 20.00;
        console.log("Hambúrguer adicionado!")
        item += 1;
    } else if(numeroPedido === 2) {
        totalDaCompra += 15.00;
        console.log("Cachorro-quente adicionado!")
        item += 1;
    } else if(numeroPedido === 3) {
        totalDaCompra += 7.00;
        console.log("Refrigerante adicionado!")
        item += 1;
    } else if (numeroPedido === 4) {
        totalDaCompra += 12.00;
        console.log("Batata frita adicionada!")
        item += 1;
    } else {

      console.log("Pedido finalizado")
    } 
}

console.log("Valor total da compra: " + totalDaCompra);
console.log("valor médio: " + (totalDaCompra / item))

