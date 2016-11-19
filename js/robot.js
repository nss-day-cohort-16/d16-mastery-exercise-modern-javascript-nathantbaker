'use strict';

// Requires
require('jquery');

// Robot function
let Robot = {
  type: "standard",
  weapon: "saw",
  phrase() {
    return `${this.type} robot with a ${this.weapon}`;
  }
};
// a ---> Object.prototype ---> null

// var robotType = Object.create(Robot);

module.exports = Robot;