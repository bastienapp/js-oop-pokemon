const Pokemon = require('./Pokemon');

class PokemonElectric extends Pokemon {
  constructor(name, damage, life) {
    super(name, damage, life);
    this.type = 'electric';
  }

  takeHit(opponent) {
    if (opponent.type === 'water') {
      this.life -= opponent.damage * 2;
    } else {
      // this.life -= opponent.damage;
      super.takeHit(opponent);
    }
  }
}

module.exports = PokemonElectric;
