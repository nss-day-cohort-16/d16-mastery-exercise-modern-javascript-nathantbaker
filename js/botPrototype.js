'use strict';

// Requires
require('jquery');

// Bot Prototype
let Robot = {

  // Default Stats
  modelId: null,
  name: "Mr. Roboto",
  weapon: "robot fists",
  terrain: "unknown",
  healthRange: [15, 30], // base health range
  damageRange: [5, 10], //  base damage range
  modHealth: 0,
  modDamage: 0,

  // Methods
  getDescription() {
    return `${this.terrain} bot named ${this.name}`;
  },
  getHealth() {
    let start = this.healthRange[0] += this.modHealth;   // Increase min/max heatlh
    let end   = this.healthRange[1] += this.modHealth;  //  by model's modifers
    // Return a random integer between new health range
    return Math.ceil(Math.random()*(end-start+1))+(start-1);
  },
  getDamage() {
    let start = this.damageRange[0] += this.modDamage;   // Increase min/max damage
    let end   = this.damageRange[1] += this.modDamage;  //  by model's modifers
    // Return a random integer between new damage range
    return Math.ceil(Math.random()*(end-start+1))+(start-1);
  }
};

// Create 3 types of bots with unique terrain
let WaterBot  = Object.create(Robot); WaterBot.terrain  = "water";
let FlyingBot = Object.create(Robot); FlyingBot.terrain = "flying";
let GroundBot = Object.create(Robot); GroundBot.terrain = "ground";

module.exports = {WaterBot, FlyingBot, GroundBot};