// soma(3)(4)(5)
function sum(factor1) {
  return function (factor2) {
    return function (factor3) {
      return factor1 + factor2 + factor3;
    };
  };
}

console.log(sum(3)(4)(5));

// calcular(3)(7)(fn)
// fn -> 3 * 7

function multiplie(number1, number2) {
  return number1 * number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function doSum(number1, number2) {
  return number1 + number2;
}

function calculate(number1) {
  return function (number2) {
    return function (func) {
      if (typeof func === "function") return func(number1, number2);
    };
  };
}

const multiplie2And3 = calculate(2)(3)(multiplie);
console.log(multiplie2And3);

const doMathWith2And3 = calculate(2)(3);
console.log(doMathWith2And3(subtract));
console.log(doMathWith2And3(doSum));
