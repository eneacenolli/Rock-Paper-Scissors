"use strict";
const computerEl = document.querySelector(".img_comp");
const btn = document.querySelector(".btn");
const final_winner = document.querySelector(".final_winner");
const final_result = document.querySelector(".final_result");

final_winner.classList.toggle("hidden");
btn.classList.toggle("hidden");
final_result.classList.toggle("hidden");

//function to set computer choise
const computerPlay = function () {
  const choice = ["rock", "paper", "scissors"];

  //let index = Math.floor(Math.random() * choice.length);
  let index = Math.trunc(Math.random() * 3) + 1;
  return choice[index];
};

let player_sc = 0;
let computer_sc = 0;
let draw = 0;
let games_no = 0;

let playerSelection = " ";

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    games_no++;
    return "It was a Draw.";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      games_no++;
      return "p1";
    } else {
      games_no++;
      return "p2";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      games_no++;
      return "p1";
    } else {
      games_no++;
      return "p2";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      games_no++;
      return "p1";
    } else {
      games_no++;
      return "p2";
    }
  }
};

let playerSelecArray = document.querySelectorAll(".player_choice");

//player choice

playerSelecArray.forEach((el) => {
  el.addEventListener("click", function () {
    playerSelection = el.id;
    const pl_ch = (document.getElementById(
      "player_choice"
    ).textContent = `Player choice is ${playerSelection}`);

    //Computer choice

    const choice = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * choice.length);
    let computerSelection = choice[index];
    document.getElementById(
      "comp_choice"
    ).textContent = `Computer choice is ${computerSelection}`;

    document.querySelector(".img_comp").src = `img-${index}.png`;

    const winner = playRound(playerSelection, computerSelection);
    if (winner === "p1") {
      player_sc += 1;
    }
    if (winner === "p2") {
      computer_sc += 1;
    }
    if (winner === "It was a Draw.") {
      draw += 1;
    }

    if (games_no > 4) {
      final_result.classList.toggle("hidden");
      final_winner.classList.toggle("hidden");
      btn.classList.toggle("hidden");
      if (player_sc === computer_sc) {
        final_winner.textContent = "No Winner";
        final_result.textContent = `Player final score ${player_sc}  VS  Computer final score ${computer_sc} and ${draw} Draws`;

        document.getElementById("image_image_comp").classList.toggle("hidden");
        document.querySelector(".img_player").classList.toggle("hidden");
        document.querySelector(".computer_score").classList.toggle("hidden");
      } else if (player_sc > computer_sc) {
        final_winner.textContent = "Player is the winner";
        final_result.textContent = `Player final score ${player_sc}  VS  Computer final score ${computer_sc} and ${draw} Draws`;

        document.getElementById("image_image_comp").classList.toggle("hidden");
        document.querySelector(".img_player").classList.toggle("hidden");
        document.querySelector(".computer_score").classList.toggle("hidden");
      } else {
        final_winner.textContent = "Computer is the winner.";
        final_result.textContent = `Player final score ${player_sc}  VS  Computer final score ${computer_sc} and ${draw} Draws`;

        document.getElementById("image_image_comp").classList.toggle("hidden");
        document.querySelector(".img_player").classList.toggle("hidden");
        document.querySelector(".computer_score").classList.toggle("hidden");
      }
    }
    document.getElementById(
      "player_score"
    ).textContent = `Player score ${player_sc}`;
    document.getElementById(
      "comp_score"
    ).textContent = `Computer score ${computer_sc}`;
  });
});

btn.addEventListener("click", function () {
  games_no = 0;
  player_sc = 0;
  computer_sc = 0;
  draw = 0;
  final_winner.classList.toggle("hidden");
  final_result.classList.toggle("hidden");
  btn.classList.toggle("hidden");
  document.getElementById(
    "player_score"
  ).textContent = `Player score ${player_sc}`;
  document.getElementById(
    "comp_score"
  ).textContent = `Computer score ${computer_sc}`;

  const pl_ch = (document.getElementById("player_choice").textContent = ` `);

  document.getElementById("comp_choice").textContent = ` `;
  document.getElementById("image_image_comp").classList.remove("hidden");
  document.querySelector(".img_player").classList.remove("hidden");
  document.querySelector(".computer_score").classList.remove("hidden");
});
