//loja furreca, dividir pra conquistar ,montar um sistema pra cadastrar produtos
//so o gerento pode cadastrar,mas só se entrar com uma senha,o vendedor só ve os bagulho
//

let nome = 'Sheila';
let cargo = 'gerente';
let nome1 = 'Jorge';
let cargo2 = 'vendedor'
let nome3 = 'outro';
let cargo3 = 'nenhum';
let senha = 'vsf666#';

if (nome === 'Sheila' && cargo === 'gerente') {
    console.log(nome + 'Acesso para vizualização de produtos liberada: ' + cargo);
}
if (senha === 'vsf666#') {
    console.log("Acesso para vizualização liberado");

}else if(nome === 'Jorge' && cargo === 'vendedor'){
    console.log(nome + 'Acesso para vizualização de produtos liberada: ' + cargo);
}else{
    console.log('Acesso negado');
};

///outra porra
let ano = 1984;
let mes = 3;
if(mes == 1 || mes == 3 || mes == 5 || mes == 7 ||mes == 8 || mes == 10 || mes == 12){
 console.log("31 dias desta merda");
}else if(mes > 12 || mes < 1 ){
    console.log(" Mes invalido");
}else( mes == 2 || mes == 4 || mes == 6 || mes == 9 || mes == 11){
    console.log( 'O mes tem 30 dias');
}if( mes == 2){
    let anoBissexto((ano % 4 == 0) && (ano % 100 != 0) || (ano %  400 == 0))
}else if (anoBissexto){
    console.log("Esse mes tem 29 dias");
}else{
    console.log("Esse mes tem 28 dias");
}