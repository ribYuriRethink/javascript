import { pokemons } from "./data.js";
import { dictionary } from "./pokemonDictionary.js";

/*------------Recupera todos os tipos de Pokemón------------*/
// Função apenas para visualização dos tipos antes e depois da tradução
const allTypesOfPokemon = () => {
  const allTypes = [];

  for (let i = 0; i < pokemons.length; i++) {
    for (let j = 0; j < pokemons[i].type.length; j++) {
      if (!allTypes.find((e) => e == pokemons[i].type[j])) {
        // Se o tipo não estiver em allTypes, adiciona
        allTypes.push(pokemons[i].type[j]);
      }
    }
  }
  return allTypes;
};

/*------------Recupera o Pokemón pelo Nome------------*/
const pokemonData = (name) =>
  pokemons.find((e) => e.name === name.toLowerCase());

/*------------Recupera os Pokemóns pelo Tipo------------*/
const pokemonsByType = (type) => {
  type = type.toLowerCase();
  const pokemonsSameType = [];

  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].type.find((e) => e === type)) {
      pokemonsSameType.push(pokemons[i].name);
    }
  }
  if (pokemonsSameType.length == 0) {
    return "Não há pokemons desse tipo na base de dados.";
  }

  return pokemonsSameType;
};

/*------------Traduz os tipos de cada pokemón para o portugues------------*/
const translateTypesToPortuguese = () => {
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
translateTypesToPortuguese();
console.log("\n--------Depois da tradução--------");
console.log(allTypesOfPokemon());
