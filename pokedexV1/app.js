// Pokemon instances: id; species; description; height; weight; gender; catagory; abilities; types; weakenesses
const pokemon = 
[
  {
    "id": 1,
    "species": "Bulbasaur",
    "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "height": 7,
    "weight": 69,
    "gender": "87.5% male / 12.5% female",
    "category": "Seed Pokémon",
    "abilties": ["Overgrow"],
    "types": ["Grass", "Poison"],
    "weaknesses": ["Fire", "Ice", "Flying", "Psychic"],
    "evolutions": ["Ivysaur"]
  },
  {
    "id": 2,
    "species": "Ivysaur",
    "description": "The bud on its back becomes large and leafy. When it radiates aroma, that aroma soothes the emotions of people.",
    "height": 10,
    "weight": 130,
    "gender": "87.5% male / 12.5% female",
    "category": "Seed Pokémon",
    "abilties": ["Overgrow"],
    "types": ["Grass", "Poison"],
    "weaknesses": ["Fire", "Ice", "Flying", "Psychic"],
    "evolutions": ["Venusaur"]
  },
  {
    "id": 3,
    "species": "Venusaur",
    "description": "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    "height": 20,
    "weight": 1000,
    "gender": "87.5% male / 12.5% female",
    "category": "Seed Pokémon",
    "abilties": ["Overgrow"],
    "types": ["Grass", "Poison"],
    "weaknesses": ["Fire", "Ice", "Flying", "Psychic"],
    "evolutions": []
  },
  {
    "id": 4,
    "species": "Charmander",
    "description": "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
    "height": 6,
    "weight": 85,
    "gender": "87.5% male / 12.5% female",
    "category": "Lizard Pokémon",
    "abilties": ["Blaze"],
    "types": ["Fire"],
    "weaknesses": ["Water", "Ground", "Rock"],
    "evolutions": ["Charmeleon"]
  },
  {
    "id": 5,
    "species": "Charmeleon",
    "description": "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    "height": 11,
    "weight": 190,
    "gender": "87.5% male / 12.5% female",
    "category": "Flame Pokémon",
    "abilties": ["Blaze"],
    "types": ["Fire"],
    "weaknesses": ["Water", "Ground", "Rock"],
    "evolutions": ["Charizard"]
  },
  {
    "id": 6,
    "species": "Charizard",
    "description": "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
    "height": 17,
    "weight": 905,
    "gender": "87.5% male / 12.5% female",
    "category": "Flame Pokémon",
    "abilties": ["Blaze"],
    "types": ["Fire", "Flying"],
    "weaknesses": ["Water", "Electric", "Rock"],
    "evolutions": []
  },
  {
    "id": 7,
    "species": "Squirtle",
    "description": "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
    "height": 5,
    "weight": 90,
    "gender": "87.5% male / 12.5% female",
    "category": "Tiny Turtle Pokémon",
    "abilties": ["Torrent"],
    "types": ["Water"],
    "weaknesses": ["Electric", "Grass"],
    "evolutions": ["Wartortle"]
  },
  {
    "id": 8,
    "species": "Wartortle",
    "description": "Often hides in its shell, then strikes back with spouts of water at every opportunity.",
    "height": 10,
    "weight": 225,
    "gender": "87.5% male / 12.5% female",
    "category": "Turtle Pokémon",
    "abilties": ["Torrent"],
    "types": ["Water"],
    "weaknesses": ["Electric", "Grass"],
    "evolutions": ["Blastoise"]
  },
  {
    "id": 9,
    "species": "Blastoise",
    "description": "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.",
    "height": 16,
    "weight": 855,
    "gender": "87.5% male / 12.5% female",
    "category": "Shellfish Pokémon",
    "abilties": ["Torrent"],
    "types": ["Water"],
    "weaknesses": ["Electric", "Grass"],
    "evolutions": []
}]

//get elements & user inputs from the html document
let speciesHeading = document.getElementById("species-heading");
let speciesText = document.getElementById("species-text");
let descriptionHeading = document.getElementById("description-heading");
let descriptionText = document.getElementById("description-text");

let userInput = document.getElementById('input');
let button = document.getElementById('button');

// input: pokedex ID number
// returns: that pokemon as an object
function getPokemon(id){
    return pokemon.at(id - 1);
}


// get userInput:

