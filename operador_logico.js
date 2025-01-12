//operadores-logicos
// AND---&&
let ensolarado = true;
let fimDesemana = false;
let vaiAPraia = ensolarado && fimDesemana;
console.log(vaiAPraia);
// OR---||
let gasosa = false;
let money = false;
let praiera = gasosa || money;
console.log(praiera);
// NOT--!
let carroFudido = false;
let praiada = !carroFudido;
console.log(praiada);

// operadores logicos

// verificar usando AND
let numeroPar = true;
let numeroImpar = false;
let resultado = numero && numeroPar
console.log(resultado);
//tem que fazer essa bosta comprar o valor entre 20 e 50,verificar se é maior ou igual a 20
//e se é par,mas ele tá de viadagem falando que tá errado
//verificar usando OR
let local = 'praia';
let estadoEmocional = 'praia' || 'cinema';
console.log(estadoEmocional)

//inversao com false
let TemOxigenioNoEspaço = false;
let ATerraEPequena = false;

//verificação estrita
let login = 'joabCassimiro';
let senha = '12345678';
let verificaCredenciais = login === 'joabCassimiro' && senha ==='12345678';
// negação
let gostoPorPraia = false;
let novoGostoPorPraia = true;
console.log(gostoPorPraia)
// if else
let atribuiMensagem = true;
let mensagem;

if(atribuiMensagem = true){
    mensagem = 'Ola Tryber!'
}