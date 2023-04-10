/* 3 - Dada uma array com dados sobre eleitores, crie uma função que
devolva a quantidade de pessoas abaixo de 30 anos que votaram. */

const totalVeryYoungVotes = () =>
  voters.reduce(
    (acc, curr) => (curr.age < 30 && curr.voted ? acc + 1 : acc),
    0
  );

let voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

console.log(totalVeryYoungVotes()); // 1
