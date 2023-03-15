const exec = (func, number1, number2) =>
  typeof func === "function"
    ? func(number1, number2)
    : console.log("Deve passar uma função");

const sumOnTerminal = (number1, number2) => console.log(number1 + number2);
const subtractOnTerminal = (number1, number2) => console.log(number1 - number2);

exec(sumOnTerminal, 5, 5);
exec(subtractOnTerminal, 20, 5);
