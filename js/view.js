'use strict';

// Requires
require('jquery');

let bot1El = $("#bot1"),
    bot2El = $("#bot2"),
    battle = $("#battle"),
    reset  = $("#reset"),
    inputs = $("#inputs"),
    beginButton = $("#beginButton"),
    attack = $("#attack"),
    health1 = $("#bot1-health"),
    health2 = $("#bot2-health"),
    status = $("#status");

let startFight = function (Bots) {
  beginButton.toggleClass("hide"); // hide begin fight button
  attack.toggleClass("hide"); // show fight button
  inputs.toggleClass("hide"); // hide input fields
  reset.toggleClass("hide");  // add reset button to refresh page
  battle.toggleClass("hide"); // show fight div

  // Get Random health based on bots' health ranges
  Bots._1.health = Bots._1.getHealth();
  Bots._2.health = Bots._2.getHealth();

  // Display Bot VS Bot Title
  $("#bot1-title").html(`<h2>A ${Bots._1.model} named ${Bots._1.name}<span class="pull-right">v.s.</span></h2>`);
  $("#bot2-title").html(`<h2>A ${Bots._2.model} named ${Bots._2.name}</h2>`);

  // Health
  health1.html(`<h2 class="health">Health: ${Bots._1.health}</h2>`);
  health2.html(`<h2 class="health">Health: ${Bots._2.health}</h2>`);

  // Display Bot Stats
  $("#bot1-stats").html(`
    <table class="table">
      <tr>
        <th>Terrain</th>
        <th>Weapon</th>
      </tr>
      <tr>
        <td>${Bots._1.terrain}</td>
        <td>${Bots._1.weapon}</td>
      </tr>
    </table>
    `);
  $("#bot2-stats").html(`
    <table class="table">
      <tr>
        <th>Terrain</th>
        <th>Weapon</th>
      </tr>
      <tr>
        <td>${Bots._2.terrain}</td>
        <td>${Bots._2.weapon}</td>
      </tr>
    </table>
    `);
};

let setHealth = function (newHealth1, newHealth2) {
  health1.html(`<h2 class="health">Health: ${newHealth1}</h2>`);
  health2.html(`<h2 class="health">Health: ${newHealth2}</h2>`);
};

let setStatus = function (string) {
  status.html(`<h2 class="status">${string}</h2>`);
};

module.exports = {startFight, setHealth, setStatus};