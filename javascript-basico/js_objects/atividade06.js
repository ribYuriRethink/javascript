/* 6. Crie uma função para exibir no console o nome de todas as chaves
do objeto. */

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const printAllProperties = (obj) => console.log(Object.keys(obj));

printAllProperties(programming);
