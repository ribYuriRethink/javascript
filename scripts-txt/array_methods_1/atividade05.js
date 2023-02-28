/* 
5. Crie uma função, que utilize map(), que receba uma array de objetos.
Uma das propriedades de cada objeto é a propriedade age. A função
deve retornar outra array com 3 dados:
a. a menor idade;
b. a maior idade, e
c. a diferença entre elas.
Dica: use Math. https://www.w3schools.com/js/js_math.asp 
*/
const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

const youngerOlderDiferenceAges = (array) => {
  const ages = [];
  ages.push(Math.min(...array.map((e) => e.age)));
  ages.push(Math.max(...array.map((e) => e.age)));
  ages.push(ages[1] - ages[0]);

  return ages;
};

// teste
console.log(youngerOlderDiferenceAges(input));
// [13, 67, 54];
