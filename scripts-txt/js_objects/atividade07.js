/* 7. Crie uma função para exibir no console todos os valores do objeto. */

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const printAllValues = (obj) => console.log(Object.values(obj));

printAllValues(programming);
