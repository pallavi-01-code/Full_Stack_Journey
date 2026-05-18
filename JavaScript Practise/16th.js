let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");       // add new
        body.classList.remove("light");   // remove old
        //document.querySelector("body").style.backgroundColor = "#0D0D0D";
    } else {
        currMode = "light";
        body.classList.add("light");     // add new
        body.classList.remove("dark");   // remove old
        // document.querySelector("body").style.backgroundColor = "white";
    }
});

//to track user and computer score
let userScore = 0;
let compScore = 0;

//to access choices
const choices = document.querySelectorAll(".choice");
//to access msg
const msg = document.querySelector("#msg");

//to access user score
const userScorePara = document.querySelector("#user-score");
//to access comp score
const compScorePara = document.querySelector("#comp-score");

//for score
const history = document.querySelector("#history");

// for reset
let resetBtn = document.querySelector("#reset");

//computer choice calculate
const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"]; 
    //rock, paper, scissors
    const randomInd = Math.floor(Math.random() * 3);
    return options[randomInd];
}


//tie game condition
const drawGame = () => {
    //console.log("It was a Tie");
    msg.innerText = "It's a Tie";
    msg.style.backgroundColor = "rgb(239, 206, 22)";
    msg.style.color = "black";
    
    let li = document.createElement("li");
    li.innerText = "Draw Game";
    history.appendChild(li);
}

//results and winner display
const showWinner = (userWin, userChoice, compChoice) => {
    let resultText = "";
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("You win")
       resultText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "rgb(33, 108, 28)";
        msg.style.color = "white";
    }
    else {
        //console.log("OOPS! Better luck next time");
        compScore++;
        compScorePara.innerText = compScore;
        resultText = `OOPS! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "rgb(197, 84, 84)";
        msg.style.color = "white";
    }
      msg.innerText = resultText;

    // Add to history of score board
    let li = document.createElement("li");
    li.innerText = resultText;
    history.appendChild(li);
}


//play the game and checking the computer and user choice
const playGame = (userChoice) => {
    console.log("User choice: ", userChoice);
    //To generate conpueter choice -> modular way pf programming for each function separate
    const compChoice = genCompChoice();
    console.log("Computer Choice: ", compChoice);

    if(userChoice == compChoice){
        //draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "Rock"){
            //scissors or paper
            userWin = compChoice === "Paper" ? false : true;
        }else if(userChoice === "Paper"){
            //scissors or rock
            userWin = compChoice === "Scissors" ? false : true;
        } else{
             //rock or paper
             userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

//checking the choice
choices.forEach((choice) => {
    //console.log(choice)
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        //console.log(userChoice + " was clicked");
        playGame(userChoice);
    })
})

//reset button
resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;

    userScorePara.innerText = 0;
    compScorePara.innerText = 0;

    history.innerHTML = ""; // clear history

    msg.innerText = "Game Reset! Play Again";
    msg.style.backgroundColor = "#081b31";
    msg.style.color = "white";
});
