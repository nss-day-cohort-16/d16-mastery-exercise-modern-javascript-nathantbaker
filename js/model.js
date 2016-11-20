'use strict';

// Requires
let Render = require("./view"),
    BotName = require("./botModels");
    // {SubBot, BoatBot, SquirrelBot, BigBirdBot, TankBot, CarBot};

let FightLogic = function (userInputs) {
  let Bots = createBots(userInputs);
  console.log({
    Bot1: Bots._1,
    Bot2: Bots._2
  });
  Render.startFight(Bots);
};

function createBots (userInputs) {  // name1, name2, bot1, bot2
  let _1 = Object.create(BotName[userInputs.bot1]);
  _1.name = userInputs.name1;
  let _2 = Object.create(BotName[userInputs.bot2]);
  _2.name = userInputs.name2;
  return {_1, _2};
}

module.exports = FightLogic;