import { pokemons } from "./data";
import { dictionary } from "./pokemonDictionary";
import { Pokemon } from "./data";

/*------------Recupera todos os tipos de Pokemón------------*/
// Função apenas para visualização dos tipos antes e depois da tradução
const allTypesOfPokemon = (arrayPokemons: Pokemon[]): string[] => {
  const allTypes = arrayPokemons.reduce((acc: string[], e) => {
    e.type.map((type: string) => {
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
const pokemonData = (name: string): Pokemon | undefined =>
  pokemons.find((e) => e.name === name.toLowerCase());

/*------------Recupera os Pokemóns pelo Tipo------------*/
const pokemonsByType = (type: string): string[] => {
  type = type.toLowerCase();
  const pokemonsSameType: string[] = [];

  pokemons.map((pokemon) => {
    if (pokemon.type.find((e) => e === type)) {
      pokemonsSameType.push(pokemon.name);
    }
  });

  return pokemonsSameType;
};

/*------------Traduz os tipos de cada pokemón para o portugues------------*/
const pokemonTypesInPortuguese = (): Pokemon[] =>
  pokemons.map((pokemon) => ({
    ...pokemon,
    type: pokemon.type.map((type) => dictionary[type]),
  }));

console.log("----------Recuperando por nome----------");
console.log(pokemonData("charmander"));

console.log("\n---------Pokemóns por tipo--------");
console.log(pokemonsByType("fire"));

console.log("\n--------Antes da tradução--------");
console.log(allTypesOfPokemon(pokemons));

console.log("\n--------Depois da tradução--------");
console.log(allTypesOfPokemon(pokemonTypesInPortuguese()));
