let userScore = 0;
let aiScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const aiScorepara = document.querySelector("#ai-score")

const aigenChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx] ;
}

const drawGame = () =>{
   console.log("Game was draw");
   msg.innerText = "Game was Draw. Play Again";
   msg.style.backgroundColor = "#2e2727";
}


const showWinner = (userWin , userChoice, aiChoice) => {
if(userWin){
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You Win. ${userChoice} beats ${aiChoice}`;
    msg.style.backgroundColor = "Green";
}
else{
    aiScore++;
    aiScorepara.innerText = aiScore;
    msg.innerText = `You lose. ${aiChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
}
}

const playgame = (userChoice) => {

 const aiChoice = aigenChoice();
   

    if(userChoice === aiChoice){
       drawGame();
    } else {
       
        let userWin = true;
          if(userChoice === "rock"){
            userWin = aiChoice === "paper" ? false : true;
        }
          else if(userChoice === "paper") {
            userWin = aiChoice === "scissors" ? false : true ;
        }
        else{
            userWin = aiChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, aiChoice);
    }
}; 

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
         playgame(userChoice);   
         });
});