function game(){
 let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
        var result = 'no game';

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


function rpsRound(playerSelection, computerSelection) {

        const playerScoreBoard = document.querySelector('.p-count');
          const computerScoreBoard = document.querySelector('.c-count');
          playerSelection = playerSelection.toLowerCase();
         computerSelection  = computerSelection.toLowerCase();
console.log(computerSelection);
console.log(playerSelection);

        if(playerSelection === computerSelection ){
            result = 'Tie'
        }
        else if(playerSelection == 'rock'){
            if(computerSelection  == 'paper'){
                result = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
  
            }else{
                result = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(playerSelection == 'scissors'){
            if(computerSelection  == 'rock'){
                result = 'Computer Won';
                 computerScore++;
               computerScoreBoard.textContent = computerScore;
            }else{
                result = 'Player Won';
                 playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(playerSelection == 'paper'){
            if(computerSelection  == 'scissors'){
                result = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    return result;


}

const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
  
playerOptions.forEach(option => {
            option.addEventListener('click',function(){ 
const computerSelection = getComputerChoice();
console.log(this.innerText);
console.log(computerSelection);
console.log(rpsRound(this.innerText, computerSelection));

 
console.log(playerScore);
console.log(computerScore);

if( playerScore >= 5 || computerScore >= 5){
  if(playerScore > computerScore){
           // result.style.fontSize = '2rem';
            result = 'You Won The Game'
           // result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
           // result.style.fontSize = '2rem';
            result = 'You Lost The Game';
           // result.style.color = 'red';

       } else {
              result = 'Tie';

}
console.log(result);
}
});
});


}
game();

