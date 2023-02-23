import { pokemons } from "./data.js";
import { dictionary } from "./pokemonDictionary.js";

/*------------Recupera todos os tipos de Pokemón------------*/
// Função apenas para visualização dos tipos antes e depois da tradução
const allTypesOfPokemon = (arrayPokemons) => {
  const allTypes = arrayPokemons.reduce((acc, e) => {
    e.type.map((type) => {
      // Cada elemento de type dentro de cada elemento de pokemon
      if (!acc.includes(type)) {
        // Se o tipo não estiver em allTypes, adiciona
        acc.push(type);
      }
    });
    return acc;
  }, []);

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
  const typesInPortuguese = pokemons.map((element) => {
    return { ...element, type: element.type.map((type) => dictionary[type]) };
  });

  return typesInPortuguese;
};

console.log("----------Recuperando por nome----------");
console.log(pokemonData("charmander"));

console.log("\n---------Pokemóns por tipo--------");
console.log(pokemonsByType("fire"));

console.log("\n--------Antes da tradução--------");
console.log(allTypesOfPokemon(pokemons));

console.log("\n--------Depois da tradução--------");
console.log(allTypesOfPokemon(pokemonTypesInPortuguese()));
