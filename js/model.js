'use strict';

// Requires
let Render = require("./view"),
    BotName = require("./botModels");
    // {SubBot, BoatBot, SquirrelBot, BigBirdBot, TankBot, CarBot};

let fightLogic = function (userInputs) {
  let Bots = createBots(userInputs); // create bots based on inputs
  Render.startFight(Bots);           // draw inital stats
  $("#attack").click( () => {        // on click update health

    // Set new healths
    Bots._1.health -= Bots._2.getDamage();
    Bots._2.health -= Bots._1.getDamage();
    Render.setHealth(Bots._1.health, Bots._2.health);
    Render.setStatus(`Oh snap! ${Bots._1.name} dealth ${Bots._1.damage} damage and ${Bots._2.name} dealth ${Bots._2.damage} damage.`);

    // Set new health for Bot 2
    console.log("you clicked attack");
  });
};

function createBots (userInputs) {  // name1, name2, bot1, bot2
  let _1 = Object.create(BotName[userInputs.bot1]);
  _1.name = userInputs.name1;
  let _2 = Object.create(BotName[userInputs.bot2]);
  _2.name = userInputs.name2;
  return {_1, _2};
}

module.exports = fightLogic;