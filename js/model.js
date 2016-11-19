'use strict';

// Requires
require("./view");
let Bot = require("./bots");

let test = Bot.WaterBot.description();
$("#inject").html(test);
