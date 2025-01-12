if(5 + 8 === 13) //verdadeiro obvio
{
console.log('Parabens seu animal,acertou');

}

if(9 + 8 === 16)// sei la
{
    console.log("Ta errado seu bosta");
}

const frutaDisponivel = 'banana';

if (frutaDisponivel === 'abacate') {
  console.log('Vitamina de abacate saindo');
} else if (frutaDisponivel === 'banana') {
  console.log('Vitamina de banana saindo');
} else {
  console.log('Suco de ' + frutaDisponivel + ' saindo');
}

const notaDaPessoaEstudante = 7.5;

if (notaDaPessoaEstudante >= 8) {
  console.log('Nota A');
} else if (notaDaPessoaEstudante >= 6 && notaDaPessoaEstudante < 8 ) {
  console.log('Nota B');
} else if (notaDaPessoaEstudante >= 4 && notaDaPessoaEstudante < 6 ) {
  console.log('Nota C');
} else {
  console.log('Nota D');
}