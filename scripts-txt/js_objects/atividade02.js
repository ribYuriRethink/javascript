/* 2. Crie uma função para alterar o valor do nível de dificuldade
("difficulty"). */

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const newDifficult = (obj, difficulty) => (obj.difficulty = difficulty);

newDifficult(programming, 10);
console.log(programming.difficulty);
