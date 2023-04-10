/* 
2. Crie uma função que, ao receber como parâmetros uma array e um
número (opcional), cria uma outra array com os valores iniciais da
array original de acordo com o número passado. Método: slice().

Por exemplo:
console.log(funtionName([7, 9, 0, -2],3));
// [7, 9, 0]
console.log(funtionName([7, 9, 0, -2]));
// 7
console.log(funtionName([],3));
// []
console.log(funtionName([7, 9, 0, -2],6));
// [7, 9, 0, -2]
console.log(funtionName([7, 9, 0, -2],-3));
// [] 
*/

const newArray = (array, endIndex = 1) =>
  endIndex < 0 ? [] : array.slice(0, endIndex);

console.log(newArray([7, 9, 0, -2], 3));
console.log(newArray([7, 9, 0, -2]));
console.log(newArray([], 3));
console.log(newArray([7, 9, 0, -2], 6));
console.log(newArray([7, 9, 0, -2], -3));
