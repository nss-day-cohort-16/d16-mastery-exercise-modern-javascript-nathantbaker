'use strict';

// Requires
require("../sass/style.scss");
let beginFight = require("./model");

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
  console.log("userInputs.name1:", userInputs.name1);
});

name2.keyup( () => {
  userInputs.name2 = name2.val();
  console.log("userInputs.name2:", userInputs.name2);
});

select1.change(function() {
  userInputs.bot1 = $(this).val();
  console.log("userInputs.bot1", userInputs.bot1);
});

select2.change(function() {
  userInputs.bot2 = $(this).val();
  console.log("userInputs.bot2", userInputs.bot2);
});

// Listen for button click
beginButton.click( () => {
  validateForm();
});

// Listen for enter key
$(document).keypress(function(e) {
    if(e.which == 13) {
      validateForm();
    }
});

// Form Validation
 function validateForm() {
  let array = Object.values(userInputs);
    if (array[0] || array[1] || array[2] || array[3] !== null) {
      beginFight(userInputs);
    } else {
      alert("Please set a name and bot type for both bots first.");
    }
}