import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const player = document.getElementById(".player");
const playerScore = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computer = document.getElementById(".computer");
const computerScore = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");
const reset = document.querySelector(".reset-icon");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerscissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".far");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let computerChoice = "";
let computerScoreNum = 0;
let playerScoreNum = 0;

// styling Computer choice
function computerChoiceSelect() {
  // Adding selected style and playerChoice
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = "-- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = "-- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = "-- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = "-- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = "-- Spock";
      break;
    default:
      break;
  }
}

// Reseting selected Style
function resetStyle() {
  allGameIcons.forEach((icon) => icon.classList.remove("selected"));
  stopConfetti();
  removeConfetti();
}

function computerRandomChoice() {
  const randomNum = Math.random();
  if (randomNum < 0.2) computerChoice = "rock";
  else if (randomNum <= 0.4) computerChoice = "paper";
  else if (randomNum <= 0.6) computerChoice = "scissors";
  else if (randomNum <= 0.8) computerChoice = "lizard";
  else computerChoice = "spock";
}

// Check Result, incress Score , update resultText
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) return (resultText.textContent = "It's a tie😅.");
  const choice = choices[playerChoice];
  if (choice.defeats.includes(computerChoice)) {
    resultText.textContent = "You Win 🎊";
    playerScore.textContent = ++playerScoreNum;
    startConfetti();
  } else {
    resultText.textContent = "You Lose 😛";
    computerScore.textContent = ++computerScoreNum;
  }
}

// Call funtcion that calls ohter function
function checkResult(playerChoice) {
  resetStyle();
  computerRandomChoice();
  computerChoiceSelect();
  updateScore(playerChoice);
}

// passing player selection value and styling icons
function select(playerChoice) {
  checkResult(playerChoice);
  // Adding selected style and playerChoice
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = "-- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = "-- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = "-- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = "-- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = "-- Spock";
      break;
    default:
      break;
  }
}
window.selectValue = select;

// Reset All
function resetAll() {
  resetStyle();
  resultText.textContent = "Result";
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  playerScoreNum = 0;
  computerScoreNum = 0;
}
window.resetAll = resetAll;
