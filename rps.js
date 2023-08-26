function getComputerChoice () {

var textArray = [
    "rock",
    "paper",
    "scissors"
];
var randomNumber = Math.floor(Math.random()*textArray.length);
var randomElement = textArray[randomNumber];
return randomElement;
}
console.log(getComputerChoice());


function rpsRound(playerSelection, computerSelection) {

        var result = 'no game';
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        playerSelection = playerSelection.toLowerCase();
        computerSelection  = computerSelection.toLowerCase();
        if(playerSelection === computerSelection ){
            result = 'Tie'
        }
        else if(playerSelection == 'rock'){
            if(computerSelection  == 'paper'){
                result = 'Computer Won';
//                computerScore++;
  //              computerScoreBoard.textContent = computerScore;
  
            }else{
                result = 'Player Won'
    //            playerScore++;
      //          playerScoreBoard.textContent = playerScore;
            }
        }
        else if(playerSelection == 'scissors'){
            if(computerSelection  == 'rock'){
                result = 'Computer Won';
        //        computerScore++;
          //      computerScoreBoard.textContent = computerScore;
            }else{
                result = 'Player Won';
            //    playerScore++;
              //  playerScoreBoard.textContent = playerScore;
            }
        }
        else if(playerSelection == 'paper'){
            if(computerSelection  == 'scissors'){
                result = 'Computer Won';
              //  computerScore++;
            //    computerScoreBoard.textContent = computerScore;
            }else{
                result = 'Player Won';
              //  playerScore++;
              //  playerScoreBoard.textContent = playerScore;
            }
        }
    return result;


}
function game(){

for (var i = 0; i < 5; i++) {
const playerSelection = prompt();
const computerSelection = getComputerChoice();
console.log(rpsRound(playerSelection, computerSelection));

}

}
game();
