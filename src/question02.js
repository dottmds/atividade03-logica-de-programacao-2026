import leia from 'readline-sync';
var aceso = false
var i = 0

while (i < 3 && aceso === false) {

    var tentUsuario = leia.questionInt("DIGITE A SENHA CORRETA: ");

    if (tentUsuario === 4321) {
        console.log("ACESSO PERMITIDO");
        aceso = true;
    } else {
        console.log("TENTE NOVAMENTE");
    }

    if (i === 2) {
        console.log("ACESSO BLOQUEADO!!!")
        aceso = true;
    }

    i++
}