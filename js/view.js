'use strict';

// Requires
require('jquery');

let displayFunction = function (string, botNum) {
  switch(botNum) {
    case 1: $("#bot1").html(string); break;
    case 2: $("#bot2").html(string); break;
  }
};

module.exports = displayFunction;