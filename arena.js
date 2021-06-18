const Pokemon = require('./Pokemon');
const PokemonElectric = require('./PokemonElectric');
const PokemonWater = require('./PokemonWater');
/*
string, boolean, number
type primitif = "contienne la valeur"
const a = 3;
a = 4; // pas le droit !
type non primitif
objet
const a = {value: 3};
a.value = 4; // ok
a = b; // pas le droit !
*/

const pikachu = new PokemonElectric('PikaPika', 22, 46);
const pikachu2 = new Pokemon('PikaPika', 22, 46);
let pikachu3 = pikachu;
pikachu2.name = 'Pikapi';
pikachu3.name = 'Pitacos';
console.log(pikachu.name, pikachu2.name, pikachu3.name); // false

console.log(pikachu === pikachu2); // false
console.log(pikachu === pikachu3); // true

const carapuce = new PokemonWater('Carap', 14, 66);
pikachu3 = carapuce;

pikachu.takeHit(carapuce);
console.log('pikachu', pikachu.life);
carapuce.takeHit(pikachu);
console.log('carapuce', carapuce.life);

console.log(pikachu.isKO());
