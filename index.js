/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let scores = [0, 0];
let roundScores = 0;
let activePlayer = 0;

// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML =
//   "<p>" +
var x = document.querySelector("#score-0").textContent;
console.log(x);

//////////////////////////////////////////////

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", () => {
  // 1 random number
  let dice = Math.floor(Math.random() * 6) + 1;

  // 2 display the result
  let diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "./images/dice-" + dice + ".png";

  // 3 update the round score if the rolled number was not 1

  if (dice !== 1) {
    //add score
    roundScores += dice;
    document.querySelector(
      "#current-" + activePlayer
    ).textContent = roundScores;
  } else {
    //next player
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScores = 0;

    nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", () => {
  // add current score to global scores
  scores[activePlayer] += roundScores;

  // update the UI
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];

  // check if the player won tge game

  if (scores[activePlayer] >= 20) {
    document.querySelector("#name-" + activePlayer).textContent = "winner!";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // next player
    nextPlayer();
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScores = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // document.querySelector(".player-0-panel").classList.remove("active");
  // document.querySelector(".player-1-panel").classList.add("active");

  document.querySelector(".dice").style.display = "none";
}
