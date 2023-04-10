/* 5. Crie uma função para exibir no console todas as linguagens de
programação armazenadas na chave "languages". */

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const printLanguages = (obj) => console.log(obj.languages.join(", "));

printLanguages(programming);
