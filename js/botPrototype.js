'use strict';

// Requires
require('jquery');

// Bot Prototype
let Robot = {

  // Default Stats
  model: "Prototype",
  name: "Mr. Roboto",
  weapon: "robot fists",
  terrain: "unknown",
  healthRange: [15, 30], // base health range
  damageRange: [5, 10], //  base damage range
  health: 0,
  damage: 0,
  modHealth: 0,
  modDamage: 0,

  // Methods
  getDescription() {
    return `${this.model} bot named ${this.name}`;
  },
  getHealth() {
    let start = this.healthRange[0] += this.modHealth;   // Increase min/max heatlh
    let end   = this.healthRange[1] += this.modHealth;  //  by model's modifers
    // Return a random integer between new health range
    let newHealth = Math.ceil(Math.random()*(end-start+1))+(start-1);
    this.health = newHealth; // store current health
    return newHealth;
  },
  getDamage() {
    let start = this.damageRange[0] += this.modDamage;   // Increase min/max damage
    let end   = this.damageRange[1] += this.modDamage;  //  by model's modifers
    // Return a random integer between new damage range
    let newDamage = Math.ceil(Math.random()*(end-start+1))+(start-1);
    this.damage = newDamage; // store current damage
    return newDamage;
  }
};

// Create 3 types of bots with unique terrain
let WaterBot  = Object.create(Robot); WaterBot.terrain  = "water";
let FlyingBot = Object.create(Robot); FlyingBot.terrain = "flying";
let GroundBot = Object.create(Robot); GroundBot.terrain = "ground";

module.exports = {WaterBot, FlyingBot, GroundBot};