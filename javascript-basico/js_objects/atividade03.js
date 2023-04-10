/* 3. Crie uma função para excluir uma chave do objeto. */

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const deleteProperty = (obj, property) => delete obj[property];

console.log(programming);

deleteProperty(programming, "difficulty");
console.log(programming);
