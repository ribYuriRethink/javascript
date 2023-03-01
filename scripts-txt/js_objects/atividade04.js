/* 4. Crie uma função para adicionar uma nova chave. Faça um teste
criando uma chave com nome isFun e valor true. */

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const addNewProperty = (obj, property, value) => (obj[property] = value);

console.log(programming);

addNewProperty(programming, "isFun", true);
console.log(programming);
