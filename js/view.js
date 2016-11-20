'use strict';

// Requires
require('jquery');

let renderFunction = function (string, botNum) {
  switch(botNum) {
    case 1: $("#bot1").prepend(string); break;
    case 2: $("#bot2").prepend(string); break;
  }
};

module.exports = renderFunction;