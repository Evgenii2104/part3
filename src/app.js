const characters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'маг', health: 0},
    {name: 'лучник', health: 0},
  ];
  
  const alive = characters.filter(item => item.health > 0);

module.exports = { characters, alive }

console.log('app worked')

const game = new Game();
game.start();

export {Game, GameSavingData, readGameSaving, writeGameSaving}