'use strict';

// Requires
let Render = require("./view"),
    BotName = require("./botModels");

let attack = $("#attack");

let fightLogic = userInputs => {
  let Bots = createBots(userInputs); // create bots based on inputs
  Render.startFight(Bots);           // draw inital stats
  attack.click( () => {        // on click, update health
    // Set new healths
    Bots._1.health -= Bots._2.getDamage();
    Bots._2.health -= Bots._1.getDamage();
    // force anything less than 0 to 0.
    if (Bots._1.health < 0) { Bots._1.health = 0; }
    if (Bots._2.health < 0) { Bots._2.health = 0; }
    // Render updated health
    Render.setHealth(Bots._1.health, Bots._2.health);
    // Declare the winner if there is one
    if (Bots._1.health === 0 || Bots._2.health === 0) {
      attack.toggleClass("hide");
      if (Bots._1.health === 0 && Bots._2.health === 0) {
        Render.setStatus(`<h2 class="winner">Everyone died :(</h2>`);
      } else if (Bots._1.health === 0) {
        Render.setStatus(`<h2 class="winner">The ${Bots._2.model} defeated the ${Bots._1.model} with its ${Bots._2.weapon}!</h2>`);
      } else if (Bots._2.health === 0) {
        Render.setStatus(`<h2 class="winner">The ${Bots._1.model} defeated the ${Bots._2.model} with its ${Bots._1.weapon}!</h2>`);      }
    } else {
      Render.setStatus(`Oh snap! ${Bots._1.name} has dealt ${Bots._1.damage} damage and ${Bots._2.name} has dealt ${Bots._2.damage} damage.`);
    }
  });
};

let createBots = userInputs => {  // name1, name2, bot1, bot2
  let _1 = Object.create(BotName[userInputs.bot1]);
  _1.name = userInputs.name1;
  let _2 = Object.create(BotName[userInputs.bot2]);
  _2.name = userInputs.name2;
  return {_1, _2};
};

module.exports = fightLogic;