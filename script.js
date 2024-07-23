document.addEventListener("DOMContentLoaded", () => {
  const user = document.querySelector(".userchoice");
  const computer = document.querySelector(".computerchoice");
  const result = document.querySelector(".result");
  const choices = document.querySelectorAll(".choice");

  let userChoice;
  let computerChoice;
  const choicesArray = ["rock", "paper", "scissors"];

  choices.forEach((choice) =>
    choice.addEventListener("click", (e) => {
      userChoice = e.target.alt;
      user.src = `images/${userChoice}.png`;
      generateComputerChoice();
      getResult();
    })
  );

  function generateComputerChoice() {
    computerChoice =
      choicesArray[Math.floor(Math.random() * choicesArray.length)];
    computer.src = `images/${computerChoice}.png`;
  }
  function getResult() {
    if (userChoice === computerChoice) {
      result.textContent = "Match Draw";
    } else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        result.textContent = "CPU Won!!";
      } else {
        result.textContent = "You Win!!";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        result.textContent = "CPU Won!!";
      } else {
        result.textContent = "You Win!!";
      } 
    } else if(userChoice === "scissors") {
      if (computerChoice === "rock") {
        result.textContent = "CPU Won!!";
      } else {
        result.textContent = "You Win!!";
      }
    }
  }
});
