class Pokemon {
  constructor(nameValue, damageValue, lifeValue) {
    this.type = 'normal';
    this.name = nameValue;
    this.damage = damageValue;
    this.life = lifeValue;
  }

  takeHit(opponent) {
    this.life -= opponent.damage;
  }

  isKO() {
    return this.life <= 0;
  }
}

module.exports = Pokemon;
