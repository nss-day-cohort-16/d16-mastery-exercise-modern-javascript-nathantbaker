'use strict';
let Bot = require("./botPrototype"); // {WaterBot, FlyingBot, GroundBot}

// Bot Model 1
let SubBot = Object.create(Bot.WaterBot);
SubBot.name = "Submarine Sam";
SubBot.weapon = "torpedos";

// Bot Model 2
let BoatBot = Object.create(Bot.WaterBot);
BoatBot.name = "Boaty McBoatface";
BoatBot.weapon = "waterproof grenades";

// Bot Model 3
let SquirrelBot = Object.create(Bot.FlyingBot);
SquirrelBot.name = "SquirrelBot";
SquirrelBot.weapon = "nuts";

// Bot Model 4
let BigBirdBot = Object.create(Bot.FlyingBot);
BigBirdBot.name = "BigBirdBot";
BigBirdBot.weapon = "sonic waves";

// Bot Model 5
let TankBot = Object.create(Bot.GroundBot);
TankBot.name = "TankBot";
TankBot.weapon = "mega bullets";

// Bot Model 6
let CarBot = Object.create(Bot.GroundBot);
CarBot.name = "CarBot";
CarBot.weapon = "flames";

module.exports = {SubBot, BoatBot, SquirrelBot, BigBirdBot, TankBot, CarBot};