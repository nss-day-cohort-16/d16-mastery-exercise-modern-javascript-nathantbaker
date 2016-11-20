'use strict';

// Requires
require("../sass/style.scss");
let FightLogic = require("./model");

// Object to collect user inputs
let userInputs = {
  name1: null,
  name2: null,
  bot1: null,
  bot2: null
};

// Event Listeners for Text Fields and Select Menus

let inputs  = $("#inputs"),
    name1   = $("#name1"),
    name2   = $("#name2"),
    select1 = $("#select1"),
    select2 = $("#select2"),
    fight   = $("#fight"),
    attack  = $("#attack"),
    battle  = $("#battle"),
    reset   = $("#reset");


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

// Form Validation
fight.click( () => {
  let array = Object.values(userInputs);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === null) {
      alert("Please set a name and bot type for both bots first.");
      break;
    } else {
      beginFight();
      break;
    }
  }
});

let beginFight = () => {
  fight.html("Attack").attr("id", "attack"); // give button new text and different id.
  inputs.toggleClass("hide"); // hide input fields
  reset.toggleClass("hide");  // add reset button to refresh page
  battle.toggleClass("hide"); // show fight div
  FightLogic(userInputs);
  // call fight logic from model
  // hide inputs
  // add small new fight button
};