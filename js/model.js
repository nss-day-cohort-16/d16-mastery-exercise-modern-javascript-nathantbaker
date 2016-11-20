'use strict';

// Requires
let Display = require("./view"),
    BotName = require("./botModels");
    // {SubBot, BoatBot, SquirrelBot, BigBirdBot, TankBot, CarBot};

let health = BotName.SubBot.getHealth();
let damage = BotName.SubBot.getDamage();
let description = BotName.SubBot.getDescription();
Display(`A ${description} has a health of ${health} and deals ${damage} damage.`, 1);