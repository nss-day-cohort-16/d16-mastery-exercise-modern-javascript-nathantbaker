'use strict';
let Bot = require("./botPrototype"); // {WaterBot, FlyingBot, GroundBot}

// Bot Model 1
let SubBot = Object.create(Bot.WaterBot);
SubBot.name = "Submarine Sam";
SubBot.weapon = "torpedos";

// Bot Model 1
let BoatBot = Object.create(Bot.WaterBot);
BoatBot.name = "Boaty McBoatface";
BoatBot.weapon = "waterproof grenades";

module.exports = {SubBot, BoatBot};