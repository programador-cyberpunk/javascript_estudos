//como é fazer tudo na unha
const Turma1Estudante1 = 'Fabio';
const Turma2Estudante2 = 'Fabiano';
const Turma3Estudante3 = 'Andre';
const Turma4Estudante4 = 'Jose';
const Turma5Estudante5 = 'Mariana';
const Turma6Estudante6 = 'Ana';

//agora num array eu sei que sao salas diferentes,mas é só um exemplo

const Turma1Estudantes = ['Fabio', 'Fabiano', 'Andre', 'Jose', 'Mariana', 'Ana'];
console.log(Turma1Estudantes);

const sorteio = ['6','8','64', '78','62','47'];
console.log(sorteio);

//dando um vizu por indice do array
const refri = ['coca','fanta','pepsi','piracaia','itubaina','dolly'];
const saborEscolhido = refri[2];
console.log(saborEscolhido);

const refri2 = ['coca','fanta','pepsi','piracaia','itubaina','dolly'];
const saborEscolhido2 = refri[5];
console.log(saborEscolhido);

//problema real
const ÇistaDeCompras = ['arroz','feijao','ovo'];
listaDeCompras[3] = ['farofa'];
console.log(listaDeCompras);

const listaDeCompras = ['arroz', 'feijão', 'ovo'];
console.log(listaDeCompras.push('farofa')); // ['arroz', 'feijão', 'ovo', 'farofa']

///modo normal
const Copas = ['1958','1962','1970','1994'];
Copas[4] = '2002';
console.log(Copas);

//usando push
const Copas = ['1958','1962','1970','1994'];
Copas.push(2002);
console.log(Copas);


//substituição
const estadosNorte = ['Acre', 'Amapá', 'Amazonas', 'Paraná', 'Rondônia', 'Roraima', 'Tocantins'];
console.log(estadosNorte[3]);
estadosNorte[3] = 'Pará';
console.log(estadosNorte);

const igredientes = ['sazon','sal','tomate','cogumelo','pimenta','batata'];
console.log(igredientes);
igredientes[2] = 'refri';
console.log(igredientes);

///recuperando o tamanho do array
const convidados = ['sata', 'mammon','azazel','belzebub','baphomet','joao kleber','asmodeus','toth','ratinho','paimon','caim','legba'];
const numConvidados = convidados.length;
const ultimoConvidado = [convidados.length-1];
console.log(convidados);
console.log(numConvidados);
console.log(ultimoConvidado);
convidados.push('baal');
console.log(convidados.length);

///exercicio
//Imagine que você está saindo para fazer compras no supermercado com a seguinte lista://
const listaDeCompras2 = ['Maçã','Biscoito/Bolacha','Banana','Café em pó','Leite','Arroz'];

/**
 * Mostre o terceiro item do array;
Mostre o primeiro item do array;
Mostre o quinto item do array;
Mostre a concatenação do primeiro item com o terceiro item do array. O retorno deve seguir a estrutura 'item1 e item3', onde item1 e item3 são seus respectivos valores.

*/

const frutas = ['Abacaxi', 'Uva', 'Banana', 'Pera', 'Maçã'];
console.log(frutas[0]);
console.log(frutas[2]);
console.log(frutas[4]);
console.log(`${frutas[0]} e ${frutas[2]}`);

/*
Cleyton decidiu promover uma festa no final de semana, e até já possui uma lista de convidados definida:

Copiar
const convidados = ['Adilson', 'Claudio', 'Juliana', 'Vinícius'];
Na sexta-feira a noite, ele lembrou de convidar mais três amigos: Laura, Guilherme e Leticia. Além disso, Juliana entrou em contato e cancelou sua presença.

Crie um algoritmo que ajude Cleyton a manipular o array convidados para:

Substituir o nome 'Juliana' por 'Laura';
Adicionar 'Guilherme' e 'Leticia' no array*/

const convidados2 = ['Adilson', 'Claudio', 'Juliana', 'Vinícius','Guilherme','Leticia'];
/***** Escreva seu código nas linhas abaixo *****/
console.log(convidados[2]);
convidados[2] = 'Laura';

/** 
 * 
 Chegou o verão e a clientela de uma sorveteria cresceu. João, dono do estabelecimento, precisa de ajuda no controle do seu estoque. Ajude o João a descobrir:

A quantidade de sabores de sorvete;
A quantidade de cobertura disponível.
Considere as listas a seguir:

Lista de sabores de sorvete:

Chocolate
Morango
Açaí
Creme
Flocos
Lista de sabores de cobertura:

Chocolate
Morango
Doce de leite
Todos os sabores de sorvete devem estar em um array na variável sabores;
Todos os sabores de cobertura devem estar em um array na variável coberturas;
Mostre no console duas mensagem informando as quantidades de sabores de cada lista, por exemplo:
‘Quantidade de sabores de sorvete: 5’;
‘Quantidade de sabores de cobertura: 3’.
*/
/***** Escreva seu código nas linhas abaixo *****/
/***** Escreva seu código nas linhas abaixo *****/
const sabores = ['Chocolate','Morango','Açaí','Creme','Flocos'];
console.log("Quantidade de sabores de sorvete: 5");
const coberturas = ['Chocolate','Morango','Doce de leite'];
console.log("Quantidade de sabores de cobertura: 3")

/**
 * 
 *Trocando posições dos itens de um array ↔️
Você criou uma lista com os jogos de que você mais gosta para postar no seu blog, ordenando da seguinte forma:

1 - Quebra-Cabeça
2 - Tetris
3 - Sudoku
4 - Xadrez
5 - Batalha Naval
Ao finalizar a lista, você decidiu ordená-la do jogo em que você menos se diverte para o que mais se diverte.

Para isso, crie um algoritmo capaz de inverter a ordem da sua lista:

5 - Batalha Naval
4 - Xadrez
3 - Sudoku
2 - Tetris
1 - Quebra-Cabeça
Note que, ao invés de exibir os números em ordem crescente - 1, 2, 3, 4, 5, sua lista ficará na ordem invertida - 5, 4, 3, 2, 1.

 */

let lista = [1, 2, 3, 4, 5];
let inverter = true;
let listaInvertida = [];

function inverteArray(){
  
  if (inverter) {
    listaInvertida[0] = lista[4];
    listaInvertida[1] = lista[3];
    listaInvertida[2] = lista[2];
    listaInvertida[3] = lista[1];
    listaInvertida[4] = lista[0];
  
    console.log(listaInvertida);
  } else{
    console.log(lista); 
}
}