const allPokemons = [
  { name: "Charizard", weight: 90 },
  { name: "Bulbasaur", weight: 6.9 },
  { name: "Mewtwo", weight: 122 },
  { name: "Mega Beedrill", weight: 65 },
];

allPokemons.map((pokemon) => {
  console.log(pokemon.weight);
});

allPokemons.map((pokemon) => {
  console.log(pokemon.name, pokemon.weight);
});
