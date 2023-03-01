/* 1. Crie uma função para adicionar uma nova linguagem à chave
"languages". */

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const addNewLanguage = (obj, language) => obj.languages.push(language);
addNewLanguage(programming, "Java");
console.log(programming.languages);
