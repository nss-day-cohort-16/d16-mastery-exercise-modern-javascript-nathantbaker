'use strict';

// Requires
require('jquery');

let displayFunction = function (string) {
  $("#inject").html(string);
};

module.exports = displayFunction;