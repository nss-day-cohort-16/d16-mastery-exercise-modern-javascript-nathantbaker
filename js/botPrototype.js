'use strict';

// Requires
require('jquery');

// Bot Prototype
let Robot = {
  name: "Mr. Roboto",
  weapon: "saw",
  terrain: "unknown",
  description() {
    return `${this.terrain} bot named ${this.name}`;
  }
};

// Bot Type 1
let WaterBot = Object.create(Robot);
WaterBot.terrain = "water";

// Bot Type 2
let FlyingBot = Object.create(Robot);
FlyingBot.terrain = "flying";

// Bot Type 3
let GroundBot = Object.create(Robot);
GroundBot.terrain = "ground";

module.exports = {WaterBot, FlyingBot, GroundBot};