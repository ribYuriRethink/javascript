/* 5 - A partir da array fornecida (voters), crie uma função que retorne o
número total de eleitores jovens (numYoungPeople) e o número de
eleitores jovens que votaram (numYoungVotes). O mesmo para eleitores
de meia idade (maduros) e mais velhos (sêniores).
 */

const votersResults = () =>
  voters.reduce(
    (acc, curr) => {
      if (curr.age < 30) {
        acc.numYoungPeople++;
        if (curr.voted) acc.numYoungVotes++;
      } else if (curr.age < 40) {
        acc.numMidsPeople++;
        if (curr.voted) acc.numMidVotesPeople++;
      } else {
        acc.numOldsPeople++;
        if (curr.voted) acc.numOldVotesPeople++;
      }
      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  ); // seu código aqui

const voters = [
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

console.log(votersResults()); // Returned value shown below:
/*
{ numYoungVotes: 1, // número de eleitores jovens que votaram
numYoungPeople: 4, // número de eleitores jovens
numMidVotesPeople: 3, // número de eleitores maduros que votaram
numMidsPeople: 4, // número de eleitores maduros
numOldVotesPeople: 3, // número de eleitores sêniores que votaram
numOldsPeople: 4 // número de eleitores sêniores
}
*/
