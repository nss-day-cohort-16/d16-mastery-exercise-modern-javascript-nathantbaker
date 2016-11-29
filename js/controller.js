'use strict';

// Requires
require("../sass/style.scss");
let fightLogic = require("./model");

// Object to collect user inputs
let userInputs = {
  name1: null,
  name2: null,
  bot1: null,
  bot2: null
};

// Event Listeners for Text Fields and Select Menus
let name1   = $("#name1"),
    name2   = $("#name2"),
    select1 = $("#select1"),
    select2 = $("#select2"),
    beginButton  = $("#beginButton");

name1.keyup( () => {
  userInputs.name1 = name1.val();
});

name2.keyup( () => {
  userInputs.name2 = name2.val();
});

select1.change(function() {
  userInputs.bot1 = $(this).val();
});

select2.change(function() {
  userInputs.bot2 = $(this).val();
});

// Listen for button click
beginButton.click( () => {
  validateForm();
});

// Listen for enter key
$(document).keypress( e => {
    if(e.which == 13) {
      validateForm();
    }
});

// Form Validation
 let validateForm = () => {
  let array = Object.values(userInputs);
    if (array[0] === null || array[1] === null || array[2] === null || array[3] === null) {
      alert("Please set a name and bot type for both bots first.");
    } else {
      fightLogic(userInputs);
    }
};