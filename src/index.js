const _ = require('lodash')
const items = [
    { name: 'Alex', age: 15},
    { name: 'Dima', age: 13},
    { name: 'Alex', age: 16},
]

console.log(_.uniqBy(items, 'name'))
console.log('new prodgekt')

const { characters, alive } = require('./app.js')

console.log(characters, alive)

const { loadGame, saveGame } = require('./game.js')

import "./style.css";
