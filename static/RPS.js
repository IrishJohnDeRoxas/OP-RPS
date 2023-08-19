let currentPlayerScore = 1;
let currentComputerScore = 1;

const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const title = document.getElementById('title');
const winner = document.getElementById('winner');
const restartButton = document.getElementById('restart-button');

const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');

const modal = document.getElementById('modal-container');

const computerOptions = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.option');

function showRestart(){
    modal.classList.toggle('show');
}
function computerChoice(){
    let index = Math.floor(Math.random()*3);
    return (computerOptions[index]);
}



function updateScore(playerChoice, computerChoice){
    winner.innerText = ''
    console.log(playerChoice+computerChoice)
    switch(playerChoice+computerChoice){
        case 'rockscissors':
            console.log('rockscissors')
        case 'scissorspaper':
        case 'paperrock':
            let score1 = currentPlayerScore++
            playerScore.innerText = score1 ;
            title.innerText =  'Player wins the round';
            console.log('player win');
            break;
        case 'scissorsrock':
        case 'paperscissors':
        case 'rockpaper':
            let score = currentComputerScore++;
            computerScore.innerText =  score;
            title.innerText =  'Computer wins the round';
            console.log('computer win');
            break;
        default:
            title.innerText =  'Tie';
            console.log('Tie');
    }
       // playerSign.innerText = whatever the sign is
       switch(playerChoice ){
        case "rock":{
            console.log('player rock')
            playerSign.innerHTML = "✊"
        }
            break;
        case "paper":{
            console.log('player paper')
            playerSign.innerHTML = "✋"
        }
            break;
        case "scissors":{
            console.log('player scissors')
            playerSign.innerHTML = "✌"
        }
            
    }
    switch(computerChoice ){
        case "rock":{
            console.log('computerChoice rock')
            computerSign.innerHTML = "✊"
        }
            break;
        case "paper":{
            console.log('computerChoice paper')
            computerSign.innerHTML = "✋"
        }
            break;
        case "scissors":{
            console.log('computerChoice scissors')
            computerSign.innerHTML = "✌"
        }
            
    }
}

function checkWinner() {
    if (currentPlayerScore === 6 ){
        winner.innerText = 'Player reach 5 points first'
        title.innerText = ''
        showRestart()
    }else if(currentComputerScore === 6){
        winner.innerText = 'Computer reach 5 points first'
        title.innerText = ''
        showRestart()
    }
}

// TODO Update the sign what ever the player or computer picked


let playerChoice = '';
buttons.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        playerChoice = btn.id;
        updateScore(playerChoice, computerChoice())
        checkWinner();
    });
});


restartButton.addEventListener('click',()=>{
    currentPlayerScore = 1;
    currentComputerScore = 1;

    playerScore.innerText = 0;
    computerScore.innerText =  0;

    winner.innerText = 'Choose your weapon';
    title.innerText = 'First to score 5 points wins the game';

    showRestart()
});
