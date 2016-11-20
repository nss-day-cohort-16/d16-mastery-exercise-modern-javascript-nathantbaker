'use strict';

// Requires
let Render = require("./view"),
    BotName = require("./botModels");
    // {SubBot, BoatBot, SquirrelBot, BigBirdBot, TankBot, CarBot};

let FightLogic = function (userInputs) {
  let newBots = createBots(userInputs);
  console.log({
    Bot1: newBots.Bot1,
    Bot2: newBots.Bot2
  });
  let label1 = newBots.Bot1.getDescription();
  let label2 = newBots.Bot2.getDescription();
  Render(`<h2>A ${label1}</h2>`, 1);
  Render(`<h2>A ${label2}</h2>`, 2);
};

function createBots (userInputs) {  // name1, name2, bot1, bot2
  let Bot1 = Object.create(BotName[userInputs.bot1]);
  Bot1.name = userInputs.name1;
  let Bot2 = Object.create(BotName[userInputs.bot2]);
  Bot2.name = userInputs.name2;
  return {Bot1, Bot2};
}

module.exports = FightLogic;