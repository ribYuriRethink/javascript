import { pokemons } from "./data.js";
import { dictionary } from "./pokemonDictionary.js";

/*------------Recupera todos os tipos de Pokemón------------*/
const allTypesOfPokemon = () => {
  const allTypes = [];

  pokemons.map((e) =>
    e.type.map((type) => {
      // Cada elemento de type dentro de cada elemento de pokemon
      if (!allTypes.find((e) => e == type)) {
        // Se o tipo não estiver em allTypes, adiciona
        allTypes.push(type);
      }
    })
  );

  return allTypes;
};

/*------------Recupera o Pokemón pelo Nome------------*/
const pokemonData = (name) =>
  pokemons.find((e) => e.name === name.toLowerCase());

/*------------Recupera os Pokemóns pelo Tipo------------*/
const pokemonsByType = (type) => {
  type = type.toLowerCase();
  const pokemonsSameType = [];

  pokemons.map((element) => {
    if (element.type.find((e) => e === type)) {
      pokemonsSameType.push(element.name);
    }
  });

  return pokemonsSameType;
};

/*------------Traduz os tipos de cada pokemón para o portugues------------*/
const pokemonTypesInPortuguese = () => {
  for (let i = 0; i < pokemons.length; i++) {
    for (let j = 0; j < pokemons[i].type.length; j++) {
      pokemons[i].type[j] = dictionary[pokemons[i].type[j]]; //Ex: grass -> dictionary["grass"] = planta
    }
  }
};

console.log("----------Recuperando por nome----------");
console.log(pokemonData("charmander"));

console.log("\n---------Pokemóns por tipo--------");
console.log(pokemonsByType("fire"));

console.log("\n--------Antes da tradução--------");
console.log(allTypesOfPokemon());
pokemonTypesInPortuguese();
console.log("\n--------Depois da tradução--------");
console.log(allTypesOfPokemon());
