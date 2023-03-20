// Função sendo testada
/*
// Testing numbers
module.exports.absolute = function(number) {
  if (number > 0) return number;
  if (number < 0) return -number;
  return 0;
} */
/*
 Espera-se que os teste cubram cada caminho possível. No caso da função absolute, exitem
   3 casos/caminhos possíveis, recebendo um número positivo, negativo ou zero.
*/

const lib = require("../lib");

test("absolute - should return a positive number if input is positive", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});

test("absolute - should return a positive number if input is negative", () => {
  const result = lib.absolute(-1);
  expect(result).toBe(1);
});

test("absolute - should return 0 if input is 0", () => {
  const result = lib.absolute(0);
  expect(result).toBe(0);
});
