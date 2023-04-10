/* 
1. Crie uma função que, ao receber uma array, gere um clone desta
array.
Por exemplo:
console.log(functionName([1, 2, 4, 0]));
// [1, 2, 4, 0]
console.log(functionName([1, 2, [7, 10]]));
// [1, 2, [7, 10]] 
*/

const cloneArray = (array) => [...array];

const array1 = [1, 2, 4, 0];
const array2 = [1, 2, [7, 10]];

console.log(cloneArray(array1));
console.log(cloneArray(array2));
