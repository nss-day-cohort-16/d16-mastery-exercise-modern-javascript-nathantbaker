'use strict';
let Bot = require("./botPrototype"); // {WaterBot, FlyingBot, GroundBot}

// Bot Model 1
let SubBot = Object.create(Bot.WaterBot);
SubBot.name = "Submarine Sam";
SubBot.weapon = "torpedos";
SubBot.modHealth = 4;
SubBot.modDamage = 2;

// Bot Model 2
let BoatBot = Object.create(Bot.WaterBot);
BoatBot.name = "Boaty McBoatface";
BoatBot.weapon = "waterproof grenades";
BoatBot.modHealth = 6;
BoatBot.modDamage = 3;

// Bot Model 3
let SquirrelBot = Object.create(Bot.FlyingBot);
SquirrelBot.name = "SquirrelBot";
SquirrelBot.weapon = "nuts";
SquirrelBot.modHealth = 8;
SquirrelBot.modDamage = 4;

// Bot Model 4
let BigBirdBot = Object.create(Bot.FlyingBot);
BigBirdBot.name = "BigBirdBot";
BigBirdBot.weapon = "sonic waves";
BigBirdBot.modHealth = 12;
BigBirdBot.modDamage = 6;

// Bot Model 5
let TankBot = Object.create(Bot.GroundBot);
TankBot.name = "TankBot";
TankBot.weapon = "mega bullets";
TankBot.modHealth = 10;
TankBot.modDamage = 5;

// Bot Model 6
let CarBot = Object.create(Bot.GroundBot);
CarBot.name = "CarBot";
CarBot.weapon = "flames";
CarBot.modHealth = 2;
CarBot.modDamage = 1;

module.exports = {SubBot, BoatBot, SquirrelBot, BigBirdBot, TankBot, CarBot};