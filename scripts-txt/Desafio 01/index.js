import { pokemons } from "./data.js";
import { dicionario } from "./traducao.js";

/*------------Recupera todos os tipos de Pokemón------------*/
const getAllTypes = () => {
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
const getPokemonByName = (name) =>
  pokemons.find((e) => e.name === name.toLowerCase());

/*------------Recupera os Pokemóns pelo Tipo------------*/
const getPokemonsByType = (type) => {
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

/*------------Traduz os tipos de cada pokemón------------*/
const translateTypes = () => {
  let type;
  for (let i = 0; i < pokemons.length; i++) {
    for (let j = 0; j < pokemons[i].type.length; j++) {
      pokemons[i].type[j] = dicionario[pokemons[i].type[j]]; //Ex: grass -> dicionario["grass"] = planta
    }
  }
};

console.log("----------Recuperando por nome----------");
console.log(getPokemonByName("charmander"));

console.log("\n---------Pokemóns por tipo--------");
console.log(getPokemonsByType("fire"));

console.log("\n--------Antes da tradução--------");
console.log(getAllTypes());
translateTypes();
console.log("\n--------Depois da tradução--------");
console.log(getAllTypes());
