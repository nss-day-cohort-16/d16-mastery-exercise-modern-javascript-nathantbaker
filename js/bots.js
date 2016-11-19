'use strict';

// Requires
require('jquery');

// Robot prototype
let Robot = {
  name: "Mr. Roboto",
  weapon: "saw",
  terrain: "unknown",
  description() {
    return `${this.terrain} bot named ${this.name}`;
  }
};

// Robot Type 1
let WaterBot = Object.create(Robot);
WaterBot.terrain = "water";

// Robot Type 2
let FlyingBot = Object.create(Robot);
FlyingBot.terrain = "flying";

// Robot Type 3
let GroundBot = Object.create(Robot);
GroundBot.terrain = "ground";

console.log("WaterBot:", WaterBot);

module.exports = {WaterBot, FlyingBot, GroundBot};