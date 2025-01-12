//for

//sem o for e meio lgbt
console.log(10);
console.log(9);
console.log(8);
console.log(7);
console.log(6);
console.log(5);
console.log(4);
console.log(3);
console.log(2);
console.log(1);
console.log('UHULLLLLLLLLLLLLLLLLLLL FELIZ ANO NOVOOOOOOOO 🍾🎆🎆✨');

//agora poe o for pra funcionar

for (let index = 10; index >=1 ; index = index - 1) {
    console.log(index);
    
}
const Comprinhas = ['maça','laranja','tomate','cenoura','mamao','batata','sabonete'];
const Carrinho = [];
for( let posicao = 0; posicao < Comprinhas.length; posicao = posicao +1 ){
if(Comprinhas[posicao] === 'maça' || Comprinhas[posicao] === 'laranja'
     || Comprinhas[posicao] === 'tomate' || Comprinhas[posicao] === 'mamao'){
     Carrinho.push(Comprinhas[posicao]);
    }
}
console.log(Carrinho);

//for dentro do for

const amizadesDaJuliana = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const amizadesDoAdilson = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
const amizadesEmComum = [];

for (let indexDaJuliana = 0; indexDaJuliana < amizadesDaJuliana.length; indexDaJuliana = indexDaJuliana + 1) {
  for (let indexDoAdilson = 0; indexDoAdilson < amizadesDoAdilson.length; indexDoAdilson = indexDoAdilson + 1) {
    if (amizadesDaJuliana[indexDaJuliana] === amizadesDoAdilson[indexDoAdilson]){
      amizadesEmComum.push(amizadesDoAdilson[indexDoAdilson]);
    }
  }
}

console.log(amizadesEmComum);

//exercicios

const numeros = [1, 2, 3, 4, 5];

for(numeros = 0; numeros >= 0; numeros ++){
  console.log(numeros);
}