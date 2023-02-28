/* 
4 - Crie uma função que receba uma array de strings e retorne outra
array apenas com os elementos de até 5 caracteres da array original.
Exemplo:
// teste
console.log(functionaName(["cachorro", "pato", "oi", "família",
"comer", "camping", aquarela”]));
// ["pato", "oi", "comer"] 
*/

const stringsUntilFiveCaracters = (array) =>
  array.reduce((acc, curr) => {
    if (curr.length < 6) acc.push(curr);
    return acc;
  }, []);

console.log(
  stringsUntilFiveCaracters([
    "cachorro",
    "pato",
    "oi",
    "família",
    "comer",
    "camping",
    "aquarela",
  ])
);
