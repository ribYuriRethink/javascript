/* 
3. Crie uma função que aceite uma array numérica como parâmetro e:
a. retorne outra array com todos os valores concatenados na forma
de uma string, e
b. com um sinal de ponto inserido a cada 3 numerais.
Exemplo:
console.log([1, 2, 3, 4, 5, 6, 7, 8]);
// “123.456.78” 
*/

const arrayToString = (array) =>
  array.reduce(
    (acc, curr, index) =>
      (index + 1) % 3 === 0 ? acc + curr + "." : acc + curr,
    ""
  );

console.log(arrayToString([1, 2, 3, 4, 5, 6, 7, 8]));
