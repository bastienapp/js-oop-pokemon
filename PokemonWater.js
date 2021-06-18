const Pokemon = require('./Pokemon');

class PokemonWater extends Pokemon {
  constructor(name, damage, life) {
    super(name, damage, life);
    this.type = 'water';
  }

  takeHit(opponent) {
    if (opponent.type === 'electric') {
      this.life -= opponent.damage / 2;
    } else {
      // this.life -= opponent.damage;
      super.takeHit(opponent);
    }
  }
}

module.exports = PokemonWater;
