'use strict';

// Requires
require('jquery');

let displayFunction = function (bot1, bot2) {
  $("#inject").html(bot1.description());
};

module.exports = displayFunction;