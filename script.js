function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    const random  = Math.floor(Math.random()*choice.length);
    return choice[random];
}
function theGame() {
    const choice = document.getElementById("userInput").value;
    const result = document.getElementById("result");
    const rand = document.getElementById("comp");
    comp = getComputerChoice()
    

    rand.textContent = "My choice "+ comp +"."; 
    let r 
    if (choice === "Paper"){
        if (comp === "Rock") r = "I WIN!\nGame Over!!";
        else if (comp === "Scissors") r = "YOU WIN!\nCongratulations!!";
        else r = "It's Draw!!";
    }
    else if (choice === "Rock"){
        if (comp === "Paper") r = "I WIN!\nGame Over!!";
        else if (comp === "Scissors") r = "YOU WIN!\nCongratulations!!";
        else r = "It's Draw!!";
    }
    else if (choice === "Scissors"){
        if (comp === "Rock") r = "I WIN!\nGame Over!!";
        else if (comp === "Paper") r = "YOU WIN!\nCongratulations!!";
        else r = "It's Draw!!";
    }   
    result.textContent = r;
}

theGame()
